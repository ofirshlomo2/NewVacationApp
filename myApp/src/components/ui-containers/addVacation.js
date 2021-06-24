import { useState } from "react"
import { useDispatch } from "react-redux"
import { Form, Button } from "react-bootstrap"
import AddVacationInDB from "../../asyncfunction/addVacationByAdmin"
import { useHistory } from "react-router-dom"

export default function AddVacation() {

    const vacationDetails = {
        destination: "",
        description: "",
        image: "",
        check_in_date: null,
        check_out_date: null,
        price: 0
    }

    const [newVacation, setVacation] = useState(vacationDetails)
    const history = useHistory()
    const dispatch = useDispatch()

    function updataVacation(category, value) {
        setVacation({ ...newVacation, [category]: value })
    }

    async function addAction() {
        if (!newVacation.destination || !newVacation.description || !newVacation.check_in_date || !newVacation.check_out_date || !newVacation.price)
            return alert("missing params")
        const response = await AddVacationInDB(newVacation)
        if (response) {
            dispatch({ type: "current Tab", payload: 0 })
            history.push('/home/forAdmin')
        }
    }

    return (
        <div>
            <div className="row">

                <Form className="col-5" style={{ margin: "auto" }}>
                    <div style={{ fontSize: "30px" }}> Fill the details about new vacation: </div>
                    <Form.Group>
                        <Form.Label>Enter Destination</Form.Label>
                        <Form.Control type="text" name="destination" placeholder="destination" onChange={(e) => { updataVacation(e.target.name, e.target.value) }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Description</Form.Label>
                        <Form.Control type="text" name="description" placeholder="description" onChange={(e) => { updataVacation(e.target.name, e.target.value) }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Image</Form.Label>
                        <Form.Control type="url" name="image" placeholder="image" onChange={(e) => { updataVacation(e.target.name, e.target.value) }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Check-in date</Form.Label>
                        <Form.Control type="date" name="check_in_date" placeholder="check-in date" onChange={(e) => { updataVacation(e.target.name, e.target.value) }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Check-out date</Form.Label>
                        <Form.Control type="date" name="check_out_date" placeholder="check-out date" onChange={(e) => { updataVacation(e.target.name, e.target.value) }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Price</Form.Label>
                        <Form.Control type="number" name="price" placeholder="price" onChange={(e) => { updataVacation(e.target.name, e.target.value) }} />
                    </Form.Group>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button variant="primary" type="button" onClick={addAction}>
                            Save Vacation
                        </Button>
                        <Button style={{ marginLeft: "20px" }} variant="danger" type="button" 
                        onClick={() => { 
                            dispatch({ type: "current Tab", payload: 0 })
                            history.push('/home/forAdmin') }}>
                            cancel
                        </Button>
                    </div>
                </Form>

            </div>
        </div>
    )
}