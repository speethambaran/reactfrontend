import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import TableViewIcon from "@mui/icons-material/TableView";
import StackedLineChartOutlinedIcon from "@mui/icons-material/StackedLineChartOutlined";
import Sampletable from "../../components/LiveData/Sampletable";
import LineChart from "../../components/Linechart";
import Nodata from "../../components/LiveData/Nodata";
import { mockDataLine } from "../../data/mockData";
import LivedataTable from "./LivedataTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDashboardData } from "../../actions/deviceActions";
import { useState } from "react";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	const dispatch = useDispatch();
	const deviceList = useSelector((state) => state.deviceList);
	const { loading, error, device } = deviceList;

	const [currentDevice, setCurrentDevice] = useState("");

	const liveDataforDashboard = useSelector((state) => state.dashboardData);
	const { loadingTime, err, dashboardData } = liveDataforDashboard;

	useEffect(() => {
		dispatch(getDashboardData("patnaenvtest"));
	}, [dispatch]);

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
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `action-tab-${index}`,
		"aria-controls": `action-tabpanel-${index}`,
	};
}

export default function FloatingActionButtonZoom({ deviceId }) {
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
				minHeight: 300,
				justifyContent: "space-between",
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
					{/* <Tab /><Tab /><Tab /><Tab /> */}

					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={age}
						label="Age"
						placeholder="hiii"
						onChange={handlechange}
					>
						<MenuItem value={10}>Device 1</MenuItem>
						<MenuItem value={20}>Device 2</MenuItem>
						<MenuItem value={30}>Device 3</MenuItem>
					</Select>
					{/* <Tab /><Tab />
          <Tab />
          <Tab /><Tab /> */}
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
						<LineChart isDashboard={true} data={mockDataLine} />
					</Box>
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					{/* < Sampletable /> */}
					<LivedataTable deviceId={deviceId} />
				</TabPanel>
			</SwipeableViews>
		</Box>
	);
}
