import { User } from "@supabase/supabase-js";
import useUserContext from "./context";
import supabase from "../utils/supabase";


export function DbOperations(){
  
  
}
export async function insertIntoDb(receivedData: {}, user: User | undefined ){    
  try{
    
    const {data} = await supabase.from('metrics').insert(receivedData).single();
    if(data){
      console.log("inserted into db", data);
    }
  }catch(e){
    console.log(e);
  }

}