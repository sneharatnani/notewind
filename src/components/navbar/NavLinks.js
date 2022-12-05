import NoteIcon from "../../assets/icons/NoteIcon.js";
import BinIcon from "../../assets/icons/BinIcon.js";
import ArchiveIcon from "../../assets/icons/ArchiveIcon.js";
import useNotesData from "../../hooks/useNotesData.js";
import { Link } from "react-router-dom";
import LabelIcon from "../../assets/icons/LabelIcon.js";

export default function NavLinks(props) {
  const { setSidebarOpen, setQuery, setPathName } = props;
  const { labeledNotes } = useNotesData();

  function getAllLabels() {
    const labels = labeledNotes.map((n) => n.label);
    const mergedLabels = [].concat(...labels);
    const allLabels = [...new Set(mergedLabels)].sort((a, b) =>
      a.localeCompare(b)
    );
    return allLabels;
  }

  function handleClick() {
    setSidebarOpen(false);
    setQuery("");
  }

  return (
    <>
      <Link
        to="/"
        className="text-white font-poppins hover:bg-sky-300/50 group flex items-center px-2 py-2 text-lg font-medium rounded-md break-all"
        onClick={handleClick}
      >
        <NoteIcon />
        Notes
      </Link>

      <Link
        to="/archive"
        className="text-white font-poppins hover:bg-sky-300/50 group flex items-center px-2 py-2 text-lg font-medium rounded-md break-all"
        onClick={handleClick}
      >
        <ArchiveIcon svgProps="mr-4 flex-shrink-0 h-6 w-6" />
        Archive
      </Link>

      <Link
        to="/bin"
        className="text-white font-poppins hover:bg-sky-300/50 group flex items-center px-2 py-2 text-lg font-medium rounded-md break-all"
        onClick={handleClick}
      >
        <BinIcon svgProps="mr-4 flex-shrink-0 h-6 w-6" />
        Bin
      </Link>

      {/* all labels */}
      {getAllLabels().map((label) => (
        <Link
          to={`/${label.replace(/\s/g, "-")}`}
          onClick={() => {
            setPathName(label.replace(/\s/g, "-"));
            handleClick();
          }}
          className="text-white font-poppins hover:bg-sky-300/50 group flex items-center px-2 py-2 text-lg font-medium rounded-md break-all"
          key={label}
        >
          <LabelIcon svgProps="mr-4 flex-shrink-0 h-6 w-6" />
          {label}
        </Link>
      ))}
    </>
  );
}
