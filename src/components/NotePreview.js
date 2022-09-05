import { useContext, useState } from "react";
import { ToastContext } from "../context/toastContext.js";
import NoteModal from "./noteModal/NoteModal.js";
// firebase
import { notesRef } from "../firebase-config.js";
import { doc, updateDoc, deleteDoc, Timestamp } from "firebase/firestore";

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

  const [note, setNote] = useState({
    title,
    body,
    bg,
    label,
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
      if (note[key] !== props[key]) {
        updateNote(id, { [key]: note[key] });
      }
    }
  }

  function closeModal() {
    setUpdatedNote();
    setIsOpen(false);
  }

  const previewProps = {
    ...note,
    pinned,
    deleted,
    archived,
    isOpen,
    handleChange,
    closeModal,
    changeBg,
    binNote,
    archiveNote,
    unarchiveNote,
    pinNote,
    restoreNote,
    deleteNoteForever,
  };

  return <NoteModal {...previewProps} />;
}
