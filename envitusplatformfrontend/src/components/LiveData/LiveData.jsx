import { Box,  useTheme } from "@mui/material"
import { tokens } from "../../theme";
import Header from "../../components/Header";
// import LineChart from "../components/Linechart";
import FloatingActionButtonZoom from "../../components/LiveData/LiveScreen"
import EnhancedTable from "../../components/LiveData/LivedataTable"


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
                         <Box height="250px" ml="-2em" width="2000px" mt="-1em" marginRight="-2em">
                         <FloatingActionButtonZoom />
                        </Box>

                        


                    </Box>


                </Box>

            </Box >
        </Box >
    )
}

export default LiveData;


