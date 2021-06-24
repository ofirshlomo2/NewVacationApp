import axios from "axios"

const apiUrl = 'http://localhost:5000/vacations/add'

export default async function AddVacationInDB(vacationDetails) {
    try {
        const result = await axios.post(apiUrl, vacationDetails)
        if(result.status === 200)
            return true;
        return false;

    } catch (error) {
        console.log(error)
        alert("something went wrong...")

    }


}