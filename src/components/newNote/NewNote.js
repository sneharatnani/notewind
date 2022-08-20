import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import Pencil from "../Pencil.js";
import Toolbar from "./toolbar/Toolbar.js";
import { UserContext } from "../../context/userContext.js";
import { NewNoteContext } from "../../context/newNoteContext.js";
import Toast from "../Toast.js";

export default function NewNote() {
  const [isOpen, setIsOpen] = useState(false);
  // const [show, setShow] = useState(false);
  const { user } = useContext(UserContext);
  const { setNewNote, createNewNote, newNote, message, show, setShow } =
    useContext(NewNoteContext);

  function openModal() {
    setNewNote({
      title: "",
      body: "",
      label: "",
      archived: false,
      author: user.uid,
      bg: "bg-white",
      deleted: false,
      pinned: false,
    });
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNewNote((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <>
      <Toast show={show} setShow={setShow} message={message} />
      <Pencil setOpen={openModal} />

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
                  className={`font-poppins w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all ${newNote.bg}`}
                >
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={newNote.title}
                    onChange={handleChange}
                    className="font-medium tracking-wide border-0 w-full focus:ring-0 block focus-visible:outline-none text-lg bg-transparent"
                  />
                  <input
                    placeholder="Label"
                    type="text"
                    name="label"
                    value={newNote.label}
                    onChange={handleChange}
                    className="border-0 w-full tracking-wide focus:ring-0 block focus-visible:outline-none text-sm bg-transparent"
                  />
                  <textarea
                    placeholder="Start Here..."
                    name="body"
                    value={newNote.body}
                    onChange={handleChange}
                    className="border-0 focus:ring-0 min-h-[8rem] tracking-wide resize-none focus-visible:outline-none w-full block bg-transparent"
                  />
                  <Toolbar
                    closeModal={closeModal}
                    createNewNote={createNewNote}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
