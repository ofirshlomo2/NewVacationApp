import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import moment from "moment"
import { useSelector, useDispatch } from "react-redux"
import { BsTrashFill, BsPencil } from 'react-icons/bs';
import DeleteVacation from "../../asyncfunction/deleteVacationByadmin";
import { useHistory } from "react-router-dom"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
    title: {
        fontSize: 100
    }
}));

export default function AdminCard(props) {
    const { info } = props;
    const classes = useStyles();
    const userId = useSelector(state => state.userId)
    const history = useHistory()
    const dispatch = useDispatch()
    const check_in_date = moment(info.check_in_date).format("DD/MM/YYYY")
    const check_out_date = moment(info.check_out_date).format("DD/MM/YYYY")

    function callEditFunction() {
        dispatch({ type: "current vacation", payload: info })
        history.push(`/editVacation`)
    }

    return (
        <div className="col-lg-3 col-md-6 col-12 p-3 ">
            <Card style={{ height: "100%" }}>
                <div className="row">
                    <div className="col-8">
                        <CardHeader
                            avatar={
                                <Avatar className={classes.avatar}>
                                    {info.destination[0]}
                                </Avatar>
                            }
                            title={info.destination}
                            subheader={info.description}
                        />
                    </div>
                    <div className="col-4" style={{ display: "flex", justifyContent: "flex-end" }}>
                        <BsTrashFill style={{ fontSize: "25px", cursor: "pointer" }} onClick={() => { DeleteVacation(info.id, userId) }} />
                        <BsPencil style={{ marginLeft: "20px", fontSize: "25px", cursor: "pointer" }}
                            onClick={callEditFunction} />
                    </div>
                </div>
                <CardMedia
                    className={classes.media}
                    image={info.image}
                />
                <CardContent>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {check_in_date} - {check_out_date}
                    </Typography>
                    {info.price} ₪
                        </CardContent>
            </Card>
        </div>


    )
}

