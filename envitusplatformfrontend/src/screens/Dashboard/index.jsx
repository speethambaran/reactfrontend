import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import StatBox from "../../components/StatBox";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import LineChart from "../../components/Linechart";
import BarChart from "../../components/Barchart";
import AddressMap from "../../components/Map";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../../components/LoadingBox";
import {
	getDashboardData,
	getDevice,
	getDeviceDetails,
	listDevices,
} from "../../actions/deviceActions";
import { listLiveData } from "../../actions/sensorActions";
import { mockDataLine } from "../../data/mockData";
import PieChart from "../../components/PieChart";
import VerticalChart from "../../components/VerticalChart";
import SimpleMap from "../../components/SimpleMap";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Dashboard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	}));

	const [age, setAge] = useState("");
	const [dashData, setDashData] = useState({});

	const dispatch = useDispatch();
	const deviceList = useSelector((state) => state.deviceList);
	const { loading, error, device } = deviceList;

	// console.log("device details**********", device);

	const [currentDevice, setCurrentDevice] = useState("");

	const liveDataforDashboard = useSelector((state) => state.dashboardData);
	const { loadingTime, err, dashboardData } = liveDataforDashboard;

	const liveData = useSelector((state) => state.livedata);
	const { livedata } = liveData;

	const deviceDetails = useSelector((state) => state.getDevice);
	const { device_loading, device_details } = deviceDetails;

	const selectDevice = useSelector((state) => state.deviceDetails);
	const { device_details_loading, device_data } = selectDevice;

	console.log("CURRENT DEVCE---------", currentDevice);

	const [rain, setRain] = useState(0);

	useEffect(() => {
		dispatch(listDevices());
		dispatch(getDashboardData("patnaenvtest"));
		dispatch(listLiveData());
		dispatch(getDevice(currentDevice));
		dispatch(getDeviceDetails(currentDevice));
	}, [dispatch]);

	const handleChange = (event) => {
		setCurrentDevice(event.target.value);
	};

	return (
		<Box m="30px">
			<Box
				display="grid"
				gridTemplateColumns="repeat(12,1fr)"
				gridAutoRows="155px"
				gap="19px"
			>
				<Header title="DASHBOARD" subtitle="Welcome" />
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<h2>Device</h2>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">
							{device && device[0] && device[0].deviceId}
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={currentDevice}
							label="Age"
							style={{ width: "200px", left: "5px", position: "relative" }}
							onChange={(e) => setCurrentDevice(e.target.value)}
						>
							{device
								? device.map((dev) => (
										<MenuItem value={dev.deviceId}>{dev.deviceId}</MenuItem>
								  ))
								: ""}
						</Select>
					</FormControl>
					{/* <Button
						className="m-2"
						sx={{
							backgroundColor: colors.blueAccent[700],
							color: colors.grey[100],
							fontSize: "14px",
							fontWeight: "bold",
							padding: "10px 20px",
						}}
					>
						<DownloadOutlinedIcon sx={{ mr: "5px" }} />
						Download Reports
					</Button>
					<Button
						className="m-2"
						sx={{
							backgroundColor: colors.blueAccent[700],
							color: colors.grey[100],
							fontSize: "14px",
							fontWeight: "bold",
							padding: "10px 20px",
						}}
					>
						<DownloadOutlinedIcon sx={{ mr: "5px" }} />
						Download Reports
					</Button> */}
				</Box>
			</Box>

			{/* grids */}

			<Box
				display="grid"
				gridTemplateColumns="repeat(12,1fr)"
				gridAutoRows="140px"
				gap="17px"
			>
				{/* row   */}

				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="left"
				>
					{/* <StatBox
						title="Device"
						subtitle={currentDevice && currentDevice}
						progress="0.5"
						increase=""
						icon={
							<DevicesOutlinedIcon
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/> */}
					<Box width="200" m="0 20px">
						<Box display="flex" justifyContent="flex-start">
							<Box>
								{/* <DevicesOutlinedIcon sx={{ color: colors.greenAccent[600], fontSize: "26px", mt: 0 }} /> */}
								<Typography
									variant="h5"
									fontWeight="bold"
									sx={{ color: colors.grey[100] }}
								>
									Device
								</Typography>
							</Box>
						</Box>

						{device_details_loading ? (
							<LoadingBox />
						) : (
							device_data && (
								<Box sx={{ flexGrow: 1 }}>
									<Grid container spacing={2}>
										<Grid item xs={6}>
											<Item style={{ background: "none", color: "cyan" }}>
												Device ID
											</Item>
										</Grid>
										<Grid item xs={6}>
											<Item style={{ background: "none", color: "cyan" }}>
												{device_data.deviceId}
											</Item>
										</Grid>
										<Grid item xs={6}>
											<Item style={{ background: "none", color: "cyan" }}>
												Sub Type
											</Item>
										</Grid>
										<Grid item xs={6}>
											<Item style={{ background: "none", color: "cyan" }}>
												{device_data.subType}
											</Item>
										</Grid>
									</Grid>
								</Box>
							)
						)}
					</Box>
				</Box>

				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="left"
				>
					<StatBox
						title="Alert"
						subtitle="alert"
						progress="0.25"
						increase="0"
						icon={
							<AddAlertOutlinedIcon
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>

				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="left"
				>
					<StatBox
						title="Daily Rain"
						subtitle="rain"
						progress="0.75"
						increase="0"
						icon={
							<ThunderstormOutlinedIcon
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>

				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatBox
						title="Daily AQI"
						subtitle={
							device_details && device_details[0] && device_details[0].latestAQI
						}
						progress={
							device_details &&
							device_details[0] &&
							device_details[0].latestAQI / 100
						}
						icon={
							<AirOutlinedIcon
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
					{/* <PieChart style={{width:"100px",height:"100px"}} className="pie_chart w-50" /> */}
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
								Live Data
							</Typography>
							<Typography
								variant="h3"
								fontWeight="500"
								color={colors.greenAccent[500]}
							>
								Device ID : patnaenvtest
							</Typography>
						</Box>

						<Box>
							<IconButton>
								<DownloadOutlinedIcon
									SX={{ fontSize: "26px", color: colors.greenAccent[500] }}
								/>
							</IconButton>
						</Box>
					</Box>

					<Box height="250px" ml="-20px">
						{/* {loadingTime ? (
                            <LoadingBox />
                        ) : error ? (<MessageBox />) : (
                            <div>
                                <LineChart isDashboard={true} data={dashboardData} />
                            </div>
                        )} */}

						{dashboardData && (
							<LineChart isDashboard={true} data={dashboardData} />
						)}
						{/* <LineChart isDashboard={true} data={mockDataLine} />   */}
						{/* <VerticalChart /> */}
					</Box>
				</Box>

				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
				>
					<Box mt="1.5em" display="flex" alignItems="right">
						<Box>
							<IconButton>
								<DownloadOutlinedIcon
									SX={{ fontSize: "26px", color: colors.greenAccent[500] }}
								/>
							</IconButton>
						</Box>
					</Box>

					<Box height="250px" mt="20px">
						<BarChart isDashboard={true} />
					</Box>
				</Box>

				<Box
					mt="0em"
					gridColumn="span 6"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="cover"
					justifyContent="cover"
				>
					<Box height="300px" width="500px" ml="3px">
						<AddressMap isDashboard={true} />
						{/* <SimpleMap /> */}
					</Box>
				</Box>

				<Box
					gridColumn="span 6"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
				></Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
