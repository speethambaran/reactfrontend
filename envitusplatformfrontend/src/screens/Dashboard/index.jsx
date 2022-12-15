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
	dashboardDataTest,
	getDashboardData,
	getDevice,
	getDeviceDetails,
	listDevices,
	sampleLiveDataGraph,
} from "../../actions/deviceActions";
import { listLiveData } from "../../actions/sensorActions";
import { mockDataLine } from "../../data/mockData";
import PieChart from "../../components/PieChart";
import VerticalChart from "../../components/VerticalChart";
import SimpleMap from "../../components/SimpleMap";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { BASE_URL } from "../../constants/AppliationConstants";
import Spinner from "../../components/Spinner";

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

	const [initialLoading, setInitialLoading] = useState(false);
	const [initialError, setInitalError] = useState(false);

	const [age, setAge] = useState("");
	const [dashData, setDashData] = useState({});

	const dispatch = useDispatch();
	const deviceList = useSelector((state) => state.deviceList);
	const { loading, error, device } = deviceList;

	const [cardLoading, setCardLoading] = useState(false);
	const [cardError, setCardError] = useState(false);

	const [currentDevice, setCurrentDevice] = useState("patnaenvtest");
	const [selectedDeviceDetails, setSelectedDeviceDetails] = useState([]);
	const [sensorParam, setSensorParam] = useState("temperature");

	const liveDataforDashboard = useSelector((state) => state.dashboardData);

	const { loadingTime, err, dashboardData } = liveDataforDashboard;

	const liveDataforDashboardTEST = useSelector((state) => state.dashboardData);

	const { loadingTimetest, liveDataforDashboardtest } = liveDataforDashboard;

	const sampleDashLiveData = useSelector((state) => state.sampleDashData);
	const { sample_loading, sampleDashData } = sampleDashLiveData;

	const liveData = useSelector((state) => state.livedata);
	const { livedata } = liveData;

	const [rain, setRain] = useState(0);

	useEffect(() => {
		dispatch(listDevices());
		dispatch(getDashboardData(currentDevice));
		dispatch(dashboardDataTest(currentDevice));
		dispatch(sampleLiveDataGraph(currentDevice));
		dispatch(listLiveData());
		const fetchData = async () => {
			// const data = await axios.get(
			// 	`${BASE_URL}/getdevice?deviceId=${currentDevice}`
			// );

			try {
				setInitialLoading(true);
				const data = await axios.get(
					"http://192.46.210.81:7002/device/sensor/stats?deviceIds=patnaenvtest&offset=0&timeStart=1670956200000&timeEnd=1671042599999&params=temperature,rawAQI,rain&limit=4&timeFrame=daily"
				);

				setInitialLoading(false);
				setSelectedDeviceDetails(data.data);
			} catch (error) {
				setInitalError(error.message);
			}
		};
		fetchData();
	}, [dispatch]);

	const handleChange = (event) => {
		setCurrentDevice(event.target.value);
		const fetchData = async (device) => {
			// const data = await axios.get(`${BASE_URL}/getdevice?deviceId=${device}`);
			setCardLoading(true);
			try {
				const statistics = await axios.get(
					`${BASE_URL}/device/sensor/stats?deviceIds=${device}&offset=0&timeStart=1670956200000&timeEnd=1671042599999&params=temperature,rawAQI,rain&limit=4&timeFrame=daily`
				);
				setCardLoading(false);
				setSelectedDeviceDetails(statistics.data);
			} catch (error) {
				setCardError(error.message);
			}
		};
		fetchData(event.target.value);
		// selectedDevice(currentDevice);
		getDashboardData(currentDevice);
	};

	return (
		<Box m="30px">
			{initialLoading ? (
				<LoadingBox />
			) : initialError ? (
				<MessageBox>{error}</MessageBox>
			) : (
				<div>
					<Box
						display="grid"
						gridTemplateColumns="repeat(12,1fr)"
						gridAutoRows="155px"
						gap="19px"
					>
						<Header title="DASHBOARD" subtitle="Welcome" />
						<Box
							display="flex"
							justifyContent="space-between"
							alignItems="center"
						>
							<h2>Device</h2>
							<FormControl fullWidth>
								<select
									onChange={handleChange}
									className="form-control"
									style={{ width: "200px" }}
								>
									{device &&
										device.map((dev, index) => (
											<option value={dev.deviceId}>{dev.deviceId}</option>
										))}
								</select>
							</FormControl>
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
							<Box width="200" m="0 20px">
								<Box display="flex" justifyContent="flex-start">
									<Box>
										{/* <DevicesOutlinedIcon sx={{ color: colors.greenAccent[600], fontSize: "26px", mt: 0 }} /> */}
										<Typography
											variant="h5"
											fontWeight="bold"
											sx={{ color: colors.grey[100] }}
											className="text-center"
										>
											{/* Device */}
										</Typography>
									</Box>
								</Box>

								<Box sx={{ flexGrow: 1 }}>
									{cardLoading ? (
										<Spinner />
									) : error ? (
										<MessageBox />
									) : (
										<div>
											<h2
												className="text-center"
												style={{
													alignItems: "center",
													justifyContent: "center",
												}}
											>
												Device Details
											</h2>
											<div className="row">
												<div className="col-md-6">
													<h6>Device ID </h6>
												</div>
												<div className="col-md-6">
													<h6>{currentDevice}</h6>
												</div>
											</div>
											<div className="row">
												<div className="col-md-6">
													<h6>Subtype</h6>
												</div>
												<div className="col-md-6">
													{/* {selectedDeviceDetails.subType} */}
													<h6>ESPATNAOTDR</h6>
												</div>
											</div>
											<div className="row">
												<div className="col-md-6">
													<h6>Location</h6>
												</div>
												<div className="col-md-6">
													<h6>location</h6>
												</div>
											</div>
											<div className="row">
												<div className="col-md-6">
													<h6>LandMark</h6>
												</div>
												<div className="col-md-6">
													<h6>landmark</h6>
												</div>
											</div>
										</div>
									)}
								</Box>
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
							{cardLoading ? (
								<Spinner />
							) : cardError ? (
								<MessageBox />
							) : (
								<StatBox
									title="Daily Rain"
									subtitle="rain"
									progress={
										selectedDeviceDetails &&
										selectedDeviceDetails.data &&
										selectedDeviceDetails.data.statPerDeviceId[0].stat
											.dailyStat[0].statParams.latestValue / 100
									}
									increase={
										selectedDeviceDetails &&
										selectedDeviceDetails.data &&
										selectedDeviceDetails.data.statPerDeviceId[0].stat
											.dailyStat[0].statParams.latestValue
									}
									icon={
										<ThunderstormOutlinedIcon
											sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
										/>
									}
								></StatBox>
							)}
						</Box>

						<Box
							gridColumn="span 3"
							backgroundColor={colors.primary[400]}
							display="flex"
							alignItems="center"
							justifyContent="center"
						>
							{cardLoading ? (
								<Spinner />
							) : cardError ? (
								<MessageBox />
							) : (
								<StatBox
									title="Daily AQI"
									subtitle="AQI"
									progress={
										selectedDeviceDetails &&
										selectedDeviceDetails.data &&
										selectedDeviceDetails.data.statPerDeviceId[0].stat
											.dailyStat[2].statParams.latestValue / 500
									}
									increase={
										selectedDeviceDetails &&
										selectedDeviceDetails.data &&
										selectedDeviceDetails.data.statPerDeviceId[0].stat
											.dailyStat[2].statParams.latestValue
									}
									icon={
										<ThunderstormOutlinedIcon
											sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
										/>
									}
								></StatBox>
							)}
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
										Device ID : {currentDevice}
									</Typography>
								</Box>

								<Box>
									<select>
										<option>temperature</option>
										<option>pressure</option>
									</select>
									<IconButton>
										<DownloadOutlinedIcon
											sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
										/>
									</IconButton>
								</Box>
							</Box>

							<Box height="250px" ml="-20px">
								{loadingTime ? (
									<Spinner />
								) : (
									dashboardData && (
										<LineChart isDashboard={true} data={dashboardData} />
									)
								)}
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
											sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
										/>
									</IconButton>
								</Box>
							</Box>

							<Box height="250px" mt="20px">
								{/* <BarChart isDashboard={true} /> */}
								{dashboardData && (
									<LineChart isDashboard={true} data={mockDataLine} />
								)}
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
				</div>
			)}
		</Box>
	);
};

export default Dashboard;
