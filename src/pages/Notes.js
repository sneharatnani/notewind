import { useContext } from "react";
import Navbar from "../components/navbar/Navbar.js";
import NewNote from "../components/notes/NewNote.js";
import { NotesContext } from "../context/NotesContext.js";

export default function Notes() {
  const { notes } = useContext(NotesContext);
  console.log(notes);
  return (
    <>
      <Navbar />
      <NewNote />
      <section className="md:pl-64"></section>
    </>
  );
}
