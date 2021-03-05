import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    root: {
        width: 220,
        margin: 10,
        borderRadius:28,
        border:"solid black",
        transition: "all .5s ease-in-out",
        '&:hover': {
            transform: "scale(1.15)",
        }
    },
    media: {
        height: 180,
    },
    Content: {
        display:"flex",
        flexDirection:"column",
        paddingLeft:20,
        paddingRight:20,
        paddingTop:6,
        fontFamily:"'Bitter', serif",
        height:26,
        backgroundColor:"gray",
        borderBottomRightRadius:25,
        borderBottomLeftRadius:25
    },
    text: {
        margin: 1,
        textAlign: "center",
        fontSize:"1.2em"
    }
});

interface magician{
    name:string;
    age:number;
    img:string;
}

export default function MediaCard(props:magician) {
    const classes = useStyles();
    const {name,age,img}=props;
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}
                />
                <CardContent className={classes.Content}>
                    <span className={classes.text}>{name}</span>
                    <span className={classes.text}>{age}</span>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}