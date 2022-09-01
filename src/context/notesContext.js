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
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./userContext.js";

export const NotesContext = createContext();

export default function NotesContextProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const { user } = useContext(UserContext);
  const notesRef = collection(db, "notes");
  const q = query(
    notesRef,
    where("author", "==", user.uid),
    orderBy("createdAt", "desc")
  );

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setNotes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return unsubscribe;
  }, []);

  async function addNewNote(newNote) {
    try {
      await addDoc(notesRef, { ...newNote, createdAt: Timestamp.now() });
    } catch (err) {
      console.log(err);
    }
  }

  async function updateNote(id, value) {
    const note = doc(db, "notes", id);
    try {
      await updateDoc(note, { ...value, createdAt: Timestamp.now() });
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
