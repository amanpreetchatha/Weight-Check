import { User } from "@supabase/supabase-js";
import useUserContext from "./context";


export function DbOperations(){
  
  
}
export function insertIntoDb(data: {}, user: User | undefined ){    

  console.log("received data=",data);
  console.log("user=", user);

}