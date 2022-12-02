import { Box, Button, IconButton, Typography, Paper, useTheme } from "@mui/material"
import { tokens } from "../theme";
import Header from "../components/Header";
import LineChart from "../components/Linechart";
import EnhancedTable from '../components/LivedataTable'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import { extendTheme, CssVarsProvider } from '@mui/joy/styles';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import Badge from '@mui/material/Badge';
import Alert from '@mui/material/Alert';
// import CardMedia from '@mui/material/CardMedia';

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
                gridAutoRows="178px"
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
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                <Button variant="contained">Chart</Button>&nbsp;&nbsp;
                                <Button variant="contained">Table</Button>&nbsp;&nbsp;
                                <Button variant="contained"><ThunderstormOutlinedIcon /></Button>&nbsp;&nbsp;
                                <Button variant="contained"><AirOutlinedIcon /></Button>&nbsp;&nbsp;


                                <Button >
                                    <CssVarsProvider >
                                        <Select
                                            color="success"
                                            disabled={false}
                                            placeholder="Choose one…"
                                            size="sm"
                                            variant="soft">
                                            <Option value="dog">Device 1</Option>
                                            <Option value="cat">Device</Option>
                                        </Select>
                                    </CssVarsProvider>
                                </Button>
                            </Typography>
                        </Box>

                        <Box >

                            <IconButton>
                                < RefreshIcon SX={{ fontSize: "26px", color: colors.greenAccent[500] }} />
                            </IconButton>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    SX={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                />
                            </IconButton>&nbsp;&nbsp;

                            <IconButton>
                                <Badge badgeContent={<OnlinePredictionIcon />} color="success">

                                </Badge>

                            </IconButton>
                        </Box>



                    </Box>

                    <Box
                        mt="-1em"
                        p="0 400px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"

                    >

                        <Typography varient="h3" color={colors.grey[100]}>

                            <img
                                mt="1em"
                                alt="profile-user"
                                // width="300px"
                                height="380px"
                                src={`../../assets/image.png`}
                                justifyContent="center"
                                alignItems="center"
                            />
                           
                        </Typography>
                        <Typography varient="h1"  >
                        <Alert variant="outlined" severity="error" >
                                NO DATA FOUND!!!!!
                            </Alert>
                            </Typography>

                        

                    </Box>
                </Box>


            </Box>

        </Box >
    )
}

export default LiveData;









