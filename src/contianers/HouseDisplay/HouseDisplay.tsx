import React, {useEffect, useState} from 'react';
import './HouseDisplay.css';
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
    const { house } = props;

    const [MagiciansArr, setMagiciansArr] = useState<Magician[]>([]);
    const [filteredBySearchingFromMagiciansArr, setFilteredBySearchingFromMagiciansArr] = useState([]);
    useEffect(() => {
        getMagician()
            .then(magicians => {
                    setMagiciansArr(magicians.filter((magician: Magician) => house._id === magician.houseId));
                    /*(magicians.filter((magician: { houseId: number; }) => props.houseId === magician.houseId));*/
            })
    }, [])

    /*function onSearchChange(e:string) {
        setFilteredBySearchingFromMagiciansArr(MagiciansArr.filter(magicians => {
                return (magicians.name.toLowerCase().includes(e.target.value.toLowerCase())) || (magicians.age.toString().includes(e.target.value))
            }
        ));
    }*/

    return (
        <div>
            <Header img={house.img} houseName={`House ${house.name}`} houseId={house._id}/>
            <Scroll>
                <div className="card-container">
                    {MagiciansArr.map(magician => <MagicianMediaCard key={magician._id}
                                                                     magicianToDisplay={magician}
                />)}
                </div>
            </Scroll>
        </div>
    )
}
