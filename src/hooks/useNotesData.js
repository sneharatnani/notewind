import { useContext } from "react";
import { NotesContext } from "../context/NotesContext.js";
import { UserContext } from "../context/UserContext.js";

export default function useNotesData() {
  const { user } = useContext(UserContext);
  const { notes } = useContext(NotesContext);

  // return user specific notes
  return notes.filter((note) => note.author === user.uid);
}
