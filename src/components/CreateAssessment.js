import FirstComp from "./FirstComp";
import SecondComponent from "./SecondComp";


const CreateAssessment = () => {
   
    return ( 
        <div className="h-full">
    
            <div className="  h-1/6"></div>
            <div className=" h-5/6 ">
                {/* <FirstComp/> */}
                <SecondComponent/>
            </div>
        </div>
      
     );
}
 
export default CreateAssessment;