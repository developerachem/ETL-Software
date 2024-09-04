import { styles } from "../../utils/cn";

interface Props {
  width?: number;
  title: string;
  className?: string;
  subTitle?: string;
}

function Title({ width, title, className, subTitle }: Props) {
  return (
    <div className={styles("flex flex-col items-center gap-2", { className })}>
      <div className="flex items-center justify-center gap-1">
        <h2 className="text-[20px] md:text-[28px] xl:text-[35px] font-[font-600]">
          {title || "--"}
        </h2>
        <h2 className="text-[20px] md:text-[28px] xl:text-[35px] font-[font-it] text-primaryColor">
          {subTitle ? subTitle : null}
        </h2>
      </div>

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
