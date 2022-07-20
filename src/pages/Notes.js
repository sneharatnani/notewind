import { useContext } from "react";
import NewNote from "../components/notes/NewNote.js";
import { NotesContext } from "../context/NotesContext.js";

export default function Notes() {
  const { notes } = useContext(NotesContext);
  console.log(notes);
  return (
    <>
      <NewNote />
      <section className="md:pl-64"></section>
    </>
  );
}
