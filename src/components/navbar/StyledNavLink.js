import { Link } from "react-router-dom";

export default function StyledNavLink({ path, children }) {
  return (
    <Link
      to={path}
      className="text-white hover:bg-sky-300/50 group flex items-center px-2 py-2 text-lg font-medium rounded-md break-all"
    >
      {children}
    </Link>
  );
}
