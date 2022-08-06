import ArchivedNote from "../components/note/ArchivedNote.js";
import useNotesData from "../hooks/useNotesData.js";

export default function Archive({isGrid}) {
  const notes = useNotesData();

  const archivedNotes = notes
    .filter((note) => note.archived === true && note.deleted === false)
    .map((n) => <ArchivedNote {...n} label={n.label} key={n.id} />);

  return (
    <div
      className={
        isGrid
          ? "pt-4 px-2 grid grid-cols-2col justify-center gap-4 sm:grid-cols-3col md:px-4 md:grid-cols-2col lg:grid-cols-3col xl:grid-cols-4col"
          : "pt-4 px-4 grid grid-cols-1col justify-center gap-y-4 sm:px-8 lg:px-10 xl:px-16"
      }
    >
      {archivedNotes}
    </div>
  );
}
