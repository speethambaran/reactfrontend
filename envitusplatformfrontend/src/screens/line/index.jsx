import {Box} from "@mui/material";
import Header from "../../components/Header"
import LineChart from "../../components/Linechart"
import { data } from "../../data";
import { mockDataLine } from "../../data/mockData";

const Line = () =>{
    return(
        <Box m="20px">
            <Header title="Line Chart" subtitle="simple Line chart"/>
            <Box height="75vh">
            <LineChart isDashboard={true} data={mockDataLine}/>
            </Box>
        </Box>
    )
}

export default Line