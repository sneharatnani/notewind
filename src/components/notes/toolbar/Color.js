import { useContext } from "react";
import { NotesContext } from "../../../context/NotesContext.js";

export default function Color({ bg }) {
  const { setNewNote } = useContext(NotesContext);

  return (
    <span
      className={`cursor-pointer h-6 w-6 rounded-full block ${bg}`}
      onClick={() =>
        setNewNote((prevNote) => ({
          ...prevNote,
          bg,
        }))
      }
    />
  );
}
