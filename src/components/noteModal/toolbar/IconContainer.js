export default function IconContainer({ handleClick, children }) {
  return (
    <button className="hover:text-gray-500/80" onClick={handleClick}>
      {children}
    </button>
  );
}
