import React, {useState} from 'react';
const HookOne = ()=>{
   const[counter, updateCounter]= useState(6);
  
   const one =()=>{
       updateCounter(counter+1);
     
   }


   const two=()=>{
       updateCounter(counter-1)
   }

   return(
       <div className="container mt-3">
           <div className="row">
               <div className="col-md-12 text-center" id="counter">
                   <h1><label  onClick={one} id="btn"> +  </label> <button   id="button"  className={counter> 100? "btn btn-success" : counter<6 ? "btn btn-danger": "btn btn-primary"} class="btn btn-primary"> {counter}</button> <label  onClick={two} id="btn">-</label></h1>
               </div>
           </div>
       </div>
   )
}
export default HookOne;