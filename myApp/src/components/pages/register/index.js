import { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Form, Button, Row, Col } from "react-bootstrap"
import "../../../App.css"
import RegisterUSer from "../../../asyncfunction/newRegister"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function RegisterPage() {
    const classes = useStyles();
    const details = {
        first_name: "",
        last_name: "",
        user_name: "",
        password: ""
    }

    const [userDetails, setUserDetails] = useState(details)
    const history = useHistory();
    const dispatch = useDispatch()
    const [validateText, setValidateText] = useState("")
    const [displayText, setDisplayText] = useState("none")

    function updateDetails(lable, value) {
        setUserDetails({ ...userDetails, [lable]: value })
    }

    async function CreateRegistration() {
        if (!userDetails.first_name || !userDetails.last_name || !userDetails.user_name || !userDetails.password) {
            setValidateText("missing details")
            setDisplayText("block")
            return;
        }
        const response = await RegisterUSer(userDetails)
        if (response) {
            dispatch({ type: "user id", payload: response.id })
            dispatch({ type: "name of user", payload: userDetails.first_name })
            history.push('/home/forUser')
        }
        else {
            setValidateText("something went wrong...")
            setDisplayText("block")
        }
    }

    return (

        <div className="col-xl-4 col-md-8 col-12" style={{ margin: "auto", paddingTop: "10%" }}>
            <div className="box row">
                <div className="title pt-5">
                    REGISTRATION
                </div>
                <div className="contect col-10">
                    <Form>

                        <Form.Row>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>First name</Form.Label>
                                <Form.Control name="first_name" type="text" placeholder="Enter your first name"
                                    onChange={(e) => { updateDetails(e.target.name, e.target.value) }} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control name="last_name" type="text" placeholder="Enter your last name"
                                    onChange={(e) => { updateDetails(e.target.name, e.target.value) }} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>User name</Form.Label>
                                <Form.Control name="user_name" type="text" placeholder="Enter a user name"
                                    onChange={(e) => { updateDetails(e.target.name, e.target.value) }} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Enter a password"
                                    onChange={(e) => { updateDetails(e.target.name, e.target.value) }} />
                            </Form.Group>
                        </Form.Row>
                        <div style={{ fontSize: "15px", color: "red", display: "block", display: displayText }}>
                            {validateText}
                        </div>

                        <div style={{ paddingLeft: "30%", paddingTop: "10px" }}>
                            <Button style={{ fontSize: "20px", borderRadius: "15px", height: "40px", width: "50%" }} variant="primary" type="button" onClick={CreateRegistration} >
                                register
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>

    )
}