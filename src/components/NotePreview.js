import { useContext, useState } from "react";
import { Fragment } from "react";
import { notesRef } from "../firebase-config.js";
import { doc, updateDoc, deleteDoc, Timestamp } from "firebase/firestore";
import { Dialog, Transition } from "@headlessui/react";
import { ToastContext } from "../context/toastContext.js";
import Toolbar from "./toolbar/Toolbar.js";

export default function NotePreview(props) {
  const { id, pinned, deleted, archived, isOpen, setIsOpen } = props;
  const [note, setNote] = useState({
    title: props.title,
    body: props.body,
    bg: props.bg,
    label: props.label,
  });

  // toast
  const { setShow, setMessage } = useContext(ToastContext);

  // firebase
  async function updateNote(id, value) {
    const note = doc(notesRef, id);
    try {
      await updateDoc(note, { ...value, createdAt: Timestamp.now() });
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteNote(id) {
    const note = doc(notesRef, id);
    try {
      await deleteDoc(note);
    } catch (err) {
      console.log(err);
    }
  }

  // others
  function changeBg(bg) {
    setNote((prevNote) => ({ ...prevNote, bg }));
  }

  function pinNote() {
    updateNote(id, { pinned: !pinned });
    closeModal();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  }

  function binNote() {
    updateNote(id, { deleted: !deleted });
    setMessage("Note Binned");
    setShow(true);
    closeModal();
    setTimeout(() => setShow(false), 4000);
  }

  function archiveNote() {
    updateNote(id, { archived: !archived });
    setMessage("Note Archived");
    setShow(true);
    closeModal();
    setTimeout(() => setShow(false), 4000);
  }

  function unarchiveNote() {
    updateNote(id, { archived: !archived });
    setMessage("Note Unarchived");
    setShow(true);
    closeModal();
    setTimeout(() => setShow(false), 4000);
  }

  function restoreNote() {
    updateNote(id, { deleted: !deleted });
    setMessage("Note Restored");
    setShow(true);
    setIsOpen(false);
    setTimeout(() => setShow(false), 4000);
  }

  function deleteNoteForever() {
    deleteNote(id);
    setIsOpen(false);
  }

  function setUpdatedNote() {
    for (let key in note) {
      if (note[key].toString() !== props[key].toString()) {
        updateNote(id, { [key]: note[key] });
      }
    }
  }

  function closeModal() {
    setUpdatedNote();
    setIsOpen(false);
  }

  function deleteLabel(labelName) {
    setNote((prevNote) => ({
      ...prevNote,
      label: prevNote.label.filter((l) => l !== labelName),
    }));
  }

  function addNewLabel(labelName) {
    const trimmedLabel = labelName.trim();
    if (trimmedLabel !== "" && !note.label.includes(trimmedLabel)) {
      setNote((prevNote) => ({
        ...prevNote,
        label: [...prevNote.label, trimmedLabel],
      }));
    }
  }

  const toolbarProps = {
    ...note,
    pinned,
    deleted,
    archived,
    closeModal,
    changeBg,
    binNote,
    archiveNote,
    unarchiveNote,
    pinNote,
    restoreNote,
    deleteNoteForever,
    deleteLabel,
    addNewLabel,
  };

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
                className={`font-poppins w-full max-w-[35rem] transform rounded-2xl p-6 text-left align-middle shadow-xl transition-all ${note.bg}`}
              >
                {/* note title */}
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={note.title}
                  disabled={deleted}
                  onChange={handleChange}
                  className={`font-medium tracking-wide border-0 w-full focus:ring-0 block focus-visible:outline-none text-lg bg-transparent`}
                />
                {/* note body */}
                <textarea
                  placeholder="Start Here..."
                  name="body"
                  disabled={deleted}
                  value={note.body}
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
  );
}
