import { Box, Button, IconButton, Typography, useTheme } from "@mui/material"
import { tokens } from "../theme";
import Header from "../components/Header";
import LineChart from "../components/Linechart";
import EnhancedTable from '../components/LivedataTable'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';

const LiveData = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box m="30px">
            <Box display="flex" justifyContent="space-between" alignItems="center" >
                <Header title="Live Data" subtitle="Welcome" />
            </Box>


            {/* grids */}

            <Box
                display="grid"
                gridTemplateColumns="repeat(12,1fr)"
                gridAutoRows="140px"
                gap="19px"
            >

                {/* row   */}


                <Box
                    gridColumn="span 12"
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

                        <Box height="250px" ml="-2em" width="2000px" mt="-1em" marginRight="-2em">
                            <EnhancedTable />
                        </Box>

                    </Box>


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
                                <Button variant="contained">Chart</Button>&nbsp;&nbsp;
                                <Button variant="contained">Table</Button>&nbsp;&nbsp;
                                <Button variant="contained"><ThunderstormOutlinedIcon/></Button>&nbsp;&nbsp;
                                <Button variant="contained"><AirOutlinedIcon/></Button>&nbsp;&nbsp;
                            </Typography>

                        </Box>


                        <Box >
                            <IconButton>
                                < RefreshIcon  SX={{ fontSize: "26px", color: colors.greenAccent[500] }} />
                            </IconButton>
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


                </Box>





            </Box>

        </Box >
    )
}

export default LiveData;