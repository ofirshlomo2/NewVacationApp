import axios from "axios"


const apiUrl = 'http://localhost:5000/auth/login'

export default async function LoginUser(user_name, password) {
    try {
        const result = await axios.post(apiUrl, { user_name, password })
        if(result.status === 200){
            localStorage.setItem("token" , result.data.token)
            
            return result.data;
        }  
    } catch (error) {
        console.log(error)
        alert("something went wrong...")
    }


}