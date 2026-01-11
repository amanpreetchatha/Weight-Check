import { useState } from "react";
import supabase from "../utils/supabase";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    async function signInWithEmail() {
      const { data,error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
    
        if (error)
            console.log(error.message);
        
            //route back to app.tsx       
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
            <button>Login</button>
            <p>Don't have an account? <a href="/">Register here</a></p>
        </form>
    )

}