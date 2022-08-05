import { useContext } from "react";
import { NewNoteContext } from "../../../context/newNoteContext.js";

export default function Color({ bg }) {
  const { setNewNote } = useContext(NewNoteContext);

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
