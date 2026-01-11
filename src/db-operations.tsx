import useUserContext from "./context";


export function DbOperations(){
  
  const user=useUserContext();

  function insertIntoDb(data: {}){      
    console.log("received data=",data);
    console.log("user=", user);
  }
}