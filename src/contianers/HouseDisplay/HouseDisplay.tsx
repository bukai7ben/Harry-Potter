import React, {FormEvent, useEffect, useState} from 'react';
import {useStyles} from "./styles"
import Header from "../../components/Header/Header";
import MagicianMediaCard from "../../components/Card/MagicianMediaCard";
import {getMagician} from "../../utils/services/Magician";
import Scroll from "../../components/Scroll/Scroll";
import {Magician} from "../../utils/models/Magician";
import {House} from "../../utils/models/House";
import OnSearchChangeContext from "./OnSearchChangeContext"

interface HouseDisplayProps {
    house: House;
}

export default function HouseDisplay(props: HouseDisplayProps) {
    const classes = useStyles();
    const {house} = props;
    const [initialMagiciansArr, setInitialMagiciansArr] = useState<Magician[]>([]);
    const [MagiciansArr, setMagiciansArr] = useState<Magician[]>([]);

    function isMagicianInSearchScope(magician: Magician, searchValue: string) {
        return magician.name.toLowerCase().includes(searchValue.toLowerCase());
    }

    function onSearchChange(event: FormEvent<HTMLInputElement>) {
        const searchValue: string = event.currentTarget.value;
        return searchValue ? setMagiciansArr(initialMagiciansArr.filter((magician) =>
            isMagicianInSearchScope(magician, searchValue))) : setMagiciansArr(initialMagiciansArr);
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
            <OnSearchChangeContext.Provider value={onSearchChange}>
                <Header img={house.img} houseName={`House ${house.name}`}
                        houseId={house._id}/>
            </OnSearchChangeContext.Provider>
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
