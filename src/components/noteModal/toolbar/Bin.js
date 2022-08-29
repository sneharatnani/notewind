import BinIcon from "../../../assets/icons/BinIcon.js";

export default function Bin({ binNote }) {
  return (
    <button className="hover:text-gray-500/80" onClick={binNote}>
      <BinIcon svgProps="h-5 w-5" />
    </button>
  );
}
