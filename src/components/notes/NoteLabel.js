export default function NoteLabel(label) {
  if (label !== "") {
    return (
      <span className="text-[10px] bg-gray-200 px-[5px] py-[2px] rounded-md">
        {label}
      </span>
    );
  }
}
