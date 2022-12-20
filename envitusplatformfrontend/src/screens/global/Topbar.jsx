import React, { useState } from "react";
import { tokens } from "../../theme";
import {
     Box, 
     IconButton,
     AppBar,
     Typography,
     Menu,
  MenuItem,
     Toolbar,
     Button,
      useTheme,
     } from "@mui/material";
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
import FlexBetween from "../../components/FlexBetween";
import {
    Menu as MenuIcon,
    Search,
    ArrowDropDownOutlined,
    SettingsOutlined,
  } from "@mui/icons-material";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
   
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const colorMode = useContext(ColorModeContext);
    const navigate = useNavigate();

    const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

    const logoutHandler = () => {
        localStorage.removeItem("loginStatus")
        localStorage.removeItem("userData")
        navigate('/')
    }

        return (
            <AppBar
              sx={{
                position: "static",
                background: "none",
                boxShadow: "none",
              }}
            >
              <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* LEFT SIDE */}
                <FlexBetween>
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <MenuIcon />
                  </IconButton>
                  <FlexBetween
                    // backgroundColor={theme.palette.background.alt}
                    borderRadius="9px"
                    gap="3rem"
                    p="0.1rem 1.5rem"
                  >
                    <InputBase placeholder="Search..." />
                    <IconButton>
                      <Search />
                    </IconButton>
                  </FlexBetween>
                </FlexBetween>
        
                {/* RIGHT SIDE */}
                <FlexBetween gap="1.5rem">
                <IconButton onClick={colorMode.toggleColorMode}>
                   {theme.palette.mode === 'dark' ? (
                       < LightModeOutlinedIcon sx={{ fontSize: "25px" }}/>         
                                  ) : (
                        
                       < DarkModeOutlinedIcon sx={{ fontSize: "25px" }}/>
                   )}
                </IconButton>
                  
                  <IconButton>
                    <SettingsOutlined sx={{ fontSize: "25px" }} />
                  </IconButton>
        
                  <FlexBetween>
                    <Button
                      onClick={handleClick}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        textTransform: "none",
                        gap: "1rem",
                      }}
                    >
                      
                      <Box textAlign="left">
                        <Typography
                          fontWeight="bold"
                          fontSize="0.85rem"
                        sx={{ color: colors.grey[100] }}
                        >
                          {/* {user.name} */}amal
                        </Typography>
                        
                      </Box>
                      <ArrowDropDownOutlined
                        // sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
                      />
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={isOpen}
                      onClose={handleClose}
                      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    >
                      <MenuItem onClick={handleClose}>Log Out</MenuItem>
                    </Menu>
                  </FlexBetween>
                </FlexBetween>
              </Toolbar>
            </AppBar>
          );
        };
        
//         <Box display="flex" justifyContent="space-between" p={2} className="header-icon">
//             {/* search bar */}

//             <Box display="flex"   >
               

//             </Box>


//             {/* icons */}
//             <Box display="flex">
//                 <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
//                 <IconButton type="button" sx={{ p: 1 }} >
//                     <SearchIcon />
//                 </IconButton>

//                 <IconButton onClick={colorMode.toggleColorMode}>
//                     {theme.palette.mode === 'dark' ? (
//                        < LightModeOutlinedIcon />
//                     ) : (
                        
//                         < DarkModeOutlinedIcon />
//                     )}
//                 </IconButton>
//                 <IconButton>
//                 <Badge badgeContent={17} color="error">
//                     <NotificationsOutlinedIcon/>
//                     </Badge>
//                 </IconButton>
//                 <IconButton>
//                     <SettingsOutlinedIcon />
//                 </IconButton>
//                  <IconButton marginright={2} >
//                     <MenuListComposition  />
//                 </IconButton>
//             </Box>
//         </Box>


//     );
// };


export default Topbar;




