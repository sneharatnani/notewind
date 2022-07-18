export default function Pencil({ setOpen }) {
  return (
    <div
      className="bg-indigo-700 h-12 w-12 rounded-2xl flex items-center justify-center absolute bottom-14 right-14"
      onClick={setOpen}
    >
      <svg
        className="stroke-white h-6 w-6"
        fill="none"
        strokeWidth="0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        ></path>
      </svg>
    </div>
  );
}
