import Label from "./Label.js";
import NoteIcon from "./NoteIcon.js";
import BinNav from "./BinNav.js";
import ArchiveNav from "./ArchiveNav.js";
import StyledNavLink from "./StyledNavLink.js";

export default function NavLinks() {
  return (
    <>
      <StyledNavLink path="/">
        <NoteIcon />
        Notes
      </StyledNavLink>
      <StyledNavLink path="/archive">
        <ArchiveNav />
        Archive
      </StyledNavLink>

      <StyledNavLink path="/bin">
        <BinNav />
        Bin
      </StyledNavLink>
      <StyledNavLink path="/">
        <Label />
        Shoppingllllllllllllllllllllllllllllllllllllllllllllll
      </StyledNavLink>
    </>
  );
}
