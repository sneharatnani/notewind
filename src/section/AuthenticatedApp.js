import Notes from "../pages/Notes.js";
import Bin from "../pages/Bin.js";
import Archive from "../pages/Archive.js";
import Navbar from "../components/navbar/Navbar.js";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function AuthenticatedApp() {
  const [isGrid, setIsGrid] = useState(true);
  const [query, setQuery] = useState("");

  function changeLayout() {
    setIsGrid((prevState) => !prevState);
  }

  return (
    <>
      <Navbar changeLayout={changeLayout} query={query} setQuery={setQuery} />
      <section className="md:pl-64 pb-4">
        <Routes>
          <Route path="/" element={<Notes isGrid={isGrid} query={query} />} />
          <Route path="/bin" element={<Bin isGrid={isGrid} query={query} />} />
          <Route
            path="/archive"
            element={<Archive isGrid={isGrid} query={query} />}
          />
          <Route path="*" element={<Notes isGrid={isGrid} query={query} />} />
        </Routes>
      </section>
    </>
  );
}
