import React from 'react';
import {useStyles} from "./styles"

const Scroll = (props: any) => {
    const classes = useStyles();
    return (
        <div className={classes.scroll}>
            {props.children}
        </div>
    );
}
export default Scroll