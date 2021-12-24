import MenuIcon from "@mui/icons-material/Menu";
import {AppBar, Toolbar,IconButton,Typography} from "@mui/material";
const Appbar = () => {
    return(
        <>
         <AppBar position="fixed">
        <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
            Photos
            </Typography>
        </Toolbar>
        </AppBar>
        </>
    )
}
export default Appbar;