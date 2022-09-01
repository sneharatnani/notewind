export default function NoteLabel({ label }) {
  return (
    <>
      {label && (
        <div className="mt-2">
          <span
            className="text-[11px] font-medium text-labelTextColor bg-labelColor px-[5px] 
        py-[2px] rounded-md"
          >
            {label}
          </span>
        </div>
      )}
    </>
  );
}
