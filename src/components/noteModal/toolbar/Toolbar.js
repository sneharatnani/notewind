import ColorPalette from "./ColorPalette.js";
import BinIcon from "../../../assets/icons/BinIcon.js";
import ArchiveIcon from "../../../assets/icons/ArchiveIcon.js";
import Pin from "./Pin.js";
import CheckIcon from "../../../assets/icons/CheckIcon.js";
import RestoreIcon from "../../../assets/icons/RestoreIcon.js";
import DeleteForeverIcon from "../../../assets/icons/DeleteForeverIcon.js";
import IconContainer from "./IconContainer.js";
import UnarchiveIcon from "../../../assets/icons/UnArchiveIcon.js";

export default function Toolbar(props) {
  const {
    closeModal,
    changeBg,
    binNote,
    archiveNote,
    unarchiveNote,
    pinNote,
    restoreNote,
    deleteNoteForever,
    pinned,
    deleted,
    archived,
  } = props;

  return (
    <>
      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-4 text-gray-600">
          {/* color palette */}
          {!deleted && <ColorPalette changeBg={changeBg} />}

          {/* bin */}
          {!deleted && (
            <IconContainer handleClick={binNote}>
              <BinIcon svgProps="h-5 w-5" />
            </IconContainer>
          )}

          {/* archive */}
          {!archived && !deleted && (
            <IconContainer handleClick={archiveNote}>
              <ArchiveIcon svgProps="h-5 w-5" />
            </IconContainer>
          )}

          {/* pin */}
          {!archived && !deleted && <Pin pinNote={pinNote} pinned={pinned} />}

          {/* unarchive */}
          {archived && !deleted && (
            <IconContainer handleClick={unarchiveNote}>
              <UnarchiveIcon />
            </IconContainer>
          )}

          {/* deleteForever */}
          {deleted && (
            <IconContainer handleClick={deleteNoteForever}>
              <DeleteForeverIcon />
            </IconContainer>
          )}

          {/* restore */}
          {deleted && (
            <IconContainer handleClick={restoreNote}>
              <RestoreIcon />
            </IconContainer>
          )}
        </div>

        {/* check */}
        <button onClick={closeModal} data-testid="save-note">
          <CheckIcon />
        </button>
      </div>
    </>
  );
}
