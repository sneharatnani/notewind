import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { NotesContext } from "../../context/notesContext.js";

export default function NotePreview(props) {
    const { id, title, body, bg,label, isOpen, setIsOpen} = props;
    const { updateNote } = useContext(NotesContext);
    const [note, setNote] = useState({
        title,
        body,
        bg,
        label
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
                    value={note.title}
                    onChange={(e) =>
                      setNote((prevNote) => ({
                        ...prevNote,
                        title: e.target.value,
                      }))
                    }
                    className="font-medium tracking-wide border-0 w-full focus:ring-0 block focus-visible:outline-none text-lg bg-transparent"
                  />
                  <input
                    placeholder="Label"
                    type="text"
                    name="label"
                    value={note.label}
                    onChange={(e) =>
                      setNote((prevNote) => ({
                        ...prevNote,
                        label: e.target.value,
                      }))
                    }
                    className="border-0 w-full tracking-wide focus:ring-0 block focus-visible:outline-none text-sm bg-transparent"
                  />
                  <textarea
                    placeholder="Start Here..."
                    name="body"
                    value={note.body}
                    onChange={(e) =>
                      setNote((prevNote) => ({
                        ...prevNote,
                        body: e.target.value,
                      }))
                    }
                    className="border-0 focus:ring-0 max-h-[8rem] tracking-wide resize-none focus-visible:outline-none w-full block bg-transparent"
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
}
