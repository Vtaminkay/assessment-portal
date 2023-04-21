import Radio from "@mui/material/Radio";
import "./style.css"
import { useState } from "react";
import DataGrid from "./datagrid";
const FirstComp = () => {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <div className=" h-full grid grid-cols-8  grid-rows-3 ">
        <div className="col-start-3 col-end-7 row-span-1 ">
          <div className="h-2/4 w-full ">
            <div className=" flex justify-around h-full">
              <div className="flex flex-col justify-around ">
                <label className=" text-black font-bold text-[8px] mt-4">
                  Name of the Assessment{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Text"
                  required
                  className=" p-2 text-[10px]  shadow-sm  w-44  rounded-sm  text-gray-300"
                />
              </div>
              <div className="flex flex-col justify-around ">
                <label className=" text-black font-bold text-[8px] mt-4">
                  Test Complexity{" "}
                </label>
                <select
                  id="countries"
                  className="bg-white cursor-pointer  border-gray-300 text-gray-300 text-[10px] rounded-sm shadow-sm block w-40 p-2 focus:ring-0 ">
                  <option disabled selected hidden>
                    Select Option
                  </option>
                  <option value="US">Easy</option>
                  <option value="US">Medium</option>
                  <option value="CA">Hard</option>
                  <option value="FR">Custom</option>
                </select>
              </div>
              <div className="flex flex-col justify-around">
                <label className=" labelClass text-black font-bold text-[8px] mt-4">
                  Test Type
                </label>
                <select
                  id="countries"
                  className="bg-white cursor-pointer  border-gray-300 text-gray-300 text-[10px] rounded-sm shadow-sm block w-40 p-2 focus:ring-0 "
                >
                  <option disabled selected hidden>
                    Select Option
                  </option>
                  <option value="US">Technical</option>
                  <option value="US">Non-Technical</option>
                </select>
              </div>
            </div>
          </div>
          <div className="h-2/4 w-full border-b-2 ">
            <div className=" h-full flex flex-row items-center justify-around">
              <div className=" bg-[#FDF2D6]  text-[8px] p-4 w-2/4 text-[#99834B] rounded-md ">
                <label>
                  Do you want to save this assessment for future tests to be
                  conducted?
                </label>
              </div>
              <div className=" flex flex-row">
                <div className="flex flex-col  ">
                  <label className=" text-black font-bold text-[8px] mt-4 ml-3">
                    Yes
                  </label>
                  <Radio
                    style={{ color: "#908DB8" }}
                    checked={selectedValue === "a"}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                </div>
                <div className="flex flex-col ">
                  <label className=" text-black font-bold text-[8px] ml-3 mt-4">
                    No
                  </label>
                  <Radio
                    style={{ color: "#908DB8" }}
                    checked={selectedValue === "b"}
                    onChange={handleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-around h-full">
                <label className=" text-black font-bold text-[8px]  ">
                  Level
                </label>
                <select
                  id="countries"
                  className="bg-white cursor-pointer mb-4 border-gray-300 text-gray-300 text-[10px] rounded-sm shadow-sm block w-40 p-2 focus:ring-0 "
                >
                  <option  disabled selected hidden>
                    Select Option
                  </option>
                  <option  className=" option hover:bg-yellow focus:bg-slate-100  p-2" value="US">Technical</option>
                  <option className=" hover:bg-yellow p-4" value="US">Non-Technical</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-start-3 col-end-7 row-span-2 bg-yellow-300">
          <DataGrid/>

        </div>
      </div>
    </>
  );
};

export default FirstComp;
