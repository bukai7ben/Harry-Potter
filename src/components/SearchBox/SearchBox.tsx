import React, {ChangeEventHandler} from 'react';
import {useStyles} from "./styles";

interface SearchBoxProps {
    searchChange: ChangeEventHandler<HTMLInputElement>;
}

export default function SearchBox(props: SearchBoxProps) {
    const classes = useStyles();
    const {searchChange} = props;
    return (
        <div>
            <input className={classes.input}
                   type="search"
                   placeholder="Search Magician . . ."
                   onChange={searchChange}
            />
        </div>
    );
}