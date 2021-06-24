import React from 'react';
import { useState } from "react"
import { makeStyles } from '@material-ui/core/styles'
import moment from "moment"
import FollowVacation from "../../asyncfunction/followVacation";
import { useSelector } from "react-redux"
import UnfollowVacation from "../../asyncfunction/unfollowVacation";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

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

export default function VacationCard(props) {
    const { info } = props;
    const classes = useStyles();
    const userId = useSelector(state => state.userId)

    const [checkboxState, setcheckboxState] = useState(info.user_id === userId ? "checked" : "")

    async function changeFollowingStatus(status) {
        if (status) {
            await FollowVacation(userId, info.id)
            setcheckboxState("checked")
        }
        else {
            await UnfollowVacation(userId, info.id)
            setcheckboxState("")
        }
    }
    
    return (
        <div className="col-12 col-md-4 col-xl-3 p-3 ">
            <Card style={{ height: "100%" }}>
                <CardHeader
                    avatar={
                    <Avatar className={classes.avatar}>
                            {info.destination[0]}
                    </Avatar>
                    }
                    title={info.destination} 
                    subheader={info.description}
                    action={<FormControlLabel
                        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}
                        checked={checkboxState}    
                        style={{ textAlign: "right", marginLeft: "20px" }}
                            onChange={(e) => { changeFollowingStatus(e.target.checked) }} />} />}
                />
                <CardMedia
                    className={classes.media}
                    image={info.image}
                />
                <CardContent>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {moment(info.check_in_date).format("DD/MM/YYYY")} - {moment(info.check_out_date).format("DD/MM/YYYY")}
                    </Typography>
                    {info.price} ₪
            </CardContent>
            </Card>


        </div>


    )
}