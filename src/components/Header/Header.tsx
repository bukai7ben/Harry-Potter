import {useStyles} from "./styles";
import SearchBox from "../SearchBox/SearchBox";
import React from 'react';

interface HouseProps {
    img: string;
    houseName: string;
    houseId: number;
}


function Header(props: HouseProps) {
    const classes = useStyles();
    const {img, houseName, houseId} = props;
    return (
        <div className={`${classes.header} ${classes[houseId]}`}>
            <img alt="" className={classes.image} src={img}/>
            <span className={classes.name}> {houseName}</span>
            <SearchBox/>
        </div>
    );
}

export default Header;

