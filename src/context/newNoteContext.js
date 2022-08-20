import { createContext, useState, useEffect, useContext } from "react";
import { NotesContext } from "./notesContext.js";

export const NewNoteContext = createContext();

export default function NewNoteContextProvider({ children }) {
  const { addNewNote } = useContext(NotesContext);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
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

  // to delete new note
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    async function deleteNewNote() {
      try {
        if (newNote.body !== "" || newNote.title !== "") {
          await addNewNote(newNote);
          setMessage("Note Deleted");
          setShow(true);
        } else {
          setMessage("Can't Delete Empty Note");
          setShow(true);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (isDeleted) {
      deleteNewNote().finally(() => {
        setIsDeleted(false);
        setTimeout(() => setShow(false), 4000);
      });
    }
  }, [isDeleted]);

  // to archive new note
  const [isArchived, setIsArchived] = useState(false);
  useEffect(() => {
    async function archiveNewNote() {
      try {
        if (newNote.body !== "" || newNote.title !== "") {
          await addNewNote(newNote);
          setMessage("Note Archived");
          setShow(true);
        } else {
          setMessage("Can't Archive Empty Note");
          setShow(true);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (isArchived) {
      archiveNewNote().finally(() => {
        setIsArchived(false);
        setTimeout(() => setShow(false), 4000);
      });
    }
  }, [isArchived]);

  function createNewNote() {
    if (newNote.body !== "" || newNote.title !== "") {
      addNewNote(newNote);
    }
  }

  return (
    <NewNoteContext.Provider
      value={{
        setIsDeleted,
        createNewNote,
        setNewNote,
        newNote,
        message,
        show,
        setShow,
        setIsArchived,
      }}
    >
      {children}
    </NewNoteContext.Provider>
  );
}
