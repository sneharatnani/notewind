import NewNote from "../components/newNote/NewNote.js";
import useNotesData from "../hooks/useNotesData.js";
import Note from "../components/note/Note.js";
import NoteLabel from "../components/note/NoteLabel.js";

export default function Notes({isGrid}) {
  const notes = useNotesData();

   const pinned = notes
     .filter(
       (n) => n.archived === false && n.deleted === false && n.pinned === true
     )
     .map((note) => (
       <Note {...note} labels={NoteLabel(note.label)} key={note.id} />
     ));

  const others = notes
    .filter((n) => n.archived === false && n.deleted === false && n.pinned === false)
    .map((note) => (
      <Note {...note} labels={NoteLabel(note.label)} key={note.id} />
    ));

  return (
    <>
      <NewNote />
      <section>
        <p
          className={`text-xs font-medium text-gray-500 mb-2 pt-4 ${
            isGrid ? "pl-6" : "text-center"
          }`}
        >
          PINNED
        </p>
        <div
          className={`mb-10 ${
            isGrid
              ? "px-2 grid grid-cols-2col justify-center gap-4 sm:grid-cols-3col md:px-4 md:grid-cols-2col lg:grid-cols-3col xl:grid-cols-4col"
              : "px-4 grid grid-cols-1col justify-center gap-y-4 sm:px-8 lg:px-10 xl:px-16"
          }`}
        >
          {pinned}
        </div>
        <p
          className={`text-xs font-medium text-gray-500 mb-2 ${
            isGrid ? "pl-6" : "text-center"
          }`}
        >
          OTHERS
        </p>
        <div
          className={
            isGrid
              ? "px-2 grid grid-cols-2col justify-center gap-4 sm:grid-cols-3col md:px-4 md:grid-cols-2col lg:grid-cols-3col xl:grid-cols-4col"
              : "px-4 grid grid-cols-1col justify-center gap-y-4 sm:px-8 lg:px-10 xl:px-16"
          }
        >
          {others}
        </div>
      </section>
    </>
  );
}
