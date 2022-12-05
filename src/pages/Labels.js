import Layout from "../components/Layout.js";
import Note from "../components/note/Note.js";
import useNotesData from "../hooks/useNotesData.js";
import useSearch from "../hooks/useSearch.js";

export default function Labels(props) {
  const { isGrid, query, pathName } = props;
  const { labeledNotes } = useNotesData();
  const searchResults = useSearch(query);

  return (
    <Layout isGrid={isGrid}>
      {query
        ? searchResults.map((note) => <Note {...note} key={note.id} />)
        : labeledNotes
            .filter((note) =>
              note.label.includes(pathName.split("-").join(" "))
            )
            .map((n) => <Note {...n} key={n.id} />)}
    </Layout>
  );
}
