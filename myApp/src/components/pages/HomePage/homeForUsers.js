import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import VacationsList from "../../../asyncfunction/getVacations"
import VacationCard from "../../ui-containers/vacationCard"
import { Form } from "react-bootstrap"
import SortVacations from "../../../asyncfunction/sortVacations"
import RefreshIcon from '@material-ui/icons/Refresh';

export default function HomePageUsers() {

    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState([false])
    const selector = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(async () => {
        const result = await VacationsList(selector.userId)
        dispatch({ type: "vacations data", payload: result })
        setData(result)
    }, [refresh])

    async function sortData(status) {
        if (status) {
            const result = await SortVacations()
            setData(result)
        } else {
            setData(selector.vacationsData)
        }
    }

    return (
        <div style={{ marginTop: "10px" }}>
            <div className="row"> 
            <div className="col-10" style={{ display: "flex", justifyContent: "center" }}>
                <Form.Group >
                    <Form.Check label="sort by vacations date" type="checkbox" onChange={(e) => { sortData(e.target.checked) }} />
                </Form.Group>
            </div>
            <div className="col-2" style={{textAlign:"right", paddingRight:"10px", cursor:"pointer"}} onClick={()=>{
                setRefresh(!refresh)}}>
                refresh
                <RefreshIcon fontSize="large"/>
            </div>
          
            </div>
            
            <div className="row">
                {data.map((oneVacation) => { return <VacationCard key={oneVacation.id} info={oneVacation} /> })}
            </div>
        </div>

    )
}
