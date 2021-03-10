import React, {useEffect, useState} from 'react';
import {useStyles} from "./HouseDisplayStyle";
import Header from "../../components/Header/Header";
import MagicianMediaCard from "../../components/Card/MagicianMediaCard";
import {getMagician} from "../../utils/services/Magician";
import Scroll from "../../components/Scroll/Scroll";
import {Magician} from "../../utils/models/Magician";
import {House} from "../../utils/models/House";

interface HouseDisplayProps{
    house: House;
}

export default function HouseDisplay(props: HouseDisplayProps) {
    const classes = useStyles();
    const { house } = props;
    const [MagiciansArr, setMagiciansArr] = useState<Magician[]>([]);

    useEffect(() => {
        getMagician()
            .then(magicians => {
                    setMagiciansArr(magicians.filter((magician: Magician) => house._id === magician.houseId));
            })
    }, [])


    return (
        <div>
            <Header img={house.img} houseName={`House ${house.name}`} houseId={house._id}/>
            <Scroll>
                <div className={classes.cardContainer}>
                    {MagiciansArr.map(magician => <MagicianMediaCard key={magician._id}
                                                                     magicianToDisplay={magician}
                />)}
                </div>
            </Scroll>
        </div>
    )
}
