import Notes from "../pages/Notes.js";
import Bin from "../pages/Bin.js";
import Archive from "../pages/Archive.js";
import Navbar from "../components/navbar/Navbar.js";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function AuthenticatedApp() {
  const [isGrid, setIsGrid] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  function changeLayout() {
    setIsGrid((prevState) => !prevState);
  }

  return (
    <>
      <Navbar
        changeLayout={changeLayout}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <section className="md:pl-64">
        <Routes>
          <Route
            path="/"
            element={<Notes isGrid={isGrid} searchValue={searchValue} />}
          />
          <Route
            path="/bin"
            element={<Bin isGrid={isGrid} searchValue={searchValue} />}
          />
          <Route
            path="/archive"
            element={<Archive isGrid={isGrid} searchValue={searchValue} />}
          />
          <Route
            path="*"
            element={<Notes isGrid={isGrid} searchValue={searchValue} />}
          />
        </Routes>
      </section>
    </>
  );
}
