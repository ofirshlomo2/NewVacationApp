import axios from "axios"

const apiUrl = 'http://localhost:5000/vacations/getVacationsByDate'

export default async function SortVacations(){

    try {
        const result = await axios.get(apiUrl)
        return result.data
        
    } catch (error) {
       console.log(error)
       alert("something went wrong...")
    }


}