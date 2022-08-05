import Note from "../components/notes/Note.js";
import NoteLabel from "../components/notes/NoteLabel.js";
import useNotesData from "../hooks/useNotesData.js";

export default function Archive() {
  const notes = useNotesData();

  const archivedNotes = notes
    .filter((note) => note.archived === true && note.deleted === false)
    .map((n) => <Note {...n} labels={NoteLabel(n.label)} key={n.id} />);

  return archivedNotes;
}
