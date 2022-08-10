import NoteIcon from "../../assets/icons/NoteIcon.js";
import Bin from "../../assets/icons/BinIcon.js";
import Archive from "../../assets/icons/ArchiveIcon.js";
import StyledNavLink from "./StyledNavLink.js";

export default function NavLinks(props) {
  const { setSidebarOpen, setQuery } = props;

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
    </>
  );
}
