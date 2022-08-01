import Note from "./Note.js";
import { NotesContext } from "../../context/NotesContext.js";
import { useContext } from "react";

export default function AllNotes({ isGrid }) {
  const { notes } = useContext(NotesContext);
  console.log(notes);

  const allNotes = notes.map((note) => (
    <Note title={note.title} body={note.body} key={note.id} />
  ));

  return (
    <div
      className={
        isGrid
          ? "pt-4 px-2 grid grid-cols-2col justify-center gap-4 sm:grid-cols-3col md:px-4 md:grid-cols-2col lg:grid-cols-3col xl:grid-cols-4col"
          : "pt-4 px-4 grid grid-cols-1col justify-center gap-y-4 sm:px-8 lg:px-10 xl:px-16"
      }
    >
      {allNotes}
    </div>
  );
}
