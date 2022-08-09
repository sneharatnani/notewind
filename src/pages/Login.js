import { UserContext } from "../context/userContext.js";
import { useContext } from "react";
import github from "../assets/icons/github.svg";

export default function Login() {
  const { logInUser } = useContext(UserContext);
  const currentYear = () => new Date().getFullYear();

  return (
    <div className="bg-gray-200 h-screen">
      <div className="rounded-xl shadow-md flex items-center justify-center flex-col bg-white h-72 w-80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xs:w-[22rem]">
        <svg
          className="fill-sky-400 h-28 w-28"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path>
        </svg>
        <h1 className="text-2xl font-semibold my-4 text-zinc-700">
          Welcome to NoteWind
        </h1>
        <button
          onClick={logInUser}
          className="uppercase bg-sky-500/90 shadow-sm tracking-wider shadow-sky-800 text-white p-2 px-8 rounded font-semibold hover:bg-sky-500"
        >
          sign in with google
        </button>
      </div>
      <footer className="absolute bottom-4 text-center w-full">
        <p>
          Copyright © {currentYear()}{" "}
          <a href="https://github.com/sneharatnani" target={"_blank"}>
            sneharatnani <img className="inline" src={github} alt="github" />
          </a>
        </p>
      </footer>
    </div>
  );
}
