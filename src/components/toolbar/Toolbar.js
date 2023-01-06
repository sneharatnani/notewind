import ColorPalette from "./ColorPalette.js";
import BinIcon from "../../assets/icons/BinIcon.js";
import ArchiveIcon from "../../assets/icons/ArchiveIcon.js";
import Pin from "./Pin.js";
import CheckIcon from "../../assets/icons/CheckIcon.js";
import RestoreIcon from "../../assets/icons/RestoreIcon.js";
import DeleteForeverIcon from "../../assets/icons/DeleteForeverIcon.js";
import UnarchiveIcon from "../../assets/icons/UnArchiveIcon.js";
import LabelContainer from "./label/LabelContainer.js";

export default function Toolbar(props) {
  const { deleted, archived } = props;

  return (
    <>
      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-4 text-gray-600">
          {!deleted && <ColorPalette changeBg={props.changeBg} />}

          {!deleted && (
            <button className="hover:text-gray-500/80" onClick={props.binNote}>
              <BinIcon svgProps="h-5 w-5" />
            </button>
          )}

          {!archived && !deleted && (
            <button
              className="hover:text-gray-500/80"
              onClick={props.archiveNote}
            >
              <ArchiveIcon svgProps="h-5 w-5" />
            </button>
          )}

          {!deleted && (
            <LabelContainer
              label={props.label}
              deleteLabel={props.deleteLabel}
              addNewLabel={props.addNewLabel}
            />
          )}

          {!archived && !deleted && (
            <Pin pinNote={props.pinNote} pinned={props.pinned} />
          )}

          {archived && !deleted && (
            <button
              className="hover:text-gray-500/80"
              onClick={props.unarchiveNote}
            >
              <UnarchiveIcon />
            </button>
          )}

          {deleted && (
            <button
              className="hover:text-gray-500/80"
              onClick={props.deleteNoteForever}
            >
              <DeleteForeverIcon />
            </button>
          )}

          {deleted && (
            <button
              className="hover:text-gray-500/80"
              onClick={props.restoreNote}
            >
              <RestoreIcon />
            </button>
          )}
        </div>

        {/* save note */}
        <button onClick={props.closeModal} data-testid="save-note">
          <CheckIcon />
        </button>
      </div>
    </>
  );
}
