import { useState } from "react";
import supabase from "../utils/supabase";

export default function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");

    async function signUpWithEmail() {
      const { data,error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { full_name: fullName } },   //send data here
        });
    
        if (error) console.log(error.message);
        
        //process next step after successful registeration
        
    }
    return (
        <form>
            <label>
                Email:
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <button>Register</button>
        </form>
    )

}