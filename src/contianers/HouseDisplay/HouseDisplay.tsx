import React, {useEffect, useState} from 'react';
import './HouseDisplay.css';
import Header from "../../components/Header/Header";
import MediaCard from "../../components/Card/MediaCard";
import {getMagician} from "../../utils/services/Magician";
import Scroll from "../../components/Scroll/Scroll";

interface HouseDisplayProps {
    houseName: string;
    houseId: number;
    houseImg: string;
}
interface magician{
    name:string;
    age:number;
    img:string;
    _id:number;
}

export default function HouseDisplay(props: HouseDisplayProps) {
    const {houseName, houseId, houseImg} = props;

    const [MagiciansArr, setMagiciansArr] = useState<magician[]>([]);
    const [filteredBySearchingFromMagiciansArr, setFilteredBySearchingFromMagiciansArr] = useState([]);
    console.log(JSON.stringify(MagiciansArr))
    useEffect(() => {
        let mounted = true;
        getMagician()
            .then(magicians => {
                if (mounted) {
                    setMagiciansArr(magicians.filter((magician: { houseId: number; }) => props.houseId === magician.houseId));
                    /*(magicians.filter((magician: { houseId: number; }) => props.houseId === magician.houseId));*/
                }
            })
        console.log(JSON.stringify(MagiciansArr))
        return () => {
            mounted = false
        };
    }, [])

    /*function onSearchChange(e:string) {
        setFilteredBySearchingFromMagiciansArr(MagiciansArr.filter(magicians => {
                return (magicians.name.toLowerCase().includes(e.target.value.toLowerCase())) || (magicians.age.toString().includes(e.target.value))
            }
        ));
    }*/

    return (
        <div>
            <Header img={houseImg} houseName={houseName} houseId={houseId}/>
            <Scroll>
                <div className="card-container">
                    {MagiciansArr.map(magician => <MediaCard key={magician._id}
                                                            name={magician.name}
                                                            img={magician.img}
                                                            age={magician.age}
                />)}
                </div>
            </Scroll>
        </div>
    )
}
