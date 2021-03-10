import React from 'react';
import {useStyles} from"./ScrollStyle"

const Scroll = (props:any)=>{
    const classes = useStyles();
    return (
        <div className={classes.scroll} >
            {props.children}
        </div>
    );
}
export default Scroll