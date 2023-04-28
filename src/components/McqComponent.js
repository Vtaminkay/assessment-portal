import McqCard from "./McqCard";
import { useState } from "react";

const McqComponent = () => {
    const [mcqitems, setMcqitems] = useState([
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
    <div className=" h-full grid py-5 grid-cols-4 grid-rows-2 grid-flow-col gap-10 mr-6">
         {
            mcqitems.map((i,index)=>
                (
                    <div key={index}>
                           <McqCard name={i.name}
                    description={i.description}
                    />

                    </div>
                
                )
            )
         }          
        </div>
    </> );
}
 
export default McqComponent;