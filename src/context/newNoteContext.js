import { createContext, useState, useEffect, useContext } from "react";
import { NotesContext } from "./notesContext.js";

export const NewNoteContext = createContext();

export default function NewNoteContextProvider({ children }) {
    const { addNewNote } = useContext(NotesContext);
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
                await createNewNote()
            } catch (error) {
              console.error(error);
            }
          }

          if (isDeleted) {
              deleteNewNote().finally(() => {
              setIsDeleted(false);
            });
          }
        }, [isDeleted]);
    
    // to archive new note
     const [isArchived, setIsArchived] = useState(false);
     useEffect(() => {
       async function archiveNewNote() {
         try {
           await createNewNote();
         } catch (error) {
           console.error(error);
         }
       }

       if (isArchived) {
         archiveNewNote().finally(() => {
           setIsArchived(false);
         });
       }
     }, [isArchived]);
    
    function createNewNote() {
        if (newNote.body !== "" || newNote.title !== "") {
            addNewNote(newNote);
        }
    }

    return (
      <NewNoteContext.Provider value={{ setIsDeleted, createNewNote,setNewNote,newNote,setIsArchived }}>
        {children}
      </NewNoteContext.Provider>
    );
}