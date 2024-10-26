import { Axios } from "./Axios";

export const login =async(details:{username:string,password:string})=>{
    return await Axios.post('/api/UserManagement/authenticate',details)

}