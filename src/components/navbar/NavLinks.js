import { Link } from "react-router-dom";
import noteIcon from "../../assets/note.svg";
import binIcon from "../../assets/bin.svg";
import archiveIcon from "../../assets/archive.svg";

export default function NavLinks() {
  return (
    <>
      <Link
        to="/notes"
        className="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md"
      >
        <img
          src={noteIcon}
          className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
        />
        Notes
      </Link>
      <Link
        to="/archive"
        className="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md"
      >
        <img
          src={archiveIcon}
          className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
        />
        Archive
      </Link>
      <Link
        to="/bin"
        className="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md"
      >
        <img
          src={binIcon}
          className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
        />
        Bin
      </Link>
    </>
  );
}
