import './AppHeader.css';
import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GryffindorImg from '../../utils/images/GRYFFINDOR.jpg';
import HufflepuffImg from '../../utils/images/HUFFLEPUFF.jpg';
import RavenclawImg from '../../utils/images/RAVENCLAW.jpg';
import SlytherinImg from '../../utils/images/SLYTHERIN.jpg';
import HouseDisplay from '../HouseDisplay/HouseDisplay';



interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={0}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

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

export default function AppHeader() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };


    return (
        <div className={classes.root}>
            <div className="app-header">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
                      TabIndicatorProps={{style: {background: 'white'}}}>
                    <Tab className={classes.tab} label="Gryffindor" {...a11yProps(0)} />
                    <Tab className={classes.tab} label="Hufflepuff" {...a11yProps(1)} />
                    <Tab className={classes.tab} label="Ravenclaw" {...a11yProps(2)} />
                    <Tab className={classes.tab} label="Slytherin" {...a11yProps(3)} />
                </Tabs>
            </div>
                <TabPanel  value={value} index={0} >
                    <HouseDisplay  houseName="House Gryffindor"
                                  houseId={1}
                                  houseImg={GryffindorImg}/>
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <HouseDisplay houseName="House Hufflepuff"
                                  houseId={2}
                                  houseImg={HufflepuffImg}/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <HouseDisplay houseName="House Ravenclaw"
                                  houseId={3}
                                  houseImg={RavenclawImg}/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <HouseDisplay houseName="House Slytherin"
                                  houseId={4}
                                  houseImg={SlytherinImg}/>
                </TabPanel>
        </div>
    );
}
