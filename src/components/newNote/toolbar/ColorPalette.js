import Color from "./Color.js";

export default function ColorPalette() {
  return (
    <div className="absolute bottom-14 flex gap-2 bg-zinc-500 p-2 rounded-xl">
      <Color bg="bg-white" />
      <Color bg="bg-orange-200" />
      <Color bg="bg-green-200" />
      <Color bg="bg-red-200" />
      <Color bg="bg-indigo-200" />
      <Color bg="bg-yellow-200" />
      <Color bg="bg-purple-200" />
    </div>
  );
}
