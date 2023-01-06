import { useState } from "react";
import ColorPaletteIcon from "../../assets/icons/ColorPaletteIcon.js";

export default function ColorPalette(props) {
  const { changeBg } = props;
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
          <div
            className="absolute bottom-14 flex gap-2 bg-zinc-500 p-2 rounded-xl"
            data-testid="bg-options"
          >
            <span
              title="White"
              className="cursor-pointer h-6 w-6 rounded-full block bg-white"
              onClick={() => {
                changeBg("bg-white");
                setShowColors(false);
              }}
            />
            <span
              title="Orange"
              className="cursor-pointer h-6 w-6 rounded-full block bg-orange-200"
              onClick={() => {
                changeBg("bg-orange-200");
                setShowColors(false);
              }}
            />
            <span
              title="Green"
              className="cursor-pointer h-6 w-6 rounded-full block bg-green-200"
              onClick={() => {
                changeBg("bg-green-200");
                setShowColors(false);
              }}
            />
            <span
              title="Red"
              className="cursor-pointer h-6 w-6 rounded-full block bg-red-200"
              onClick={() => {
                changeBg("bg-red-200");
                setShowColors(false);
              }}
            />
            <span
              title="Indigo"
              className="cursor-pointer h-6 w-6 rounded-full block bg-indigo-200"
              onClick={() => {
                changeBg("bg-indigo-200");
                setShowColors(false);
              }}
            />
            <span
              title="Yellow"
              className="cursor-pointer h-6 w-6 rounded-full block bg-yellow-200"
              onClick={() => {
                changeBg("bg-yellow-200");
                setShowColors(false);
              }}
            />
            <span
              title="Purple"
              className="cursor-pointer h-6 w-6 rounded-full block bg-purple-200"
              onClick={() => {
                changeBg("bg-purple-200");
                setShowColors(false);
              }}
            />
          </div>
        </>
      )}
    </>
  );
}
