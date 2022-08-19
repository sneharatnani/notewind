import { db } from "../firebase-config.js";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./userContext.js";

export const NotesContext = createContext();

export default function NotesContextProvider({ children }) {
  const notesRef = collection(db, "notes");
  const [notes, setNotes] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    onSnapshot(query(notesRef, where("author", "==", user.uid)), (snapshot) => {
      setNotes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  async function addNewNote(newNote) {
    try {
      await addDoc(notesRef, newNote);
    } catch (err) {
      console.log(err);
    }
  }

  async function updateNote(id, value) {
    const note = doc(db, "notes", id);
    try {
      await updateDoc(note, value);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteNote(id) {
    const note = doc(db, "notes", id);
    try {
      await deleteDoc(note);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNewNote,
        updateNote,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}
