import Notes from "../pages/Notes.js";
import Bin from "../pages/Bin.js";
import Archive from "../pages/Archive.js";
import Navbar from "../components/navbar/Navbar.js";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function AuthenticatedApp() {
  const [isGrid, setIsGrid] = useState(true);

  function changeLayout() {
    setIsGrid((prevState) => !prevState);
  }

  return (
    <>
      <Navbar changeLayout={changeLayout} />
      <section className="md:pl-64">
        <div
          className={
            isGrid
              ? "pt-4 px-2 grid grid-cols-2col justify-center gap-4 sm:grid-cols-3col md:px-4 md:grid-cols-2col lg:grid-cols-3col xl:grid-cols-4col"
              : "pt-4 px-4 grid grid-cols-1col justify-center gap-y-4 sm:px-8 lg:px-10 xl:px-16"
          }
        >
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/bin" element={<Bin />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </div>
      </section>
    </>
  );
}
