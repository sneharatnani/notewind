import Note from "./Note.js";

export default function AllNotes({ isGrid }) {
  return (
    <div
      className={
        isGrid
          ? "pt-4 px-2 grid grid-cols-2col justify-center gap-4 sm:grid-cols-3col md:px-4 md:grid-cols-2col lg:grid-cols-3col xl:grid-cols-4col"
          : "pt-4 px-4 grid grid-cols-1col justify-center gap-y-4 sm:px-8 lg:px-10 xl:px-16"
      }
    >
      <Note title="slkdls" body="this is first note" />
      <Note title="dsdsds" body="dlskdlsd" />
      <Note title="dsdsds" body="second note" />
      <Note title="slkdls" body="my note" />
      <Note title="slkdls" body="yey this is a note" />
    </div>
  );
}
