import Navbar from "../components/navbar/Navbar.js";
import Pencil from "../components/notes/Pencil.js";
import NewNote from "../components/notes/NewNote.js";
import { useState } from "react";

export default function Notes() {
  const [open, setOpen] = useState(false);
  const change = () => setOpen((prev) => !prev);
  return (
    <>
      <Navbar />
      <Pencil setOpen={change} />
      <NewNote open={open} setOpen={setOpen} />
      <section className="md:pl-64"></section>
    </>
  );
}
