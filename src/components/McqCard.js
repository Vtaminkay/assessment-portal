



const McqCard = ({name, description}) => {

    return ( <>
    <div className=" bg-white h-full px-2 w-full  shadow-sm rounded-lg">
        <div>
        <p className=" text-xs font-bold ">{name}</p>

        </div>
        <p className=" text-[10px] my-5">{description}</p>
        <div className=" flex justify-around ">
               
        <div className="flex flex-col justify-around ">
                <label className=" text-black font-bold text-[8px] mt-4">
                  Test Count{" "}
                </label>
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

        
        <div className="flex flex-col justify-around ">
                <label className=" text-black font-bold text-[8px] mt-4">
                  Test Mode{" "}
                </label>
                <select
                  id="countries"
                  className="bg-white cursor-pointer  border-gray-300 text-gray-300 text-[10px] rounded-sm shadow-sm block  p-2 focus:ring-0 ">
                  <option disabled selected hidden>
                  Choose
                  </option>
                  <option value="US">Easy</option>
                  <option value="US">Medium</option>
                  <option value="CA">Hard</option>
                </select>
              </div>
              <div className=" flex items-end">
                <button className=" border rounded-sm text-white bg-[#46A997] text-[10px] w-12 px-2 py-[3px]">Add</button>
              </div>
              </div>

        </div>
    
    </> );
}
 
export default McqCard;