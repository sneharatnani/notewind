import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useEffect, useState } from "react";
import Pencil from "../Pencil.js";
import { UserContext } from "../../context/userContext.js";
import { NotesContext } from "../../context/notesContext.js";
import NewNoteToolbar from "./NewNoteToolbar.js";
import { ToastContext } from "../../context/toastContext.js";

export default function NewNote() {
  const { setShow, setMessage } = useContext(ToastContext);
  const [isOpen, setIsOpen] = useState(false);
  const { addNewNote } = useContext(NotesContext);
  const { user } = useContext(UserContext);
  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
    label: "",
    archived: false,
    author: user.uid,
    bg: "bg-white",
    deleted: false,
    pinned: false,
  });

  useEffect(() => {
    if (newNote.deleted || newNote.archived) {
      createNewNote();
      setIsOpen(false);
    }
  }, [newNote]);

  // to show toast
  useEffect(() => {
    if (newNote.deleted && (newNote.body !== "" || newNote.title !== "")) {
      setMessage("Note Binned");
      setShow(true);
    } else if (newNote.deleted && newNote.body === "" && newNote.title === "") {
      setMessage("Can't Delete Empty Note");
      setShow(true);
    } else if (
      newNote.archived &&
      (newNote.body !== "" || newNote.title !== "")
    ) {
      setMessage("Note Archived");
      setShow(true);
    } else if (
      newNote.archived &&
      newNote.body === "" &&
      newNote.title === ""
    ) {
      setMessage("Can't Archive Empty Note");
      setShow(true);
    }
  }, [newNote]);

  function createNewNote() {
    if (newNote.body !== "" || newNote.title !== "") {
      addNewNote(newNote);
    }
  }

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

                  <NewNoteToolbar
                    closeModal={closeModal}
                    createNewNote={createNewNote}
                    setNewNote={setNewNote}
                    newNote={newNote}
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
