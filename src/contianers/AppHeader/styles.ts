import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    appHeader: {
        height: "60px",
        boxShadow: "0 2px 4px 1px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#1A1A1A",
        display: "flex",
        alignItems: "center",
    },
    root: {
        flexGrow: 1,
        padding: 1,
        fontFamily: "'Bitter', serif;",
    },
    tab: {
        color: "white",
        fontSize: "1.1em",
    },
});