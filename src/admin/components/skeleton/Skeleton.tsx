function Skeleton({ height }: { height: string }) {
  return (
    <div className="max-w-sm mx-auto w-full">
      <div className="animate-pulse">
        <div
          className={`bg-gray-300 ${height ? height : "h-24"} rounded-md`}
        ></div>
      </div>
    </div>
  );
}

export default Skeleton;
