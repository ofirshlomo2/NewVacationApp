import axios from "axios"
import store from "../store/index"
import VacationsList from "./getVacations";

const apiUrl = 'http://localhost:5000/vacations/delete'

export default async function DeleteVacation(vacation_id, user_id) {
    const {dispatch} = store;
    try {
        const result = await axios.post(apiUrl, {vacation_id})
        if(result.status === 200){
           const updateData = await VacationsList(user_id)
           dispatch({type:"vacations data" , payload:updateData})
        }else   
            console.log("something went wrong...")
    } catch (error) {
        console.log(error)
        alert("something went wrong...")
    }


}