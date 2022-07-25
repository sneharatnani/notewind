import { useContext } from "react";
import NewNote from "../components/notes/NewNote.js";
import { NotesContext } from "../context/NotesContext.js";
import AllNotes from "../components/notes/AllNotes.js";

export default function Notes({ isGrid }) {
  const { notes } = useContext(NotesContext);
  console.log(notes);
  return (
    <>
      <NewNote />

      <div className="min-h-[90vh] dark:bg-darkModeColor dark:text-white">
        <AllNotes isGrid={isGrid} />
      </div>
    </>
  );
}
