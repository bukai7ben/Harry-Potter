import React from 'react';
import AppHeader from "../AppHeader/AppHeader";
import HouseTabPanel from "../HouseTabPanel/HouseTabPanel";


export default function App(){

    const [value, setValue] = React.useState<number>(0);
    return (
        <div>
            <AppHeader onTabChange={setValue} tabToDisplay={value}/>
            <HouseTabPanel tabToDisplay={value}/>
        </div>
    )
}
