import { useContext } from "react";
import { NotesContext } from "../context/notesContext.js";

export default function useNotesData() {
  const { notes } = useContext(NotesContext);

  const allNotes = notes;

  const deleted = allNotes.filter((note) => note.deleted === true);

  const archived = allNotes.filter(
    (note) => note.archived === true && note.deleted === false
  );

  const labeledNotes = allNotes.filter((note) => note.label !== "");

  const pinned = allNotes.filter(
    (note) =>
      note.deleted === false && note.archived === false && note.pinned === true
  );

  const unpinned = allNotes.filter(
    (note) =>
      note.deleted === false && note.archived === false && note.pinned === false
  );

  return {
    allNotes,
    deleted,
    archived,
    labeledNotes,
    pinned,
    unpinned,
  };
}
