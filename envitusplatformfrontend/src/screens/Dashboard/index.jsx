import { Box, Button, IconButton, Typography, useTheme } from "@mui/material"
import { tokens } from "../../theme";
import Header from "../../components/Header";
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import StatBox from "../../components/StatBox"
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import LineChart from "../../components/Linechart";
import BarChart from "../../components/Barchart";
import AddressMap from "../../components/Map"

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box m="30px">
            <Box display="flex" justifyContent="space-between" alignItems="center"  >
                <Header title="DASHBOARD" subtitle="Welcome" />
                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                           
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "5px"}} />
                        Download Reports
                    </Button>
                </Box>
            </Box>


            {/* grids */}

            <Box
                display="grid"
                gridTemplateColumns="repeat(12,1fr)"
                gridAutoRows="140px"
                gap="17px"
            >

                {/* row   */}

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="left"
                >
                    <StatBox
                        title="Device"
                        icon={
                            <DevicesOutlinedIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }

                    />

                </Box>
               
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="left"
                >
                    <StatBox
                        title="Alert"
                        subtitle="alert"
                        progress="0.25"
                        increase="0"
                        icon={
                            <AddAlertOutlinedIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="left"
                >
                    <StatBox
                        title="Daily Rain"
                        subtitle="rain"
                        progress="0.75"
                        increase="0"
                        icon={
                            < ThunderstormOutlinedIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="Daily AQI"
                        subtitle="air quality index"
                        progress="0.50"
                        increase="+14%"
                        icon={
                            <AirOutlinedIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>

                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}

                >
                    <Box
                        mt="10px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="500"
                                color={colors.greenAccent[500]}
                            >
                                59,765456
                            </Typography>
                        </Box>


                        <Box >
                            <IconButton>
                                <DownloadOutlinedIcon
                                    SX={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                />
                            </IconButton>
                        </Box>

                    </Box>

                    <Box height="250px" ml="-20px">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>

                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}

                >
                    <Box mt="1.5em"
                        display="flex"
                        alignItems="right"
                    >
                        <Box >
                            <IconButton>
                                <DownloadOutlinedIcon
                                    SX={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                />
                            </IconButton>
                        </Box>

                    </Box>


                    <Box height="250px" mt="20px" >
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>



                <Box
                    mt="0em"
                    gridColumn="span 6"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="cover"
                    justifyContent="cover"

                >

                    <Box height="300px" width="500px" ml="3px">
                        <AddressMap isDashboard={true} />
                    </Box>

                </Box>



                <Box
                    gridColumn="span 6"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}

                >
                   

                    
                </Box>


            </Box>
            
        </Box >
    )
}

export default Dashboard;