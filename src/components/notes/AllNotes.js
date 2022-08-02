import Note from "./Note.js";
import { NotesContext } from "../../context/NotesContext.js";
import { useContext } from "react";
import NoteLabel from "./NoteLabel.js";
import { UserContext } from "../../context/UserContext.js";

export default function AllNotes({ isGrid }) {
  const { notes } = useContext(NotesContext);
  const { user } = useContext(UserContext);

  function getAllLabels(label) {
    if (label !== "") {
      return <NoteLabel>{label}</NoteLabel>;
    }
  }

  // render user specific notes only which is not archived or binned
  const allNotes = notes
    .filter(
      (n) =>
        n.author === user.uid && n.archived === false && n.deleted === false
    )
    .map((note) => (
      <Note {...note} labels={getAllLabels(note.label)} key={note.id} />
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
