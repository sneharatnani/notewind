import Notes from "../pages/Notes.js";
import Bin from "../pages/Bin.js";
import Archive from "../pages/Archive.js";
import Navbar from "../components/navbar/Navbar.js";
import { Route, Routes } from "react-router-dom";
import { useContext, useState } from "react";
import Labels from "../pages/Labels.js";
import { ToastContext } from "../context/toastContext.js";
import Toast from "../components/toast/Toast.js";

export default function AuthenticatedApp() {
  const [isGrid, setIsGrid] = useState(true);
  const [query, setQuery] = useState("");
  const [pathName, setPathName] = useState("");
  const { show, message, setShow } = useContext(ToastContext);

  function changeLayout() {
    setIsGrid((prevState) => !prevState);
  }

  return (
    <>
      <Navbar
        changeLayout={changeLayout}
        query={query}
        setQuery={setQuery}
        setPathName={setPathName}
      />
      <Toast show={show} setShow={setShow} message={message} />

      <main className="md:pl-64 pb-4">
        <Routes>
          <Route path="/" element={<Notes isGrid={isGrid} query={query} />} />
          <Route path="/bin" element={<Bin isGrid={isGrid} query={query} />} />
          <Route
            path="/archive"
            element={<Archive isGrid={isGrid} query={query} />}
          />
          <Route
            path={`/${pathName}`}
            element={
              <Labels isGrid={isGrid} query={query} pathName={pathName} />
            }
          />
          {/* catch all */}
          <Route path="*" element={<Notes isGrid={isGrid} query={query} />} />
        </Routes>
      </main>
    </>
  );
}
