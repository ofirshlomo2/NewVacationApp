import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function AdminMenu() {
    const history = useHistory()
    const currentTab = useSelector(state => state.currentTab)
    const dispatch = useDispatch()
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        dispatch({type:"current Tab" , payload: newValue })
    };

    return (
        <div >
            <div >
                <Paper className={classes.root}>
                    <Tabs
                        value={currentTab}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Home" onClick={() => { history.push('/home/forAdmin') }} />
                        <Tab label="Add Vacation" onClick={() => { history.push('/addVacation') }} />
                        <Tab label="Status Vacations" onClick={() => { history.push('/vacationsReports') }}  />
                    </Tabs>
                </Paper>
            </div>
        </div>

    )
}


