import {
  QuestionCircleFilled,
  BellFilled,
  BellOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import { Avatar } from "antd";
import picture from "./Imthiyaz.png";
const Appbarr = () => {
  return (
    <>
      <div className=" flex w-full h-full justify-between">
        <div className=" w-9/12 flex items-center justify-end">
          <div className="relative flex items-center  xl:w-2/4 h-8 rounded-sm border-2 focus-within:shadow-lg bg-white overflow-hidden mr-20">
            <div className="grid place-items-center xl:h-full w-12 text-gray-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full outline-none text-[10px] text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search "
            />
          </div>
        </div>
        <div className=" w-3/12 flex items-center justify-evenly">
          <div className="">
            <QuestionCircleFilled className="text-[#908DB8] text-lg" />
          </div>
          <div className=" pr-8">
            <Badge dot>
              <BellFilled style={{ fontSize: 18, color: "#908DB8" }} />
            </Badge>
          </div>
          <div className=" border-l-[1.5px] pl-3.5 ml-[-80px]">
            <Avatar src={picture} size={"large"} draggable={"true"}></Avatar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appbarr;
