import { useState } from "react";
import LabelIcon from "../../../assets/icons/LabelIcon.js";
import Label from "./Label.js";

export default function LabelContainer(props) {
  const { label, deleteLabel, addNewLabel } = props;
  const [showLabels, setShowLabels] = useState(false);
  const [newLabel, setNewLabel] = useState("");

  return (
    <>
      <button
        className="hover:text-gray-500/80"
        onClick={() => setShowLabels(true)}
        data-testid="show labels"
      >
        <LabelIcon svgProps="h-5 w-5" />
      </button>
      {showLabels && (
        <>
          <div
            className="absolute top-0 left-0 bg-transparent h-full w-screen"
            onClick={() => setShowLabels(false)}
          ></div>
          <div className="absolute bottom-14 flex flex-col gap-3 left-28 w-52 p-2 pb-0 border border-gray-300 shadow shadow-gray-300 bg-white items-center justify-between">
            <input
              placeholder="Enter label name"
              value={newLabel}
              maxLength={30}
              onChange={(e) => setNewLabel(e.target.value)}
              className="text-[13px] text-gray-700 p-[2px] w-full focus-visible:outline-none"
            />
            <div className="flex flex-col gap-2">
              {label.map((l) => (
                <Label label={l} key={l} deleteLabel={deleteLabel} />
              ))}
            </div>
            <button
              className="text-[13px] font-medium border-t w-full border-gray-300 disabled:cursor-not-allowed pt-1 pb-[0.3rem]"
              disabled={newLabel === "" ? true : false}
              onClick={() => {
                addNewLabel(newLabel);
                setNewLabel("");
              }}
              data-testid="new-label-btn"
            >
              Create New Label
            </button>
          </div>
        </>
      )}
    </>
  );
}
