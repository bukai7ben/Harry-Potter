import React from 'react';
import './Scroll.css'

const Scroll = (props:any)=>{
    return (
        <div className="scroll" >
            {props.children}
        </div>
    );
}
export default Scroll