import Note from "../components/note/Note.js";
import useNotesData from "../hooks/useNotesData.js";
import useSearch from "../hooks/useSearch.js";
import Layout from "../components/Layout.js";

export default function Archive({ isGrid, query }) {
  const { archived } = useNotesData();
  const searchResults = useSearch(query);

  const searchedNotes = searchResults.map((n) => <Note {...n} key={n.id} />);

  const archivedNotes = archived.map((n) => <Note {...n} key={n.id} />);

  return (
    <Layout isGrid={isGrid}>{query ? searchedNotes : archivedNotes}</Layout>
  );
}
