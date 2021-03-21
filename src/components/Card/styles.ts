import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    root: {
        width: 220,
        margin: 10,
        borderRadius:28,
        border:"solid black",
        transition: "all .5s ease-in-out",
        '&:hover': {
            transform: "scale(1.15)",
        }
    },
    media: {
        height: 180,
    },
    Content: {
        display:"flex",
        flexDirection:"column",
        paddingLeft:20,
        paddingRight:20,
        paddingTop:6,
        fontFamily:"'Bitter', serif",
        height:26,
        backgroundColor:"gray",
        borderBottomRightRadius:25,
        borderBottomLeftRadius:25
    },
    text: {
        margin: 1,
        textAlign: "center",
        fontSize:"1.2em"
    }
});