import { Link } from "react-router-dom";

export default function StyledNavLink(props) {
  const { path, children, setSidebarOpen, setQuery } = props;

  return (
    <Link
      to={path}
      className="text-white hover:bg-sky-300/50 group flex items-center px-2 py-2 text-lg font-medium rounded-md break-all"
      onClick={() => {
        setSidebarOpen(false);
        setQuery("");
      }}
    >
      {children}
    </Link>
  );
}
