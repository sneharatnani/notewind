import NoteIcon from "../../assets/icons/NoteIcon.js";
import Bin from "../../assets/icons/BinIcon.js";
import Archive from "../../assets/icons/ArchiveIcon.js";
import StyledNavLink from "./StyledNavLink.js";
import useNotesData from "../../hooks/useNotesData.js";
import { Link } from "react-router-dom";
import LabelIcon from "../../assets/icons/LabelIcon.js";

export default function NavLinks(props) {
  const { setSidebarOpen, setQuery, setPathName } = props;
  const allNotes = useNotesData();
  const allLabels = allNotes.filter((note) => note.label !== "");

  function getAllLabels() {
    const labels = allLabels.map((n) => n.label);
    let sortedLabels = [];
    for (let i = 0; i < labels.length; i++) {
      if (!sortedLabels.includes(labels[i])) {
        sortedLabels.push(labels[i]);
      }
    }
    return sortedLabels;
  }

  return (
    <>
      <StyledNavLink
        path="/"
        setSidebarOpen={setSidebarOpen}
        setQuery={setQuery}
      >
        <NoteIcon />
        Notes
      </StyledNavLink>
      <StyledNavLink
        path="/archive"
        setSidebarOpen={setSidebarOpen}
        setQuery={setQuery}
      >
        <Archive svgProps="mr-4 flex-shrink-0 h-6 w-6" />
        Archive
      </StyledNavLink>
      <StyledNavLink
        path="/bin"
        setSidebarOpen={setSidebarOpen}
        setQuery={setQuery}
      >
        <Bin svgProps="mr-4 flex-shrink-0 h-6 w-6" />
        Bin
      </StyledNavLink>
      {/* all labels */}
      {getAllLabels().map((label, i) => (
        <Link
          to={`/${label.split(" ").join("")}`}
          onClick={() => setPathName(label.split(" ").join(""))}
          className="text-white hover:bg-sky-300/50 group flex items-center px-2 py-2 text-lg font-medium rounded-md break-all"
          key={i}
        >
          <LabelIcon svgProps="mr-4 flex-shrink-0 h-6 w-6" />
          {label}
        </Link>
      ))}
    </>
  );
}
