import CodeComponent from "./CodeComponent";
import McqComponent from "./McqComponent";
import { useState } from "react";

const SecondComponent = () => {
const [isCode, setIsCode]= useState(false);

const handleClick=()=>{
    setIsCode(!isCode);
    console.log(isCode)
}

    return (  
        <>
         <div className=" h-full grid grid-cols-12  gap-2 grid-rows-6 ">
            
            <div className="row-span-5 col-span-3"> 
            <div className=" w-3/4 bg-white rounded-xl shadow-md h-full ml-3 flex items-center justify-center ">
                <div className=" flex items-center h-3/4 w-3/4 justify-center">
                    <ul className=" w-full  h-full  ">
                        <li className=" h-full w-full  flex flex-col items-center justify-around" >
                            <label 
                            className=" border-dashed rounded-md w-4/5  p-2 border  border-gray-300 text-white text-[10px] flex bg-[#908DB8] items-center justify-between"> 
                            <p>Python</p> 
                            <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M7.66683 6.33333V3H9.66683L7.00016 0.333332L4.3335 3H6.3335V6.33333H3.00016V4.33333L0.333496 7L3.00016 9.66667V7.66667H6.3335V11H4.3335L7.00016 13.6667L9.66683 11H7.66683V7.66667H11.0002V9.66667L13.6668 7L11.0002 4.33333V6.33333H7.66683Z" fill="white"/>
                            </svg>

                            
                             </label>
                            <label className=" border-dashed rounded-md w-4/5 text-center p-2 border  border-gray-300 text-gray-300 text-[10px]"> 5th test </label>
                            <label className=" border-dashed rounded-md w-4/5 text-center p-2 border  border-gray-300 text-gray-300 text-[10px]"> 5th test </label>
                            <label className=" border-dashed rounded-md w-4/5 text-center p-2 border  border-gray-300 text-gray-300 text-[10px]"> 5th test </label>
                            <label className=" border-dashed rounded-md w-4/5 text-center p-2 border  border-gray-300 text-gray-300 text-[10px]"> 5th test </label>
                            <label className=" border-dashed rounded-md w-4/5 text-center p-2 border  border-gray-300 text-gray-300 text-[10px]"> 5th test </label>
                        </li>
                    </ul>
                </div>

            </div>
            </div>
            <div className="row-span-1 col-start-4  col-span-8  ">
            <div className=" flex justify-around h-full">
              <div className="flex flex-col justify-around ">
                <label className=" text-black font-bold text-[8px] mt-4">
                  Search{" "}
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
                  Category{" "}
                </label>
                <select
                  id="countries"
                  className="bg-white cursor-pointer  border-gray-300 text-gray-300 text-[10px] rounded-sm shadow-sm block w-40 p-2 focus:ring-0 ">
                  <option disabled selected hidden>
                  Select Option
                  </option>
                  <option value="US">Front-End</option>
                  <option value="US">Back-End</option>
                  <option value="CA">UI/UX Designing</option>
                  <option value="FR">Testing</option>
                  <option value="FR">Business Analytics</option>
                </select>
              </div>
              
              <div className=" flex items-end mb-3">
                
                <button
                onClick={handleClick}
                 className=" border rounded-full w-16  border-[#908DB8] flex justify-between p-2"> 
                <svg 
                className=" h-3 w-3"
                viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M7 13.75L8.45833 12.2656L6.19271 10L8.45833 7.73438L7 6.25L3.25 10L7 13.75ZM12 13.75L15.75 10L12 6.25L10.5417 7.73438L12.8073 10L10.5417 12.2656L12 13.75ZM2.20833 19.375C1.63542 19.375 1.14479 19.1708 0.73646 18.7625C0.328127 18.3542 0.124307 17.8639 0.125002 17.2917V2.70833C0.125002 2.13542 0.329168 1.64479 0.737502 1.23646C1.14584 0.828127 1.63611 0.624307 2.20833 0.625002H16.7917C17.3646 0.625002 17.8552 0.829168 18.2635 1.2375C18.6719 1.64584 18.8757 2.13611 18.875 2.70833V17.2917C18.875 17.8646 18.6708 18.3552 18.2625 18.7635C17.8542 19.1719 17.3639 19.3757 16.7917 19.375H2.20833ZM2.20833 17.2917H16.7917V2.70833H2.20833V17.2917Z" fill="#908DB8"/>
                </svg>
                <p className="  text-black font-bold text-[8px]">Code</p>
                 </button>
                 
              </div>
              
            </div>
            </div>
            <div className=" row-start-2 row-span-5 col-start-4  col-span-10  "> 
            <div className=" h-full flex flex-col">
                <div className=" ">
                <label className=" text-black font-bold text-[8px] mt-4">
                  Tests Currently Available{" "}
                </label>
                </div>
                <div className="h-full">
                    {!isCode &&   <McqComponent/> }
                    {isCode &&   <CodeComponent/> }
               
                </div>

                </div>
          
              
            </div>
             </div>

        </>
    );
}
 
export default SecondComponent;