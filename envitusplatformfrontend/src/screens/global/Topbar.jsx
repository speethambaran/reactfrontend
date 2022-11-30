import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import SearchIcon from "@mui/icons-material/Search"
import MenuListComposition from "../global/Menu"

const Topbar = () => {
    const theme = useTheme();
   
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* search bar */}

            <Box display="flex"   >
                {/* <img
                    alt="profile-user"
                    width="100px"
                    height="50px"

                    src={`../../assets/logo.png`}
               
                /> */}

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
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>

                <IconButton>
                    <MenuListComposition />
                </IconButton>
            </Box>

        </Box>


    );
};


export default Topbar;

