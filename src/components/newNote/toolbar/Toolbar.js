import ColorPalette from "./ColorPalette.js";
import ArchiveNote from "./ArchiveNote.js";
import Check from "../../../assets/icons/CheckIcon.js";
import BinNote from "./BinNote.js";
import PinNote from "./PinNote.js";

export default function Toolbar({ closeModal, createNewNote }) {
  return (
    <>
      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-4 text-gray-600">
          <ColorPalette/>
          <BinNote closeModal={closeModal} />
          <ArchiveNote closeModal={closeModal} />
          <PinNote />
        </div>

        <button
          onClick={() => {
            createNewNote();
            closeModal();
          }}
        >
          <Check />
        </button>
      </div>
    </>
  );
}
