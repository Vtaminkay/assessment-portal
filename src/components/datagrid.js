import DataTable from "./Table";

const DataGrid = () => {
  return (
    <div className="h-full">
      <div className=" grid grid-cols-4 grid-rows-6 h-full ">
        <div className="col-start-1 col-span-1 row-span-1 flex items-center justify-center">
        <label className=" text-black font-bold text-[8px]  mt-4">
                  Saved Assessments{" "}
                </label>
        </div>

        <div className="col-start-4 col-span-1  row-span-1 flex items-center justify-center">
          <div className="relative flex items-center  xl:w-full h-6 rounded-sm  shadow-sm focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center xl:h-full w-12  text-gray-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 font-semibold"
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
              className="peer h-full w-full outline-none text-[8px] text-gray-700 "
              type="text"
              id="search"
              placeholder="Find "
            />
          </div>
        </div>
        <div className=" row-span-3 col-span-4 "> 
        <DataTable/>
        </div>
      </div>
    </div>
  );
};

export default DataGrid;
