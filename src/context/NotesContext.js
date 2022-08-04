import { db } from "../firebase-config.js";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { createContext, useState, useEffect } from "react";

export const NotesContext = createContext();

export default function NotesContextProvider({ children }) {
  const notesRef = collection(db, "notes");
  const [notes, setNotes] = useState([]);
  const [deleteNewNote, setNewDeleteNote] = useState(false);
  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
    label: "",
    archived: false,
    author: "",
    bg: "bg-white",
    deleted: false,
    pinned: false,
  });

  useEffect(() => {
    const unsubscribe = () =>
      onSnapshot(notesRef, (snapshot) => {
        setNotes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    unsubscribe();

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    async function deleteNote() {
      try {
        if (newNote.body !== "" || newNote.title !== "") {
          await addNewNote(newNote);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (deleteNewNote) {
      deleteNote().finally(() => {
        setNewDeleteNote(false);
      });
    }
  }, [deleteNewNote]);

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
        newNote,
        setNewNote,
        setNewDeleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}
