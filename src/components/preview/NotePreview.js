import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { NotesContext } from "../../context/notesContext.js";
import ColorPaletteIcon from '../../assets/icons/ColorPaletteIcon.js'
import Check from "../../assets/icons/Check.js";
import Bin from "../../assets/icons/Bin.js";
import Archive from "../../assets/icons/Archive.js";
import Pinned from "../../assets/icons/Pinned.js";
import Unpinned from "../../assets/icons/Unpinned.js";
import UnArchive from "../../assets/icons/UnArchive.js";
import DeleteForever from "../../assets/icons/DeleteForever.js";
import Restore from "../../assets/icons/Restore.js";

export default function NotePreview(props) {
    const { id, title, body, bg,label,pinned, deleted, archived,isOpen, setIsOpen} = props;
  const { updateNote, deleteNote } = useContext(NotesContext);
  const [showColors, setShowColors] = useState(false);
    const [note, setNote] = useState({
        title,
        body,
        bg,
      label,
    })

    function setUpdatedNote() {
        for (let key in note) {
            updateNote(id, { [key]: note[key] })
        }
    }

    function closeModal() {
        setUpdatedNote();
        setIsOpen(false);
    }
  
  function changeBg(bg) {
    setNote(prevNote=> ({...prevNote,bg}))
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
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
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={note.title}
                    onChange={handleChange}
                    className="font-medium tracking-wide border-0 w-full focus:ring-0 block focus-visible:outline-none text-lg bg-transparent"
                  />
                  <input
                    placeholder="Label"
                    type="text"
                    name="label"
                    value={note.label}
                    onChange={handleChange}
                    className="border-0 w-full tracking-wide focus:ring-0 block focus-visible:outline-none text-sm bg-transparent"
                  />
                  <textarea
                    placeholder="Start Here..."
                    name="body"
                    value={note.body}
                    onChange={handleChange}
                    className="border-0 focus:ring-0 min-h-[8rem] tracking-wide resize-none focus-visible:outline-none w-full block bg-transparent"
                  />

                  {/* preview toolbar start */}
                  <section className="flex justify-between items-center mt-3">
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
                      {/* bin */}
                      {deleted === false && (
                        <button
                          className="hover:text-gray-500/80"
                          onClick={() => {
                            updateNote(id, { deleted: !deleted });
                            setIsOpen(false);
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
                            setIsOpen(false);
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
                          {pinned ? (
                            <Pinned svgProps="h-5 w-5" />
                          ) : (
                            <Unpinned svgProps="h-5 w-5" />
                          )}
                        </button>
                      )}
                      {/* unarchive */}
                      {deleted === false && archived === true && (
                        <button
                          className="hover:text-gray-500/80"
                          onClick={() => {
                            updateNote(id, { archived: !archived });
                            setIsOpen(false);
                          }}
                        >
                          <UnArchive svgProps="h-5 w-5" />
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
                          <DeleteForever svgProps="h-5 w-5" />
                        </button>
                      )}
                      {/* restore */}
                      {deleted && (
                        <button
                          className="hover:text-gray-500/80"
                          onClick={() => {
                            updateNote(id, { deleted: !deleted });
                            setIsOpen(false);
                          }}
                        >
                          <Restore svgProps="h-5 w-5" />
                        </button>
                      )}
                    </div>
                    {/* check */}
                    <button onClick={closeModal}>
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
