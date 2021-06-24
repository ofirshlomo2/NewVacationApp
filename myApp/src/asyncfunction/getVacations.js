import axios from "axios"

const apiUrl = 'http://localhost:5000/vacations/getUserFollowing'

export default async function VacationsList(user_id){

    try {
        const result = await axios.post(apiUrl, {user_id})
        console.log("data from server" , result.data )
        return result.data
        
    } catch (error) {
       console.log(error)
       alert("something went wrong...")
    }


}