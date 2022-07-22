import { PropagateLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
      <PropagateLoader color="#38bdf8" />
    </div>
  );
}
