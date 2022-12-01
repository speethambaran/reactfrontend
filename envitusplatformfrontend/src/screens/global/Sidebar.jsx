import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar"
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import DevicesOutlinedIcon from '@mui/icons-material/Devices';
import DatasetOutlinedIcon from '@mui/icons-material/Dataset';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import DiversityOutlined1Icon from '@mui/icons-material/Diversity1';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';


const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === title}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    )

}






const Sidebar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");




    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    background: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important"
                },

            }}
        >

            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* logo and menu icon */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >

                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography varient="h3" color={colors.grey[100]}>
                                    {/* ADMIN */}
                                    <img
                                        alt="profile-user"
                                        width="100px"
                                        height="50px"
                                        src={`../../assets/logo.png`}
                                    // src={`http://159.89.163.128:7001/img/logo.png`}
                                    // style={{ cursor: "pointer", borderRadius: "50%" }}
                                    />
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />

                                </IconButton>
                            </Box>

                        )}
                    </MenuItem>

                    {/* user */}

                    {!isCollapsed && (
                        <Box mb="25px">

                        </Box>
                    )}
                    {/* menu items */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/dashboard"
                            icon=<HomeOutlinedIcon />
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            varient="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >Data
                        </Typography>

                        <Item
                            title="Devices"
                            to="/device"
                            icon=<DevicesOutlinedIcon />
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Live data"
                            to="/live"
                            icon={<DatasetOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Users"
                            to="/users"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Organization"
                            to="/organizations"
                            icon={<DiversityOutlined1Icon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Sensors"
                            to="/sensors"
                            icon={<SensorsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Api keys"
                            to="/"
                            icon={<KeyOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Map"
                            to="/map"
                            icon={< MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            varient="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >Charts
                        </Typography>

                        <Item
                            title="Bar chart"
                            to="/bar"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Line chart"
                            to="/line"
                            icon={<StackedLineChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                    </Box>

                </Menu>
            </ProSidebar>
        </Box>
    )

}

export default Sidebar;