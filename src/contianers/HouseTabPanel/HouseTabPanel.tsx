import {Houses} from "../../utils/houses/Houses";
import HouseDisplay from "../HouseDisplay/HouseDisplay";
import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index} = props;

    return (
        <div hidden={value !== index}>
            {value === index && (
                <Box p={0}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

interface HouseTabPanelProps{
    tabToDisplay: number;
}

export default function HouseTabPanel(props: HouseTabPanelProps) {
    const {tabToDisplay} = props;
    return (
        <div>
            {Houses.map((house, index) => (
                <TabPanel value={tabToDisplay} index={index}>
                    <HouseDisplay house={house}/>
                </TabPanel>
            ))}
        </div>
    )
}