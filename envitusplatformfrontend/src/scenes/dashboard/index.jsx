import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
  DownloadOutlined,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/Devices';
import LineChart from "components/Linechart";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetDashboardQuery();


  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Select value={2} >
            <MenuItem value={1}>Device 1</MenuItem>
            <MenuItem value={2}>Device 2</MenuItem>
            <MenuItem value={3}>Device 3</MenuItem>
            <MenuItem value={4}>Device 4</MenuItem>
            <MenuItem value={5}>Device 5</MenuItem>
          </Select>
        </Box>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="Device"
          value={data && data.totalCustomers}
          icon={
            <DevicesOutlinedIcon
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Alert"
          value={data && data.todayStats.totalSales}
          icon={
            <AddAlertOutlinedIcon
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          {/* <Map view="sales" isDashboard={true} /> */}
        </Box>
        <StatBox
          title="Daily Rain"
          value={data && data.thisMonthStats.totalSales}
          icon={
            <ThunderstormOutlinedIcon
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Daily AQI"
          value={data && data.yearlySalesTotal}
          icon={
            <AirOutlinedIcon
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* ROW 2 */}
        <Box
          gridColumn="span 12"
          gridRow="span 3"

        >
          <Box>
            <FlexBetween>
              <Typography
                variant="h5"
                fontWeight="600"

              >
                Revenue Generated
                <Typography
                  variant="h3"
                  fontWeight="500"

                >
                  59,765456

                </Typography>
              </Typography>


              <Box>
                <Select value={2} >
                  <MenuItem value={1}>Device 1</MenuItem>
                  <MenuItem value={2}>Device 2</MenuItem>
                  <MenuItem value={3}>Device 3</MenuItem>
                  <MenuItem value={4}>Device 4</MenuItem>
                  <MenuItem value={5}>Device 5</MenuItem>
                </Select>
              </Box>
            </FlexBetween>

          </Box>
          <LineChart
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
