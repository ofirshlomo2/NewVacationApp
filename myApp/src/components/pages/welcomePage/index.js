import './index.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root:{
        '& > *': {
        margin: theme.spacing(1),
        borderRadius : "15px",
        height: 50,
        width: "50%"
    }},
  }));

export default function WelcomePage() {

const classes = useStyles()
const history = useHistory()

    return (
        <div >
            <div className="row">
                <div className="col-xl-5 col-md-3 col-12 content ">
                    <div className="title pr-4"> 
                        WELCOME
                    </div>
                    <div className={classes.root}>
                        <Button variant="contained" color="primary" onClick={()=>{history.push('/register')}}>
                            REGISTER
                        </Button>
                    </div>
                    <div className={classes.root}>
                        <Button variant="contained" onClick={()=>{history.push('/login')}} >
                            LOGIN
                        </Button>
                    </div>
                </div>
                <div className="col-xl-7 col-md-9 col-12 logo">

                </div>

            </div>

        </div>
    )
}