import { useContext, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Pencil from "../pencil/Pencil.js";
import Toolbar from "../toolbar/Toolbar.js";
import { UserContext } from "../../context/userContext.js";
import { ToastContext } from "../../context/toastContext.js";
import { notesRef } from "../../firebase-config.js";
import { addDoc, Timestamp } from "firebase/firestore";

export default function NewNote() {
  const { user } = useContext(UserContext);
  const newEmptyNote = {
    title: "",
    body: "",
    label: [],
    archived: false,
    author: user.uid,
    bg: "bg-white",
    deleted: false,
    pinned: false,
  };
  const [newNote, setNewNote] = useState(newEmptyNote);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (newNote.deleted || newNote.archived) {
      createNewNote();
      setIsOpen(false);
    }
  }, [newNote]);

  // toast
  const { setShow, setMessage } = useContext(ToastContext);

  // firebase
  async function addNewNote(newNote) {
    try {
      await addDoc(notesRef, { ...newNote, createdAt: Timestamp.now() });
    } catch (err) {
      console.log(err);
    }
  }

  // others
  function openModal() {
    setNewNote(newEmptyNote);
    setIsOpen(true);
  }

  function closeModal() {
    createNewNote();
    setIsOpen(false);
  }

  function createNewNote() {
    if (newNote.body !== "" || newNote.title !== "") {
      addNewNote(newNote);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNewNote((prevState) => ({ ...prevState, [name]: value }));
  }

  function changeBg(color) {
    setNewNote((prevNote) => ({ ...prevNote, bg: color }));
  }

  const binNote = () => {
    setNewNote((prevNote) => ({ ...prevNote, deleted: true }));
    if (newNote.body === "" && newNote.title === "") {
      setMessage("Can't Delete Empty Note");
    } else if (newNote.body !== "" || newNote.title !== "") {
      setMessage("Note Binned");
    }
    setShow(true);
    setTimeout(() => setShow(false), 4000);
  };

  const archiveNote = () => {
    setNewNote((prevNote) => ({ ...prevNote, archived: true }));
    if (newNote.body !== "" || newNote.title !== "") {
      setMessage("Note Archived");
    } else if (newNote.body === "" && newNote.title === "") {
      setMessage("Can't Archive Empty Note");
    }
    setShow(true);
    setTimeout(() => setShow(false), 4000);
  };

  const pinNote = () => {
    setNewNote((prevNote) => ({ ...prevNote, pinned: !prevNote.pinned }));
  };

  function deleteLabel(labelName) {
    setNewNote((prevNote) => ({
      ...prevNote,
      label: prevNote.label.filter((l) => l !== labelName),
    }));
  }

  function addNewLabel(labelName) {
    const trimmedLabel = labelName.trim();
    if (trimmedLabel !== "" && !newNote.label.includes(trimmedLabel)) {
      setNewNote((prevNote) => ({
        ...prevNote,
        label: [...prevNote.label, trimmedLabel],
      }));
    }
  }

  const toolbarProps = {
    ...newNote,
    closeModal,
    changeBg,
    binNote,
    archiveNote,
    pinNote,
    deleteLabel,
    addNewLabel,
  };

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

          <div className="fixed inset-0">
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
                  className={`font-poppins w-full max-w-[35rem] transform rounded-2xl p-6 text-left align-middle shadow-xl transition-all ${newNote.bg}`}
                >
                  {/* note title */}
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={newNote.title}
                    disabled={newNote.deleted}
                    onChange={handleChange}
                    className={`font-medium tracking-wide border-0 w-full focus:ring-0 block focus-visible:outline-none text-lg bg-transparent`}
                  />
                  {/* note body */}
                  <textarea
                    placeholder="Start Here..."
                    name="body"
                    disabled={newNote.deleted}
                    value={newNote.body}
                    onChange={handleChange}
                    className="border-0 focus:ring-0 min-h-[8rem] tracking-wide resize-none focus-visible:outline-none w-full block bg-transparent"
                  />
                  <Toolbar {...toolbarProps} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
