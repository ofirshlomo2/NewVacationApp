import { useHistory } from "react-router-dom"
import store from "../../store/index"

export default function Logout() {
    const history = useHistory()
    const { dispatch } = store;
    
    dispatch({ type: "user id", payload: "" })
    dispatch({ type: "name of user", payload: null })
    dispatch({ type: "vacationsData", payload: [] })
    history.push('/')
}