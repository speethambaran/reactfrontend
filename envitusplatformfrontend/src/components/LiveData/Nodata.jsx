import * as React from "react";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Alert from "@mui/material/Alert";



const Nodata = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (

        <Box
            mt="-1em"
            p="0 400px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"

        >

            <Typography varient="h3" color={colors.grey[100]}>

                <img
                    mt="-1em"
                    alt="profile-user"
                    // width="300px"
                    height="350px"
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


    )

}


export default Nodata