export default function ColorPalette() {
  return (
    <div className="absolute bottom-14 flex gap-2">
      <span className="cursor-pointer border-2 border-black h-6 w-6 rounded-full block bg-white"></span>
      <span className="cursor-pointer h-6 w-6 rounded-full block bg-green-300"></span>
      <span className="cursor-pointer h-6 w-6 rounded-full block bg-orange-300"></span>
      <span className="cursor-pointer h-6 w-6 rounded-full block bg-red-300"></span>
      <span className="cursor-pointer h-6 w-6 rounded-full block bg-purple-300"></span>
      <span className="cursor-pointer h-6 w-6 rounded-full block bg-indigo-300"></span>
    </div>
  );
}
