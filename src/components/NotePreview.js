import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import ColorPaletteIcon from "../assets/icons/ColorPaletteIcon.js";
import Check from "../assets/icons/CheckIcon.js";
import Bin from "../assets/icons/BinIcon.js";
import Archive from "../assets/icons/ArchiveIcon.js";
import Pinned from "../assets/icons/PinIcon.js";
import Unpinned from "../assets/icons/UnpinIcon.js";
import UnArchive from "../assets/icons/UnArchiveIcon.js";
import DeleteForever from "../assets/icons/DeleteForeverIcon.js";
import Restore from "../assets/icons/RestoreIcon.js";
import { NotesContext } from "../context/notesContext.js";
import { ToastContext } from "../context/toastContext.js";

export default function NotePreview(props) {
  const {
    id,
    title,
    body,
    bg,
    label,
    pinned,
    deleted,
    archived,
    isOpen,
    setIsOpen,
  } = props;
  const [showColors, setShowColors] = useState(false);
  const [note, setNote] = useState({
    title,
    body,
    bg,
    label,
  });
  const { updateNote, deleteNote } = useContext(NotesContext);
  // toast
  const { setShow, setMessage } = useContext(ToastContext);

  function setUpdatedNote() {
    for (let key in note) {
      updateNote(id, { [key]: note[key] });
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  function changeBg(bg) {
    setNote((prevNote) => ({ ...prevNote, bg }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`font-poppins w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all ${note.bg}`}
              >
                {/* note title */}
                {deleted ? (
                  <input
                    type="text"
                    placeholder="Title"
                    value={note.title}
                    readOnly
                    className="font-medium tracking-wide border-0 w-full focus:ring-0 block focus-visible:outline-none text-lg bg-transparent"
                  />
                ) : (
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={note.title}
                    onChange={handleChange}
                    className={`font-medium tracking-wide border-0 w-full focus:ring-0 block focus-visible:outline-none text-lg bg-transparent`}
                  />
                )}
                {/* note label */}
                {deleted ? (
                  <input
                    placeholder="Label"
                    type="text"
                    readOnly
                    value={note.label}
                    className="border-0 w-full tracking-wide focus:ring-0 block focus-visible:outline-none text-sm bg-transparent"
                  />
                ) : (
                  <input
                    placeholder="Label"
                    type="text"
                    name="label"
                    value={note.label}
                    onChange={handleChange}
                    className="border-0 w-full tracking-wide focus:ring-0 block focus-visible:outline-none text-sm bg-transparent"
                  />
                )}
                {/* note body */}
                {deleted ? (
                  <textarea
                    placeholder="Start Here..."
                    value={note.body}
                    readOnly
                    className="border-0 focus:ring-0 min-h-[8rem] tracking-wide resize-none focus-visible:outline-none w-full block bg-transparent"
                  />
                ) : (
                  <textarea
                    placeholder="Start Here..."
                    name="body"
                    value={note.body}
                    onChange={handleChange}
                    className="border-0 focus:ring-0 min-h-[8rem] tracking-wide resize-none focus-visible:outline-none w-full block bg-transparent"
                  />
                )}

                {/* preview toolbar start */}
                <section className="flex justify-between items-center mt-3">
                  <div className="flex gap-4 text-gray-600">
                    {/* color palette */}
                    {deleted === false && (
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
                                onClick={() => changeBg("bg-white")}
                              />
                              <span
                                className="cursor-pointer h-6 w-6 rounded-full block bg-orange-200"
                                onClick={() => changeBg("bg-orange-200")}
                              />
                              <span
                                className="cursor-pointer h-6 w-6 rounded-full block bg-green-200"
                                onClick={() => changeBg("bg-green-200")}
                              />
                              <span
                                className="cursor-pointer h-6 w-6 rounded-full block bg-red-200"
                                onClick={() => changeBg("bg-red-200")}
                              />
                              <span
                                className="cursor-pointer h-6 w-6 rounded-full block bg-indigo-200"
                                onClick={() => changeBg("bg-indigo-200")}
                              />
                              <span
                                className="cursor-pointer h-6 w-6 rounded-full block bg-yellow-200"
                                onClick={() => changeBg("bg-yellow-200")}
                              />
                              <span
                                className="cursor-pointer h-6 w-6 rounded-full block bg-purple-200"
                                onClick={() => changeBg("bg-purple-200")}
                              />
                            </div>
                          </>
                        )}
                      </>
                    )}

                    {/* bin */}
                    {deleted === false && (
                      <button
                        className="hover:text-gray-500/80"
                        onClick={() => {
                          updateNote(id, { deleted: !deleted });
                          setMessage("Note Binned");
                          setShow(true);
                          setIsOpen(false);
                          setTimeout(() => setShow(false), 4000);
                        }}
                      >
                        <Bin svgProps="h-5 w-5" />
                      </button>
                    )}

                    {/* archive */}
                    {deleted === false && archived === false && (
                      <button
                        className="hover:text-gray-500/80"
                        onClick={() => {
                          updateNote(id, { archived: !archived });
                          setMessage("Note Archived");
                          setShow(true);
                          setIsOpen(false);
                          setTimeout(() => setShow(false), 4000);
                        }}
                      >
                        <Archive svgProps="h-5 w-5" />
                      </button>
                    )}

                    {/* pin */}
                    {deleted === false && archived === false && (
                      <button
                        className="hover:text-gray-500/80"
                        onClick={() => {
                          updateNote(id, { pinned: !pinned });
                          setIsOpen(false);
                        }}
                      >
                        {pinned ? <Pinned /> : <Unpinned />}
                      </button>
                    )}

                    {/* unarchive */}
                    {deleted === false && archived === true && (
                      <button
                        className="hover:text-gray-500/80"
                        onClick={() => {
                          updateNote(id, { archived: !archived });
                          setMessage("Note Unarchived");
                          setShow(true);
                          setIsOpen(false);
                          setTimeout(() => setShow(false), 4000);
                        }}
                      >
                        <UnArchive />
                      </button>
                    )}

                    {/* delete forever */}
                    {deleted && (
                      <button
                        className="hover:text-gray-500/80"
                        onClick={() => {
                          deleteNote(id);
                          setIsOpen(false);
                        }}
                      >
                        <DeleteForever />
                      </button>
                    )}

                    {/* restore */}
                    {deleted && (
                      <button
                        className="hover:text-gray-500/80"
                        onClick={() => {
                          updateNote(id, { deleted: !deleted });
                          setMessage("Note Restored");
                          setShow(true);
                          setIsOpen(false);
                          setTimeout(() => setShow(false), 4000);
                        }}
                      >
                        <Restore />
                      </button>
                    )}
                  </div>

                  {/* check */}
                  <button
                    onClick={() => {
                      setUpdatedNote();
                      closeModal();
                    }}
                  >
                    <Check />
                  </button>
                </section>
                {/* preview toolbar end */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
