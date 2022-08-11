import { useContext } from "react";
import { NotesContext } from "../context/notesContext.js";
import { UserContext } from "../context/userContext.js";

export default function useNotesData() {
  const { user } = useContext(UserContext);
  const { notes } = useContext(NotesContext);
  // user specific notes
  const allNotes = notes.filter((note) => note.author === user.uid);

  // deleted
  const deleted = allNotes.filter((note) => note.deleted === true);

  // archived
  const archived = allNotes.filter(
    (note) => note.archived === true && note.deleted === false
  );

  // labeled
  const labeledNotes = allNotes.filter((note) => note.label !== "");

  // pinned
  const pinned = allNotes.filter(
    (note) =>
      note.deleted === false && note.archived === false && note.pinned === true
  );

  // unpinned
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
