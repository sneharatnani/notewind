import useNotesData from "../hooks/useNotesData.js";
import Note from "../components/notes/Note.js";
import NoteLabel from "../components/notes/NoteLabel.js";

export default function Bin() {
  const notes = useNotesData();

  const deletedNotes = notes
    .filter((note) => note.deleted === true)
    .map((n) => <Note {...n} labels={NoteLabel(n.label)} key={n.id} />);

  return deletedNotes;
}
