export default function NoteLabel({ label }) {
  return (
    <span className="text-[11px] mr-2 inline-block font-medium text-labelTextColor bg-labelColor px-[5px] py-[2px] rounded-md">
      {label}
    </span>
  );
}
