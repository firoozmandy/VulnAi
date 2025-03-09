import { BiSolidUser } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { LuPanelLeftClose } from "react-icons/lu";
import { MdAppShortcut } from "react-icons/md";

import { NavLink } from "react-router";
import { useChat } from "../context/ChatProvider";

function DashboardSidebar () {
  const { open, setOpen } = useChat();

  return (
    <>
      <div
        className="w-60 min-h-screen h-full bg-black"
        style={{ display: open ? "block" : "none" }}
      >
        <div className=" ">
          <div className="text-purple-200 font-semibold bg-black h-14 mx-auto flex flex-row md:gap-30 gap-5 px-4 py-5">
            <p className=""> VulnAI</p>
            <LuPanelLeftClose
              className="text-gray-400 text-xl font-thin cursor-pointer mx-2"
              onClick={() => setOpen(!open)}
            />
          </div>

          <div className="  ">
            <div className="text-sm">
              <NavLink
                to="#"
                className="px-3 py-3 tracking-wider block font-medium"
              >
                <div className="bg-blue-600 w-24 gap-1 rounded-lg flex items-center py-2 text-xs text-white justify-center">
                  <GoComment />
                  New Scan
                </div>
              </NavLink>
              <div className="w-20 mx-4 h-10 flex items-end justify-between">
                <p className="text-xs text-gray-600"> Today</p>
              </div>
              <NavLink
                to="#"
                className="h-12 px-4 py-3 text-[14px] text-white tracking-wider block bg-black  font-thin hover:text-gray-800 hover:bg-gray-300"
              >
                didBanSharif
              </NavLink>
              <NavLink
                to="#"
                className="h-12 px-4 py-3 text-[14px] text-white tracking-wider block bg-black  font-thin hover:text-gray-800 hover:bg-gray-300"
              >
                google.com
              </NavLink>
              <div className="w-20 mx-4 h-10 flex items-end justify-between">
                <p className="text-xs text-gray-600"> 30 Days</p>
              </div>
              <NavLink
                to="#"
                className="h-12 px-4 py-3 text-[14px] text-white tracking-wider block bg-black  font-thin hover:text-gray-800 hover:bg-gray-300"
              >
                telegram.org
              </NavLink>
            </div>
            <div className="w-full md:h-60 lg:h-56 h-20 xl:h-60 "></div>

            <div className="flex items-end flex-col">
              <div className="w-[90%] h-8 border gap-2 mx-3 px-2 rounded-lg border-blue-600 flex items-center justify">
                <MdAppShortcut className="text-white" />

                <p className="text-xs rounded-lg text-white">Get App</p>
                <div className="bg-blue-600 text-[8px] w-7 px-[3px] rounded-full text-white">
                  NEW
                </div>
              </div>

              <div className="w-[90%] h-8 border gap-2 mx-3 px-2 rounded-lg flex items-center justify">
                <div className="bg-gray-500 rounded-full p-[2px]">
                  <BiSolidUser className="w-full" />
                </div>

                <p className="text-xs rounded-lg text-white">My Profile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardSidebar ;
