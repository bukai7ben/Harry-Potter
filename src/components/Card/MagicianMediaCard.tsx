import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {useStyles} from "./MagicianMediaCardStyles";
import {Magician} from "../../utils/models/Magician";

interface MediaCardProps{
    magicianToDisplay: Magician;
}

export default function MagicianMediaCard(props:MediaCardProps) {
    const classes = useStyles();
    const {magicianToDisplay}=props;
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={magicianToDisplay.img}
                />
                <CardContent className={classes.Content}>
                    <span className={classes.text}>{magicianToDisplay.name}</span>
                    <span className={classes.text}>{magicianToDisplay.age}</span>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}