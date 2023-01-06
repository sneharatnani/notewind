export default function Label(props) {
  return (
    <div className="flex justify-between w-[11.7rem] gap-1 font-medium">
      <span className="text-sm break-all">{props.label}</span>
      <button
        className="scale-125"
        onClick={props.deleteLabel.bind(null, props.label)}
        title="Remove Label"
      >
        &#215;
      </button>
    </div>
  );
}
