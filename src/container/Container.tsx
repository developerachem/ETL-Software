function Container({ children }: { children: JSX.Element }) {
  return (
    <div className="text-[22px] h-full justify-center items-center flex">
      <div className="flex p-5 max-w-[1550px] w-[1550px] justify-between">
        {children}
      </div>
    </div>
  );
}

export default Container;
