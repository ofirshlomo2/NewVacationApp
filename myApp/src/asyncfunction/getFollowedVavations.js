import axios from "axios"

const apiUrl = 'http://localhost:5000/vacations/followedByUser'

export default async function GetFollowedVacations(user_id){

    try {
        const result = await axios.post(apiUrl, {user_id})
        return result.data   
    } catch (error) {
       console.log(error)
       alert("something went wrong...")
    }


}