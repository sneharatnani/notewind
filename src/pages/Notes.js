import NewNote from "../components/newNote/NewNote.js";
import useNotesData from "../hooks/useNotesData.js";
import Note from "../components/note/Note.js";

export default function Notes({ isGrid, query }) {
  const notes = useNotesData();
  const filtered = notes.filter(
    (n) => n.archived === false && n.deleted === false
  );

  const pinnedNotes = filtered
    .filter((note) => note.pinned === true)
    .map((n) => <Note {...n} key={n.id} />);

  const otherNotes = filtered
    .filter((note) => note.pinned === false)
    .map((n) => <Note {...n} key={n.id} />);

  const searchedNotes = notes
    .filter(
      (note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.body.toLowerCase().includes(query.toLowerCase()) ||
        note.label.toLowerCase().includes(query.toLowerCase())
    )
    .map((n) => <Note {...n} key={n.id} />);

  return (
    <>
      {query !== "" ? (
        <div
          className={
            isGrid
              ? "pt-4 px-2 grid grid-cols-2col justify-center gap-4 sm:grid-cols-3col md:px-4 md:grid-cols-2col lg:grid-cols-3col xl:grid-cols-4col"
              : "pt-4 px-4 grid grid-cols-1col justify-center gap-y-4 sm:px-8 lg:px-10 xl:px-16"
          }
        >
          {searchedNotes}
        </div>
      ) : (
        <>
          <NewNote />
          <section>
            {pinnedNotes.length !== 0 && (
              <p
                className={`text-xs font-medium text-gray-500 mb-2 pt-4 ${
                  isGrid ? "pl-6" : "text-center"
                }`}
              >
                PINNED
              </p>
            )}
            <div
              className={`mb-10 ${
                isGrid
                  ? "px-2 grid grid-cols-2col justify-center gap-4 sm:grid-cols-3col md:px-4 md:grid-cols-2col lg:grid-cols-3col xl:grid-cols-4col"
                  : "px-4 grid grid-cols-1col justify-center gap-y-4 sm:px-8 lg:px-10 xl:px-16"
              }`}
            >
              {pinnedNotes}
            </div>
            {otherNotes.length !== 0 && pinnedNotes.length !== 0 && (
              <p
                className={`text-xs font-medium text-gray-500 mb-2 ${
                  isGrid ? "pl-6" : "text-center"
                }`}
              >
                OTHERS
              </p>
            )}
            <div
              className={
                isGrid
                  ? "px-2 grid grid-cols-2col justify-center gap-4 sm:grid-cols-3col md:px-4 md:grid-cols-2col lg:grid-cols-3col xl:grid-cols-4col"
                  : "px-4 grid grid-cols-1col justify-center gap-y-4 sm:px-8 lg:px-10 xl:px-16"
              }
            >
              {otherNotes}
            </div>
          </section>
        </>
      )}
    </>
  );
}
