import { Link } from "react-router-dom";
import NoteIcon from "./NoteIcon.js";
import BinNav from "./BinNav.js";
import ArchiveNav from "./ArchiveNav.js";

export default function NavLinks() {
  return (
    <>
      <Link
        to="/"
        className="text-white hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md"
      >
        <NoteIcon />
        Notes
      </Link>
      <Link
        to="/archive"
        className="text-white hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md"
      >
        <ArchiveNav />
        Archive
      </Link>
      <Link
        to="/bin"
        className="text-white hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md"
      >
        <BinNav />
        Bin
      </Link>
    </>
  );
}
