import React from 'react';
import './Header.css';


interface HouseProps{
    img:string;
    houseName:string;
    houseId:number;
}

function Header(props:HouseProps) {
    const {img,houseName,houseId}=props
    return (
        <div className="header" id={'house' + houseId }>
            <img className="image" src={img}/>
            <span className="name"> {houseName}</span>
            <input className="input"
                   type="text"
                   placeholder="Search Magician . . ."
            />
        </div>
    );
}

export default Header;

