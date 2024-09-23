import { useSelector } from "react-redux";
import { RootState, useAppSelector } from "../../../store/store";
import nameProfile from "../../../utils/nameToImage";

function Header() {
  const user = useAppSelector((state) => state.auth.user);
  const title = useSelector((state: RootState) => state.title.title);

  return (
    <div className="h-full flex justify-between items-center">
      <h1 className="font-[font-600] text-[22px]">{title}</h1>

      <button className="flex items-center gap-3">
        <h1 className="font-[font-500] text-[16px]">{user.name}</h1>
        <div className="h-[45px] w-[45px] rounded-full border bg-primaryColor flex justify-center items-center font-[font-600] text-white">
          {nameProfile(user.name)}
        </div>
      </button>
    </div>
  );
}

export default Header;
