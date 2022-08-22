import ColorPaletteIcon from "../../assets/icons/ColorPaletteIcon.js";
import Bin from "../../assets/icons/BinIcon.js";
import Archive from "../../assets/icons/ArchiveIcon.js";
import Pinned from "../../assets/icons/PinIcon.js";
import Unpinned from "../../assets/icons/UnpinIcon.js";
import Check from "../../assets/icons/CheckIcon.js";
import { useContext, useState } from "react";
import { ToastContext } from "../../context/toastContext.js";

export default function NewNoteToolbar(props) {
  const { closeModal, createNewNote, setNewNote, newNote } = props;
  const [showColors, setShowColors] = useState(false);
  const { setShow } = useContext(ToastContext);

  return (
    <>
      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-4 text-gray-600">
          {/* color palette */}
          <>
            <button
              className="hover:text-gray-500/80"
              onClick={() => setShowColors(true)}
            >
              <ColorPaletteIcon />
            </button>
            {showColors && (
              <>
                <div
                  className="absolute top-0 left-0 bg-transparent h-full w-screen"
                  onClick={() => setShowColors(false)}
                ></div>
                <div className="absolute bottom-14 flex gap-2 bg-zinc-500 p-2 rounded-xl">
                  <span
                    className="cursor-pointer h-6 w-6 rounded-full block bg-white"
                    onClick={() =>
                      setNewNote((prevNote) => ({
                        ...prevNote,
                        bg: "bg-white",
                      }))
                    }
                  />
                  <span
                    className="cursor-pointer h-6 w-6 rounded-full block bg-orange-200"
                    onClick={() =>
                      setNewNote((prevNote) => ({
                        ...prevNote,
                        bg: "bg-orange-200",
                      }))
                    }
                  />
                  <span
                    className="cursor-pointer h-6 w-6 rounded-full block bg-green-200"
                    onClick={() =>
                      setNewNote((prevNote) => ({
                        ...prevNote,
                        bg: "bg-green-200",
                      }))
                    }
                  />
                  <span
                    className="cursor-pointer h-6 w-6 rounded-full block bg-red-200"
                    onClick={() =>
                      setNewNote((prevNote) => ({
                        ...prevNote,
                        bg: "bg-red-200",
                      }))
                    }
                  />
                  <span
                    className="cursor-pointer h-6 w-6 rounded-full block bg-indigo-200"
                    onClick={() =>
                      setNewNote((prevNote) => ({
                        ...prevNote,
                        bg: "bg-indigo-200",
                      }))
                    }
                  />
                  <span
                    className="cursor-pointer h-6 w-6 rounded-full block bg-yellow-200"
                    onClick={() =>
                      setNewNote((prevNote) => ({
                        ...prevNote,
                        bg: "bg-yellow-200",
                      }))
                    }
                  />
                  <span
                    className="cursor-pointer h-6 w-6 rounded-full block bg-purple-200"
                    onClick={() =>
                      setNewNote((prevNote) => ({
                        ...prevNote,
                        bg: "bg-purple-200",
                      }))
                    }
                  />
                </div>
              </>
            )}
          </>

          {/* bin */}
          <button
            className="hover:text-gray-500/80"
            onClick={() => {
              setNewNote((prevNote) => ({ ...prevNote, deleted: true }));
              setTimeout(() => setShow(false), 4000);
            }}
          >
            <Bin svgProps="h-5 w-5" />
          </button>

          {/* archive */}
          <button
            className="hover:text-gray-500/80"
            onClick={() => {
              setNewNote((prevNote) => ({ ...prevNote, archived: true }));
              setTimeout(() => setShow(false), 4000);
            }}
          >
            <Archive svgProps="h-5 w-5" />
          </button>

          {/* pin */}
          <button
            className="hover:text-gray-500/80"
            onClick={() =>
              setNewNote((prevNote) => ({
                ...prevNote,
                pinned: !prevNote.pinned,
              }))
            }
          >
            {newNote.pinned ? <Pinned /> : <Unpinned />}
          </button>
        </div>

        {/* check */}
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
