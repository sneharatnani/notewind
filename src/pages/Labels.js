import Layout from "../components/Layout.js";
import Note from "../components/note/Note.js";
import useNotesData from "../hooks/useNotesData.js";
import useSearch from "../hooks/useSearch.js";

export default function Labels(props) {
  const { isGrid, query, pathName } = props;
  const { allNotes } = useNotesData();

  const labeledNotes = allNotes
    .filter((note) => note.label.split(" ").join("") === pathName)
    .map((n) => <Note {...n} key={n.id} />);

  const searchedNotes = useSearch(query).map((n) => <Note {...n} key={n.id} />);

  return (
    <Layout isGrid={isGrid}>{query ? searchedNotes : labeledNotes}</Layout>
  );
}
