import useNotesData from "../hooks/useNotesData.js";
import Note from "../components/note/Note.js";
import useSearch from "../hooks/useSearch.js";
import Layout from "../components/Layout.js";

export default function Bin({ isGrid, query }) {
  const { deleted } = useNotesData();
  const searchResults = useSearch(query);

  const searchedNotes = searchResults.map((n) => <Note {...n} key={n.id} />);

  const deletedNotes = deleted.map((n) => <Note {...n} key={n.id} />);

  return (
    <Layout isGrid={isGrid}>{query ? searchedNotes : deletedNotes}</Layout>
  );
}
