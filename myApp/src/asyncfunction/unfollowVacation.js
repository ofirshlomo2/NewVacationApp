import axios from "axios"

const apiUrl = 'http://localhost:5000/vacations/unfollow'

export default async function UnfollowVacation(user_id, vacation_id){
    try {
        const result = await axios.post(apiUrl , {user_id, vacation_id})

    } catch (error) {
       console.log(error)
       alert("something went wrong...")
    }


}