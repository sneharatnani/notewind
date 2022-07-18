import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.js";
import Notes from "./pages/Notes.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;
