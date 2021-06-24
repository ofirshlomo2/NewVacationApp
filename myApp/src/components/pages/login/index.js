import { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./index.css"
import LoginUser from "../../../asyncfunction/loginUser"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
}));

export default function LoginPage() {

    const classes = useStyles();
    const [user, setUser] = useState()
    const [password, setPassword] = useState()
    const [userFieldHandler, setUserFieldHandler] = useState(false)
    const [passFieldHandler, setPassFieldHandler] = useState(false)
    const [validateText, setValidateText] = useState("none")
    const history = useHistory();
    const dispatch = useDispatch()

    async function loginFunc() {
        if (!user || !password) {
            setUserFieldHandler(true)
            setPassFieldHandler(true)

            setValidateText("block")
            return;
        }

        const userInfo = await LoginUser(user, password)
        if (userInfo) {
            dispatch({ type: "user id", payload: userInfo.id })
            dispatch({ type: "name of user", payload: userInfo.name })
            if (userInfo.role === 1) {
                dispatch({ type: "user role", payload: 1 })
                history.push('/home/forAdmin')
            } else {
                dispatch({ type: "user role", payload: 0 })
                history.push('/home/forUser')
            }
        }
        else {
            setUserFieldHandler(true)
            setPassFieldHandler(true)
            setValidateText("block")
        }
    }

    return (

        <div className="col-xl-4 col-md-8 col-12" style={{ margin: "auto", paddingTop: "10%" }}>
            <div className="box row">
                <div className="title pt-5">
                    LOGIN
                </div>
                <div className="contect">
                    <div style={{ fontSize: "15px", color: "red", padding: "6px", display: validateText }}>
                        incorrect user name or password
                    </div>
                    <form className={classes.root} noValidate autoComplete="off">

                        <TextField error={userFieldHandler} autoFocus id="outlined-basic" label="ETNER USER NAME" variant="outlined" onChange={(e) => { setUser(e.target.value) }} />
                        <TextField error={passFieldHandler} id="outlined-basic" type="password" label="ETNER PASSWORD" variant="outlined" onChange={(e) => { setPassword(e.target.value) }} />
                    </form>
                    <div className={classes.root}>

                        <Button style={{ borderRadius: "15px", height: "40px" }} variant="contained" color="primary" onClick={loginFunc} >
                            LOGIN
                        </Button>
                    </div>
                    <Button style={{ color: "blue", textDecoration: "underline" }} variant="text" onClick={() => { history.push('/register') }}>Not registered yet?</Button>
                </div>
            </div>
        </div>

    )
}