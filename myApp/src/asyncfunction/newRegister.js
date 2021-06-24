import axios from "axios"

const apiUrl = 'http://localhost:5000/auth/register'

export default async function RegisterUSer(userDetails) {
  try {
    const result = await axios.post(apiUrl, userDetails)
    if(result.status === 200) {
      return result.data;
    }
  } catch (error) {
    console.log(error)
    alert("something went wrong...")
    return;
  }


}