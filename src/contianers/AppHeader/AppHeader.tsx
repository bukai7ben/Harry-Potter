import './AppHeader.css';
import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Houses} from "../../utils/houses/Houses";


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        padding: 1,
        fontFamily: "'Bitter', serif;",
    },
    tab: {
        color: "white",
        fontSize: "1.1em",
    },
}));

interface AppHeaderProps{
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
            <div className="app-header">
                <Tabs value={tabToDisplay} onChange={handleChange}
                      TabIndicatorProps={{style: {background: 'white'}}}>
                    {Houses.map((house,index)=>(
                        <Tab className={classes.tab} label={house.name}  />
                    ))}
                </Tabs>
            </div>
        </div>
    );
}
