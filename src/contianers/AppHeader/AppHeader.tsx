import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Houses} from "../../utils/houses/Houses";
import {useStyles} from "./AppHeaderStyle"

interface AppHeaderProps {
    onTabChange: (value: number) => void;
    tabToDisplay: number;
}

export default function AppHeader(props: AppHeaderProps) {
    const {onTabChange, tabToDisplay} = props;
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        onTabChange(newValue);
    };

    return (
        <div className={classes.root}>
            <div className={classes.appHeader}>
                <Tabs value={tabToDisplay} onChange={handleChange}
                      TabIndicatorProps={{style: {background: 'white'}}}>
                    {Houses.map((house, tabToDisplay) => (
                        <Tab className={classes.tab} label={house.name}/>
                    ))}
                </Tabs>
            </div>
        </div>
    );
}
