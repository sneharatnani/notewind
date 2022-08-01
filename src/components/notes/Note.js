import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext.js";

export default function Note(props) {
  const { title, body } = props;
  const { notes } = useContext(NotesContext);
  const allLabels = (labels) => {
    if (labels !== "") {
      const labelsArray = labels.split(/\s+|,/g);
      return labelsArray;
    }
  };

  return (
    <div
      className="w-full rounded-lg p-4 border border-gray-200 max-h-60 box-border overflow-hidden cursor-pointer hover:shadow-sm hover:border-gray-300 flex flex-col justify-between"
      onClick={() => console.log("opened")}
    >
      <div>
        {" "}
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-sm whitespace-pre-wrap break-words font-poppins">
          {body}
        </p>
      </div>
      <div className="flex gap-2 flex-wrap">
        <span className="text-[10px] bg-gray-200 px-[5px] py-[2px] rounded-md">
          shopping
        </span>
        <span className="text-[10px] bg-gray-200 px-[5px] py-[2px] rounded-md">
          shop
        </span>
        <span className="text-[10px] bg-gray-200 px-[5px] py-[2px] rounded-md">
          shopping and shop
        </span>
        <span className="text-[10px] bg-gray-200 px-[5px] py-[2px] rounded-md">
          shopping
        </span>
        <span className="text-[10px] bg-gray-200 px-[5px] py-[2px] rounded-md">
          shopping
        </span>
        <span className="text-[10px] bg-gray-200 px-[5px] py-[2px] rounded-md">
          shopping
        </span>
      </div>
    </div>
  );
}
