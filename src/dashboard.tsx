import { useState } from "react";
import useUserContext from "./context";
//import { insertIntoDb } from "./db-operations";

function Dashboard(){
    const [enteredWeight, setEnteredWeight] = useState("");
    const user=useUserContext();
    
    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        {
            //insertIntoDb({enteredWeight: enteredWeight});
            console.log(user)
            
        }
    }
    return(
        <form onSubmit={handleSubmit}>
          <label>
            Weight:
            <input type='number' step='any' min='0' value={enteredWeight} onChange={(e)=>setEnteredWeight(e.target.value)} />
          </label>
          <button className='submitBtn' type='submit'>Submit</button>
        </form>
    )
}
export default Dashboard; 