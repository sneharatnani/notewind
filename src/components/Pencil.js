import PencilIcon from "../assets/icons/PencilIcon.js";

export default function Pencil({ setOpen }) {
  return (
    <div
      className="bg-sky-400 h-12 w-12 rounded-full cursor-pointer shadow-md shadow-sky-400/50 flex items-center justify-center fixed bottom-14 right-14"
      onClick={setOpen}
    >
      <PencilIcon />
    </div>
  );
}
