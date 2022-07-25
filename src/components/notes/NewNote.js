import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import Pencil from "./Pencil.js";
import Toolbar from "./toolbar/Toolbar.js";
import { ThemeContext } from "../../context/ThemeContext.js";

export default function NewNote() {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", body: "" });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
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
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80" />
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
                  className={`font-poppins w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all ${
                    theme === ""
                      ? "bg-white"
                      : "bg-darkModeColor border border-zinc-700/50 text-white"
                  }`}
                >
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={newNote.title}
                    onChange={handleChange}
                    className="font-medium tracking-wide border-0 w-full focus:ring-0 block focus-visible:outline-none text-lg bg-transparent dark:bg-darkModeColor"
                  />
                  <input
                    placeholder="Label"
                    type="text"
                    className="border-0 w-full tracking-wide focus:ring-0 block focus-visible:outline-none text-sm bg-transparent dark:bg-darkModeColor"
                  />
                  <textarea
                    placeholder="Start Here..."
                    name="body"
                    value={newNote.body}
                    onChange={handleChange}
                    className="border-0 focus:ring-0 min-h-[8rem] tracking-wide resize-none focus-visible:outline-none w-full block bg-transparent dark:bg-darkModeColor"
                  />
                  <Toolbar />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
