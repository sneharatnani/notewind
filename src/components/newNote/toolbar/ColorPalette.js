import Color from "./Color.js";
import ColorPaletteIcon from "../../../assets/icons/ColorPaletteIcon.js";
import { useState } from "react";

export default function ColorPalette() {
   const [showColors, setShowColors] = useState(false);
  return (
    <>
      <button
        className="hover:text-gray-500/80"
        onClick={() => setShowColors(true)}
      >
        <ColorPaletteIcon />
      </button>
      {showColors && (
        <>
          <div
            className="absolute top-0 left-0 bg-transparent h-full w-screen"
            onClick={() => setShowColors(false)}
          ></div>
          <div className="absolute bottom-14 flex gap-2 bg-zinc-500 p-2 rounded-xl">
            <Color bg="bg-white" />
            <Color bg="bg-orange-200" />
            <Color bg="bg-green-200" />
            <Color bg="bg-red-200" />
            <Color bg="bg-indigo-200" />
            <Color bg="bg-yellow-200" />
            <Color bg="bg-purple-200" />
          </div>
        </>
      )}
    </>
  );
}
