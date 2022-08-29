import ColorPalette from "./ColorPalette.js";
import Bin from "./Bin.js";
import Archive from "./Archive.js";
import Pin from "./Pin.js";
import CheckIcon from "../../../assets/icons/CheckIcon.js";
import Unarchive from "./Unarchive.js";
import Restore from "./Restore.js";
import DeleteForever from "./DeleteForever.js";

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
          {!deleted && <Bin binNote={binNote} />}

          {/* archive */}
          {!archived && !deleted && <Archive archiveNote={archiveNote} />}

          {/* pin */}
          {!archived && !deleted && <Pin pinNote={pinNote} pinned={pinned} />}

          {/* unarchive */}
          {archived && !deleted && <Unarchive unarchiveNote={unarchiveNote} />}

          {/* deleteForever */}
          {deleted && <DeleteForever deleteNoteForever={deleteNoteForever} />}

          {/* restore */}
          {deleted && <Restore restoreNote={restoreNote} />}
        </div>

        {/* check */}
        <button onClick={closeModal}>
          <CheckIcon />
        </button>
      </div>
    </>
  );
}
