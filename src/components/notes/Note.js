export default function Note(props) {
  const { title, body, labels, bg } = props;

  return (
    <div
      className={`w-full rounded-lg p-4 border border-gray-200 max-h-60 box-border overflow-hidden cursor-pointer hover:shadow-sm hover:border-gray-300 flex flex-col justify-between ${bg}`}
      onClick={() => console.log("opened")}
    >
      <div>
        {" "}
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-sm whitespace-pre-wrap break-words font-poppins">
          {body}
        </p>
      </div>
      <div className="flex gap-2 flex-wrap mt-2">{labels}</div>
    </div>
  );
}
