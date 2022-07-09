import React ,{Fragment,useState} from "react";

const InputTodo=()=>{
 
         const onSubmitForm=async(e)=>{


                    try {
                         e.preventDefault();
                         const body={description}
                          const response=await fetch("http://localhost:5000/todos",{
                          method:"POST",
                          
                          headers:{"Content-Type":"application/json"},

                          body:JSON.stringify(body)

                         });

                     window.location='/'
                         
                         
                    } catch (error) {
                         
                    }

         }

     const [description,setDescription]=useState("")
     return(
             <Fragment>


             <h2 className="text-center mt-5">Pern TODO List</h2>
             <form className="d-flex mt-5" onSubmit={onSubmitForm}>
               <input type="text" className="form-control"  value={description} onChange={(e=>{setDescription(e.target.value)})}></input>
               <button className="btn btn-success">Add</button>

             </form>


             </Fragment>
          
          
          )

};

export default InputTodo;