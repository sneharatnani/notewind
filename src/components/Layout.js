export default function Layout({ children, isGrid }) {
  return (
    <div
      className={
        isGrid
          ? "pt-4 px-2 columns-2 gap-x-4 sm:columns-3 md:columns-2 lg:columns-3 xl:columns-4 xl:px-8"
          : "pt-4 px-4 grid grid-cols-1col justify-center sm:px-8 lg:px-10 xl:px-16"
      }
    >
      {children}
    </div>
  );
}
