import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
