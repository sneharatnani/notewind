import NewNote from "../components/notes/NewNote.js";
import AllNotes from "../components/notes/AllNotes.js";

export default function Notes({ isGrid }) {
  return (
    <>
      <NewNote />

      <div className="min-h-[90vh]">
        <AllNotes isGrid={isGrid} />
      </div>
    </>
  );
}
