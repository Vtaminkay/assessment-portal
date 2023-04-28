import { Avatar } from "antd";
import  jslogo from "./Jslogo.png"
const CodeCard = ({name, description}) => {
    return (
        <>
        <div className=" bg-white h-full w-full shadow-sm rounded-lg grid grid-cols-12 gap-1 " >
        <div className=" col-span-2 flex items-center justify-center "> 
        <Avatar src={jslogo} size={"default"} style={{   borderRadius: "8px" }}  />
        </div>
            <div className=" text-gray-400  text-[10px] flex items-center justify-start">{name} </div>
            <div className=" col-span-4  text-gray-400  text-[10px] flex items-center justify-start">{description}</div>
            <div className=" flex items-center justify-start ">
           </div>
            <div className=" flex items-center justify-start ">
           
                <select
                  id="countries"
                  className="bg-white cursor-pointer  border-gray-300 text-gray-300 text-[10px] rounded-sm shadow-sm block  p-2 focus:ring-0 ">
                  <option disabled selected hidden>
                  0
                  </option>
                  <option value="US">5</option>
                  <option value="US">10</option>
                  <option value="CA">15</option>
                  <option value="CA">20</option>
                  <option value="CA">25</option>
                </select>
              
                  </div>
            <div className=" col-span-2 flex items-center justify-center">
          
                <select
                  id="countries"
                  className="bg-white cursor-pointer  border-gray-300 text-black text-[10px] rounded-sm shadow-sm block  p-2 focus:ring-0 ">
                  <option disabled selected hidden>
                  Choose
                  </option>
                  <option value="US">Easy</option>
                  <option value="US">Medium</option>
                  <option value="CA">Hard</option>
                </select>
              
               </div>
            <div className="flex items-center justify-start ">
            <button className=" border rounded-sm text-white bg-[#46A997] text-[10px] w-12 px-2 py-[3px]">Add</button> </div>

        </div>

        </>
      );
}
 
export default CodeCard; 
