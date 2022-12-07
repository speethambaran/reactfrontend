import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme"
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase, test }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (

        <Box width="200" m="0 20px">
            <Box display="flex" justifyContent="flex-start">
                <Box>
                    {icon}
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ color: colors.grey[100] }}
                    >
                        {title}
                    </Typography>
                </Box>

            </Box>
            <Box display="flex" justifyContent="space-between">
                <Typography
                    variant="h5"
                    sx={{ color: colors.greenAccent[500] }}
                >
                    {subtitle}
                </Typography>
                <Typography
                    variant="h5"
                    fontStyle="italic"
                    sx={{ color: colors.greenAccent[600] }}
                >
                    {increase}
                </Typography>
                <Box >
                    <Typography
                        variant="h5"
                        fontStyle="italic"
                        sx={{ color: colors.greenAccent[600] }}

                    >
                        {test}
                    </Typography>
                </Box>
                <Box   justifyContent="space-between" >
                    
                        <ProgressCircle progress={progress} /> 
                    
                </Box>
            </Box>

            
                
            

        </Box>


    )
}

export default StatBox