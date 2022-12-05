import useNotesData from "./useNotesData.js";

export default function useSearch(query) {
  const { allNotes } = useNotesData();
  const searchResult = allNotes.filter(
    (note) =>
      note.title.toLowerCase().includes(query.toLowerCase()) ||
      note.body.toLowerCase().includes(query.toLowerCase()) ||
      note.label.join(" ").toLowerCase().includes(query.toLowerCase())
  );

  return searchResult;
}
