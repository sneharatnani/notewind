import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { UserContext } from "../../context/userContext.js";

export default function Profile({ changeLayout }) {
  const { logOutUser, user } = useContext(UserContext);

  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-sky-200">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src={user.photoURL}
            alt={user.displayName}
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <p
            className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={changeLayout}
          >
            Change Layout
          </p>{" "}
          <p
            onClick={logOutUser}
            className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Log Out
          </p>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
