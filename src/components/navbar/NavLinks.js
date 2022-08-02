import Label from "../../assets/icons/Label.js";
import NoteIcon from "../../assets/icons/NoteIcon.js";
import Bin from "../../assets/icons/Bin.js";
import Archive from "../../assets/icons/Archive.js";
import StyledNavLink from "./StyledNavLink.js";

export default function NavLinks() {
  return (
    <>
      <StyledNavLink path="/">
        <NoteIcon svgProps="mr-4 flex-shrink-0 h-6 w-6" />
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
      <StyledNavLink path="/">
        <Label svgProps="mr-4 flex-shrink-0 h-6 w-6" />
        Shopping
      </StyledNavLink>
    </>
  );
}
