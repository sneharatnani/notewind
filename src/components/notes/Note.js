export default function Note(props) {
  const { title, body } = props;
  function findNewlines() {
    const newLines = body.split(/\n/).join("<br/>");
    return newLines;
  }

  return (
    <div
      className="w-full rounded-lg p-4 border border-gray-200 max-h-60 overflow-hidden box-border"
      onClick={findNewlines}
    >
      <p className="font-medium text-lg">{title}</p>
      <pre className="text-sm whitespace-pre-wrap break-words font-poppins">
        {body}
      </pre>
    </div>
  );
}
