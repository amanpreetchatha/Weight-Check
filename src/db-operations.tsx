import useUserContext from "./context";


export function DbOperations(){
  
  const user=useUserContext();
}
export function insertIntoDb(data: {}){    

  const user=useUserContext(); 
  console.log("received data=",data);
  console.log("user=", user);

}