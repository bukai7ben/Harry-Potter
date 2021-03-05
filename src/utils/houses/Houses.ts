import {House} from "../models/House";
import GRYFFINDOR_IMAGE from "../images/GRYFFINDOR.jpg";
import HUFFELPUFF_IMAGE from "../images/HUFFLEPUFF.jpg";
import RAVENCLAW_IMAGE from "../images/RAVENCLAW.jpg";
import SLYTHERIN_IMAGE from "../images/SLYTHERIN.jpg";

export const Houses: House[] = [
    {
        _id: 1,
        name: "Gryffindor",
        img: GRYFFINDOR_IMAGE
    },
    {
        _id: 2,
        name: "Hufflepuff",
        img: HUFFELPUFF_IMAGE
    },
    {
        _id: 3,
        name: "Ravenclaw",
        img: RAVENCLAW_IMAGE
    },
    {
        _id: 4,
        name: "Slytherin",
        img: SLYTHERIN_IMAGE
    }
]