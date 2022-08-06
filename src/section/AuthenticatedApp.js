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
        <Routes>
          <Route path="/" element={<Notes isGrid={isGrid} />} />
          <Route path="/bin" element={<Bin isGrid={isGrid} />} />
          <Route path="/archive" element={<Archive isGrid={isGrid} />} />
        </Routes>
      </section>
    </>
  );
}
