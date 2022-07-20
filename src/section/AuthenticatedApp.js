import Notes from "../pages/Notes.js";
import Bin from "../pages/Bin.js";
import Archive from "../pages/Archive.js";
import Navbar from "../components/navbar/Navbar.js";
import { Route, Routes } from "react-router-dom";

export default function AuthenticatedApp() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/bin" element={<Bin />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </>
  );
}
