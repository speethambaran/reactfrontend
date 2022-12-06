import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import { Box, Typography, IconButton , useTheme} from "@mui/material";
import TableViewIcon from "@mui/icons-material/TableView";
import StackedLineChartOutlinedIcon from "@mui/icons-material/StackedLineChartOutlined";
import Sampletable from "../../components/LiveData/Sampletable";
import LineChart from "../../components/Linechart";
import Nodata from "../../components/LiveData/Nodata"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 5 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`
  };
}


export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const [age, setAge] = React.useState("");

  const handlechange = (event) => {
    setAge(event.target.value);
  };


  return (
    <Box
      sx={{
        bgcolor: "greenAccent",
        // width: 2000,
        position: "relative",
        minHeight: 375,
        justifyContent: "space-between"
      }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="grey"
          textColor="success"
          variant="fullWidth"
          aria-label="action tabs example"

        >
          <Tab label=<StackedLineChartOutlinedIcon /> {...a11yProps(0)} />
          <Tab label=<TableViewIcon /> {...a11yProps(1)} />
          <Tab label=<ThunderstormOutlinedIcon /> {...a11yProps(2)} />
          <Tab label=<AirOutlinedIcon /> {...a11yProps(3)} />
          
          <Select value={2} style={{ marginTop: 1, marginLeft: 200 ,marginRight:200 }}>
      <MenuItem value={1}>Device 1</MenuItem>
      <MenuItem value={2}>Device 2</MenuItem>
      <MenuItem value={3}>Device 3</MenuItem>
      <MenuItem value={4}>Device 4</MenuItem>
      <MenuItem value={5}>Device 5</MenuItem>
    </Select>
          
          
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <DownloadOutlinedIcon />
          </IconButton>
          <IconButton>
            <OnlinePredictionIcon color="success" />
          </IconButton>



        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Box height="250px" ml="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          < Sampletable />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Nodata/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <Nodata/>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
