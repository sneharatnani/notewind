import NoteIcon from "../../assets/icons/NoteIcon.js";
import Bin from "../../assets/icons/BinIcon.js";
import Archive from "../../assets/icons/ArchiveIcon.js";
import StyledNavLink from "./StyledNavLink.js";

export default function NavLinks() {

  return (
    <>
      <StyledNavLink path="/">
        <NoteIcon />
        Notes
      </StyledNavLink>
      <StyledNavLink path="/archive">
        <Archive svgProps="mr-4 flex-shrink-0 h-6 w-6" />
        Archive
      </StyledNavLink>
      <StyledNavLink path="/bin">
        <Bin svgProps="mr-4 flex-shrink-0 h-6 w-6" />
        Bin
      </StyledNavLink>
   
    </>
  );
}
