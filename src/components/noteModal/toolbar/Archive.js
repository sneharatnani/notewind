import ArchiveIcon from "../../../assets/icons/ArchiveIcon.js";

export default function Archive({ archiveNote }) {
  return (
    <button className="hover:text-gray-500/80" onClick={archiveNote}>
      <ArchiveIcon svgProps="h-5 w-5" />
    </button>
  );
}
