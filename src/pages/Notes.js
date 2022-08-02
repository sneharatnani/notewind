import NewNote from "../components/notes/NewNote.js";
import useNotesData from "../hooks/useNotesData.js";
import Note from "../components/notes/Note.js";
import NoteLabel from "../components/notes/NoteLabel.js";

export default function Notes() {
  const notes = useNotesData();

  const allNotes = notes
    .filter((n) => n.archived === false && n.deleted === false)
    .map((note) => (
      <Note {...note} labels={NoteLabel(note.label)} key={note.id} />
    ));

  return (
    <>
      <NewNote />
      {allNotes}
    </>
  );
}
