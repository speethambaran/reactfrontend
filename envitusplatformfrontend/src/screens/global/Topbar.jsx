import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
// import { ColorModeContext, tokens, } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import SearchIcon from "@mui/icons-material/Search"
const Topbar = () => {
    const theme = useTheme();
    // const color = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* search bar */}
            <Box display="flex"><IconButton><img  alt="profile-user"
                    src="http://159.89.163.128:7001/img/logo.png" className="header-logo"
                /></IconButton></Box>
            {/* <Box
                display="flex"
                backgroundColor={color.primary[400]}
                borderRadius="2px"
            >
                
            </Box> */}

            {/* icons */}
            <Box display="flex" color="white">
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }} >
                    <SearchIcon />
                </IconButton>

                <IconButton onClick={colorMode.toggleColorMode} >
                    {theme.palette.mode === 'dark' ? (
                        < DarkModeOutlinedIcon />
                    ) : (
                        < LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                {/* <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton> */}
                <IconButton >
                    
                    <Box className="dropdown " style={{Left:"-10px",right:"5px",position:"relative"}}>
            <i
              className="dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
             <PersonOutlinedIcon  />account
            </i>
            <Box className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Logout
              </a>
              <a className="dropdown-item" href="#">
                Profile
              </a>
              
            </Box>
            </Box>
                </IconButton>


            </Box>

        </Box>

    );
};

export default Topbar;