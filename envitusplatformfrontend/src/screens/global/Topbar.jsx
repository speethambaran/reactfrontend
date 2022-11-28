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
import { useNavigate } from 'react-router-dom'
const Topbar = () => {
    const theme = useTheme();
    // const color = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const navigate = useNavigate();

    const logoutHandler = ()=>{
        localStorage.removeItem("loginStatus")
        navigate('/')
    }

    return (
        <Box display="flex" justifyContent="space-between" p={2} className="header-icon">
            {/* search bar */}
            <Box display="flex" ><IconButton style={{ backgroundColor: 'transparent' }}><img  alt="profile-user"
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
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" style={{height:"40px",top:"10px",position:"relative"}} />
                <IconButton type="button" sx={{ p: 1 }} style={{ backgroundColor: 'transparent' }}>
                    <SearchIcon style={{ backgroundColor: 'transparent' }}/>
                </IconButton>

                <IconButton onClick={colorMode.toggleColorMode} style={{ backgroundColor: 'transparent' }}>
                    {theme.palette.mode === 'dark' ? (
                        < DarkModeOutlinedIcon style={{ backgroundColor: 'transparent' }}/>
                    ) : (
                        < LightModeOutlinedIcon style={{ backgroundColor: 'transparent' }}/>
                    )}
                </IconButton>
                <IconButton style={{ backgroundColor: 'transparent' }}>
                    <NotificationsOutlinedIcon style={{ backgroundColor: 'transparent' }}/>
                    <span class="badge badge-danger" >1</span>
                </IconButton>
                {/* <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton> */}
                <IconButton style={{ backgroundColor: 'transparent' }}>
                    
                    <Box className="dropdown " style={{Left:"-10px",right:"5px",position:"relative",backgroundColor: 'transparent'}} >
            <i
              className="dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              

            >
             <PersonOutlinedIcon  style={{ backgroundColor: 'transparent' }}/>account
            </i>
            <Box className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#" onClick={logoutHandler}>
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