interface Props {
  width?: number;
  title: string;
}

function Title({ width, title }: Props) {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-[35px] font-[font-600]">{title || "--"}</h2>
      <div
        className={`flex justify-between gap-3 w-[${
          width || 150
        }px] items-center`}
      >
        <div className="bg-primaryColor h-[7px] w-[30px] rounded-full" />
        <div className="bg-primaryColor h-[7px] w-[30px] rounded-full" />
        <div className="bg-primaryColor h-[7px] w-[30px] rounded-full" />
        <div className="bg-primaryColor h-[7px] w-full rounded-full" />
        <div className="bg-primaryColor h-[7px] w-[30px] rounded-full" />
      </div>
    </div>
  );
}

export default Title;
