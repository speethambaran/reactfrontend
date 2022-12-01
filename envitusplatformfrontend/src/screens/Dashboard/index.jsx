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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardData, listDevices } from "../../actions/deviceActions";
import { listLiveData } from "../../actions/sensorActions";
import { mockDataLine } from "../../data/mockData";
import PieChart from "../../components/PieChart";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [dashData,setDashData] = useState({})

    const [age, setAge] = useState('');
    

    const dispatch = useDispatch();
    const deviceList = useSelector((state) => state.deviceList);
    const { loading, error, device } = deviceList;

    const [currentDevice,setCurrentDevice] = useState('') 

    console.log('CURRENT DEVICE================',currentDevice)

    const liveData = useSelector((state) => state.livedata);
    const { livedata } = liveData;

    
    useEffect(() => {
        dispatch(listDevices());
        dispatch(getDashboardData())
        dispatch(listLiveData());
        
    }, [dispatch]);

    const handleChange = (event) => {
        setCurrentDevice(event.target.value);
    };


    return (
        <Box m="30px">
            <Box display="flex" justifyContent="space-between" alignItems="center" >
                <Header title="DASHBOARD" subtitle="Welcome" />
                <Box>
                    <h2>Device</h2>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Device</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={currentDevice}
                            label="Age"
                            onChange={(e)=>setCurrentDevice(e.target.value)}
                        >
                            {device ? device.map((dev)=>(
                                <MenuItem value={dev.deviceId}>{dev.deviceId}</MenuItem>
                            )) : ''}
                        </Select>
                    </FormControl>
                    <Button
                        className="m-2"
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "5px" }} />
                        Download Reports
                    </Button>
                    <Button
                        className="m-2"
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "5px" }} />
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
                        subtitle="device"
                        progress="0.75"
                        increase="progress"
                        test="jhgfghj"
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
                        progress="0.75"
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
                        progress="0.75"
                        
                        icon={
                            <AirOutlinedIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                    <PieChart className="pie_chart w-50" />
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
                        <LineChart isDashboard={true} data={mockDataLine} />  
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