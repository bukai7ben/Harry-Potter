import React from 'react';
import {useStyles} from "./HeaderStyle";

interface HouseProps{
    img:string;
    houseName:string;
    houseId:number;
}

function Header(props:HouseProps) {
    const classes = useStyles();
    const {img,houseName,houseId}=props;
    return (
        <div className={`${classes.header} ${classes[houseId]}`}>
            <img className={classes.image} src={img}/>
            <span className={classes.name}> {houseName}</span>
            <input className={classes.input}
                   type="text"
                   placeholder="Search Magician . . ."
            />
        </div>
    );
}

export default Header;

