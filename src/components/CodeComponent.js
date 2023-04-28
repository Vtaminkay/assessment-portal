import CodeCard from "./CodeCard";
import { useState } from "react";

const CodeComponent = () => {
    const [codeitems, setCodeitems] = useState([
        {
            name: 'JavaScript',
            description:' Material UI is beautiful by design and features a suite of customization options that make it easy to implement your',
        },
        {
            name: 'Javascript',
            description:' Material UI is beautiful by design and features a suite of customization options that make it easy to implement your ',
        },
        {
            name: 'Javascript',
            description:' Material UI is beautiful by design and features a suite of customization options that make it easy to implement your',
        },
        {
            name: 'Javascript',
            description:' Material UI is beautiful by design and features a suite of customization options that make it easy to implement your',
        },
        {
            name: 'Javascript',
            description:' Material UI is beautiful by design and features a suite of customization options that make it easy to implement your',
        },
       
    ]
        )

    return (  
        <>
              <div className=" h-[22rem]  mr-12 ">
             <div className=" h-6 grid grid-cols-12 gap-1">
                
            <div className=" col-span-2 "> </div>
            <div className="   text-black font-bold text-[8px]">Name </div>
            <div className=" col-span-4  text-black font-bold text-[8px]">Description </div>
            <div className=" text-black font-bold text-[8px]">Timer </div>
            <div className="  text-black font-bold text-[8px]">TestCount </div>
            <div className="col-span-2  flex justify-center text-black font-bold text-[8px]">TestMode </div>
            <div className=" "> </div>
            </div>
            <div className=" w-full h-full grid grid-rows-5 gap-3  ">
               {/*  <div className=" row-span-1  border-b">
                    <CodeCard/>
                </div> */}

                {
            codeitems.map((i,index)=>
                (
                    <div key={index} className=" row-span-1  border-b" >
                           <CodeCard name={i.name}
                    description={i.description}
                    />

                    </div>
                 
                )
            )
         }
         
          
            
            </div>
            
       
        </div>

       
        

        </>
    );
}
 
export default CodeComponent;