import { useContext, useEffect, useState } from "react";
import Pencil from "./pencil/Pencil.js";
import { UserContext } from "../context/userContext.js";
import { ToastContext } from "../context/toastContext.js";
import NoteModal from "./noteModal/NoteModal.js";
// firebase
import { notesRef } from "../firebase-config.js";
import { addDoc, Timestamp } from "firebase/firestore";

export default function NewNote() {
  const { user } = useContext(UserContext);
  const newEmptyNote = {
    title: "",
    body: "",
    label: "",
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

  // to show toast
  const { setShow, setMessage } = useContext(ToastContext);
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
    setTimeout(() => setShow(false), 4000);
  };

  const archiveNote = () => {
    setNewNote((prevNote) => ({ ...prevNote, archived: true }));
    setTimeout(() => setShow(false), 4000);
  };

  const pinNote = () => {
    setNewNote((prevNote) => ({ ...prevNote, pinned: !prevNote.pinned }));
  };

  const newNoteProps = {
    ...newNote,
    isOpen,
    handleChange,
    closeModal,
    changeBg,
    binNote,
    archiveNote,
    pinNote,
  };

  return (
    <>
      <Pencil setOpen={openModal} />
      <NoteModal {...newNoteProps} />
    </>
  );
}
