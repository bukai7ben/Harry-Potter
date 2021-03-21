import React, {useContext} from 'react';
import {useStyles} from "./styles";
import OnSearchChangeContext from "../../contianers/HouseDisplay/OnSearchChangeContext"


export default function SearchBox() {
    const classes = useStyles();
    const OnSearchChange: any = useContext(OnSearchChangeContext);
    const placeholderText = "Search Magician . . ."
    return (
        <div>
            <input className={classes.input}
                   type="search"
                   placeholder={placeholderText}
                   onChange={OnSearchChange}
            />
        </div>
    );
}