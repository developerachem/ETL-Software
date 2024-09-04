function Container({ children }: { children: JSX.Element }) {
  return (
    <div className="h-full justify-center items-center flex">
      <div className="flex px-5 md:px-10 max-w-[1550px] w-[850px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1400px] xxxl:w-[1550px] justify-between">
        {children}
      </div>
    </div>
  );
}

export default Container;
