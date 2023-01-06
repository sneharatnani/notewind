import NewNote from "../components/newNote/NewNote.js";
import useNotesData from "../hooks/useNotesData.js";
import Note from "../components/note/Note.js";
import useSearch from "../hooks/useSearch.js";
import Layout from "../components/Layout.js";

export default function Notes({ isGrid, query }) {
  const { pinned, unpinned } = useNotesData();
  const searchResults = useSearch(query);

  const pinnedNotes = pinned.map((n) => <Note {...n} key={n.id} />);

  const otherNotes = unpinned.map((n) => <Note {...n} key={n.id} />);

  const searchedNotes = searchResults.map((n) => <Note {...n} key={n.id} />);

  return (
    <>
      {query !== "" ? (
        <Layout isGrid={isGrid}>{searchedNotes}</Layout>
      ) : (
        <>
          <NewNote />
          <section>
            {pinnedNotes.length !== 0 && (
              <p
                className={`text-xs font-medium text-gray-500 mt-8 ${
                  isGrid ? "pl-6 xl:pl-8" : "text-center"
                }`}
              >
                PINNED
              </p>
            )}
            <Layout isGrid={isGrid}>{pinnedNotes}</Layout>

            {otherNotes.length !== 0 && pinnedNotes.length !== 0 && (
              <p
                className={`text-xs font-medium text-gray-500 mt-16 ${
                  isGrid ? "pl-6 xl:pl-8" : "text-center"
                }`}
              >
                OTHERS
              </p>
            )}
            <Layout isGrid={isGrid}>{otherNotes}</Layout>
          </section>
        </>
      )}
    </>
  );
}
