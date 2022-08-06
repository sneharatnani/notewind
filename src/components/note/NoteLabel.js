export default function NoteLabel(label) {
  if (label !== "") {
    return (
      <span className="text-[11px] font-medium text-labelTextColor bg-labelColor px-[5px] py-[2px] rounded-md">
        {label}
      </span>
    );
  }
}
