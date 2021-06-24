import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import VacationsList from "../../../asyncfunction/getVacations"
import AdminCard from "../../ui-containers/adminCards"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
});

export default function HomePageAdmin() {
    const [data, setData] = useState([])
    const selector = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles();

    useEffect(async () => {

        const result = await VacationsList(selector.userId)
        dispatch({ type: "vacations data", payload: result })
        setData(result)
    }, [])



    return (
        <div >
            <div style={{ textAlign: "right", paddingRight: "10px", cursor: "pointer" }} onClick={() => {
                setData(selector.vacationsData)
            }}>
                refresh
                <RefreshIcon fontSize="large" />
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
                {data.map((oneVacation) => { return <AdminCard key={oneVacation.id} info={oneVacation} /> })}
            </div>
        </div>

    )
}

