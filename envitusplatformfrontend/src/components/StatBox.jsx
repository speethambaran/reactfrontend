import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme"
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase, test }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (

        <Box 
        gridColumn="span 2"
        gridRow="span 1"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        p="1.25rem 1rem"
        flex="1 1 100%"
        backgroundColor={colors.primary[400]}
        // backgroundColor={theme.palette.background.alt}
        borderRadius="0.55rem">
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
                        {test} <ProgressCircle progress={progress} /> 
                    </Typography>
                </Box>
                {/* <Box  mb="10px" ml="100px" >
                    
                        <ProgressCircle progress={progress} /> 
                    
                </Box> */}
            </Box>

            
                
            

        </Box>


    )
}

export default StatBox