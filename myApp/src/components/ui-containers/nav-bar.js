import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const selector = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    function Logout() {
        dispatch({ type: "user id", payload: "" })
        dispatch({ type: "name of user", payload: null })
        dispatch({ type: "vacationsData", payload: [] })
        history.push('/')
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <HomeIcon fontSize="large"
                            onClick={() => {
                                if (selector.userRole) {
                                    dispatch({ type: "current Tab", payload: 0 })
                                    history.push('/home/forAdmin')
                                }
                                else
                                    history.push('/home/forUser')
                            }} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Vacations App
                    </Typography>

                    <div>
                        <div style={{ color: "black" }}>
                            <Typography variant="h6" >
                                welcome {selector.name} !
                         </Typography>
                        </div>
                        <Button color="inherit" onClick={Logout}>Logout</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
