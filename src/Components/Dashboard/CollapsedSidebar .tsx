import { BiSolidUser } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { ImInfinite } from "react-icons/im";
import { LuPanelRightClose } from "react-icons/lu";
import { MdAppShortcut } from "react-icons/md";

import { useChat } from "../context/ChatProvider";

function CollapsedSidebar () {
  const { open, setOpen } = useChat();

  return (
    <div className="">
      <div className="bg-black md:h-screen w-14 items-center flex gap-10 flex-col">
        <div className="mt-5 border border-blue-700 rounded-full p-1">
          <ImInfinite
            className="hover:text-purple text-xl font-thin cursor-pointer text-blue-700"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div>
          <LuPanelRightClose
            className="text-gray-400 hover:text-purple text-xl font-thin cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div>
          <GoComment
            className="text-gray-400 hover:text-purple text-xl font-thin cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="h-[320px] w-full"></div>
        <div className="flex flex-col gap-4">
          <div>
            <MdAppShortcut
              className="text-gray-400 hover:text-purple text-xl font-thin cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="bg-gray-500 rounded-full p-[2px]">
            <BiSolidUser
              className="hover:text-purple text-xl font-thin cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollapsedSidebar ;
