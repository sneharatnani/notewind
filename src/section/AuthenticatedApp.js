import Notes from "../pages/Notes.js";
import Bin from "../pages/Bin.js";
import Archive from "../pages/Archive.js";
import Navbar from "../components/navbar/Navbar.js";
import { Route, Routes } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext.js";

export default function AuthenticatedApp() {
  const { theme } = useContext(ThemeContext);
  const [isGrid, setIsGrid] = useState(true);

  function changeLayout() {
    setIsGrid((prevState) => !prevState);
  }

  return (
    <>
      <Navbar changeLayout={changeLayout} />
      <section className={`md:pl-64 ${theme}`}>
        <Routes>
          <Route path="/" element={<Notes isGrid={isGrid} />} />
          <Route path="/bin" element={<Bin />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </section>
    </>
  );
}
