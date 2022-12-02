import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import SearchIcon from "@mui/icons-material/Search"
import { useNavigate } from 'react-router-dom'
import MenuListComposition from "../global/Menu"
import Badge from '@mui/material/Badge';

const Topbar = () => {
    const theme = useTheme();
   
    const colorMode = useContext(ColorModeContext);
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem("loginStatus")
        localStorage.removeItem("userData")
        navigate('/')
    }

    return (
        <Box display="flex" justifyContent="space-between" p={2} className="header-icon">
            {/* search bar */}

            <Box display="flex"   >
               

            </Box>


            {/* icons */}
            <Box display="flex">
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }} >
                    <SearchIcon />
                </IconButton>

                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                       < LightModeOutlinedIcon />
                    ) : (
                        
                        < DarkModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                <Badge badgeContent={17} color="error">
                    <NotificationsOutlinedIcon/>
                    </Badge>
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                 <IconButton marginright={2} >
                    <MenuListComposition  />
                </IconButton>
            </Box>
        </Box>


    );
};


export default Topbar;




{/* <IconButton style={{ backgroundColor: 'transparent' }}>
                    <NotificationsOutlinedIcon style={{ backgroundColor: 'transparent' }} />
                    <span class="badge badge-danger" >1</span>
                </IconButton> */}
