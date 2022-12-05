import { useContext, useState } from "react";
import { ToastContext } from "../context/toastContext.js";
import NoteModal from "./noteModal/NoteModal.js";
// firebase
import { notesRef } from "../firebase-config.js";
import { doc, updateDoc, deleteDoc, Timestamp } from "firebase/firestore";

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
    deleteLabel,
    addNewLabel,
  };

  return <NoteModal {...previewProps} />;
}
