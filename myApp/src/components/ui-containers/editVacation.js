import { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import UpdateVacationInDB from "../../asyncfunction/updateVacation"


export default function EditVacation() {

    const history = useHistory()
    const vacationDetails = useSelector(state => state.currentVacation)
    const [updateVacation, setUpdateVacation] = useState(vacationDetails)


    function updataVacation(lable, value) {
        setUpdateVacation({ ...updateVacation, [lable]: value })
    }

    async function callUpdateFun() {
        if (!updateVacation.destination || !updateVacation.description || !updateVacation.check_in_date || !updateVacation.check_out_date || !updateVacation.price)
            return alert("missing params")
        const response = await UpdateVacationInDB(updateVacation)
        if (response)
            history.push('/home/forAdmin')
        else
            alert("something went wrong...")

    }

    return (
        <div>
            <div className="row">
                <Form className="col-5" style={{ margin: "auto" }}>
                    <div style={{ fontSize: "30px" }}> Whice details do you want to update: </div>
                    <Form.Group>
                        <Form.Label>Enter Destination</Form.Label>
                        <Form.Control value={updateVacation.destination} type="text" name="destination" onChange={(e) => { updataVacation(e.target.name, e.target.value) }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Description</Form.Label>
                        <Form.Control value={updateVacation.description} type="text" name="description" placeholder="description" onChange={(e) => { updataVacation(e.target.name, e.target.value) }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Image</Form.Label>
                        <Form.Control value={updateVacation.image} type="url" name="image" placeholder="image" onChange={(e) => { updataVacation(e.target.name, e.target.value) }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Check-in date</Form.Label>
                        <Form.Control value={updateVacation.check_in_date} type="date" name="check_in_date" placeholder="check-in date" onChange={(e) => { updataVacation(e.target.name, e.target.value) }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Check-out date</Form.Label>
                        <Form.Control value={updateVacation.check_out_date} type="date" name="check_out_date" placeholder="check-out date" onChange={(e) => { updataVacation(e.target.name, e.target.value) }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Price</Form.Label>
                        <Form.Control value={updateVacation.price} type="number" name="price" placeholder="price" onChange={(e) => { updataVacation(e.target.name, e.target.value) }} />
                    </Form.Group>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button variant="primary" type="button" onClick={callUpdateFun} >
                            Save Changes
                        </Button>
                        <Button style={{ marginLeft: "20px" }} variant="danger" type="button" onClick={() => { history.push('/home/forAdmin') }}>
                            cancel
                         </Button>
                    </div>

                </Form>

            </div>
        </div>

    )
}