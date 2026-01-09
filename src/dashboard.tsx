import { useState } from "react";
import { insertIntoDb } from "./dbOperations";

function Dashboard(){
    const [enteredWeight, setEnteredWeight] = useState("");
    
    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        {
            insertIntoDb({enteredWeight: enteredWeight});
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