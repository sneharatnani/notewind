import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Toolbar from "./toolbar/Toolbar.js";

export default function NoteModal(props) {
  const { isOpen, closeModal, bg, title, deleted, handleChange, label, body } =
    props;

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
                className={`font-poppins w-full max-w-[35rem] transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all ${bg}`}
              >
                {/* note title */}
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={title}
                  disabled={deleted}
                  onChange={handleChange}
                  className={`font-medium tracking-wide border-0 w-full focus:ring-0 block focus-visible:outline-none text-lg bg-transparent`}
                />
                {/* note label */}
                <input
                  placeholder="Label"
                  type="text"
                  name="label"
                  disabled={deleted}
                  value={label}
                  onChange={handleChange}
                  className="border-0 w-full tracking-wide focus:ring-0 block focus-visible:outline-none text-sm bg-transparent"
                />
                {/* note body */}
                <textarea
                  placeholder="Start Here..."
                  name="body"
                  disabled={deleted}
                  value={body}
                  onChange={handleChange}
                  className="border-0 focus:ring-0 min-h-[8rem] tracking-wide resize-none focus-visible:outline-none w-full block bg-transparent"
                />
                <Toolbar {...props} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
