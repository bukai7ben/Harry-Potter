import React, {FormEvent, useEffect, useState} from 'react';
import {useStyles} from "./styles"
import Header from "../../components/Header/Header";
import MagicianMediaCard from "../../components/Card/MagicianMediaCard";
import {getMagician} from "../../utils/services/Magician";
import Scroll from "../../components/Scroll/Scroll";
import {Magician} from "../../utils/models/Magician";
import {House} from "../../utils/models/House";

interface HouseDisplayProps {
    house: House;
}

export default function HouseDisplay(props: HouseDisplayProps) {
    const classes = useStyles();
    const {house} = props;
    const [initialMagiciansArr, setInitialMagiciansArr] = useState<Magician[]>([]);
    const [MagiciansArr, setMagiciansArr] = useState<Magician[]>([]);

    function onSearchChange(event: FormEvent<HTMLInputElement>) {
        const searchValue: string = event.currentTarget.value;
        if (!searchValue) return setMagiciansArr(initialMagiciansArr);
        setMagiciansArr(MagiciansArr.filter((magician) => {
            return magician.name.toLowerCase().includes(searchValue.toLowerCase());
        }));
    }

    useEffect(() => {
        getMagician()
            .then(magicians => {
                setInitialMagiciansArr(magicians.filter((magician: Magician) => house._id === magician.houseId));
                setMagiciansArr(magicians.filter((magician: Magician) => house._id === magician.houseId));
            })
    }, [])

    return (
        <div>
            <Header SearchChange={onSearchChange} img={house.img} houseName={`House ${house.name}`}
                    houseId={house._id}/>
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
