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
import {
	listLiveData,
	listSensorParameters,
} from "../../actions/sensorActions";
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
	const [sensorData, setSensorData] = useState([]);

	const [selectedParm, setSeletedParam] = useState("temperature");

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

	const paramList = useSelector((state) => state.sensorParameterList);
	const { parameters } = paramList;

	const liveData = useSelector((state) => state.livedata);
	const { livedata } = liveData;

	const [rain, setRain] = useState(0);

	useEffect(() => {
		dispatch(listDevices());
		dispatch(getDashboardData(currentDevice));
		dispatch(dashboardDataTest(currentDevice));
		dispatch(sampleLiveDataGraph(currentDevice, "temperature"));
		dispatch(listLiveData());
		dispatch(listSensorParameters());
		const fetchData = async () => {
			const data = await axios.get(
				`${BASE_URL}/getdevice?deviceId=${currentDevice}`
			);

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
		dispatch(sampleLiveDataGraph(currentDevice, "temperature"));
	};

	const changeParamName = (event) => {
		setSeletedParam(event.target.value);
		dispatch(sampleLiveDataGraph(currentDevice, event.target.value));
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
							<h2 style={{ left: "-10px", position: "relative" }}>Device</h2>
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
							justifyContent="center"
						>
							{cardLoading ? (
								<Spinner />
							) : cardError ? (
								<MessageBox />
							) : (
								<div>
									<h2>Device Details</h2>
									<br />
									<div className="row">
										<div className="col-md-6">Device ID : </div>
										<div className="col-md-6">{currentDevice}</div>
									</div>
								</div>
							)}
						</Box>

						<Box
							gridColumn="span 3"
							backgroundColor={colors.primary[400]}
							display="flex"
							alignItems="center"
							justifyContent="left"
						>
							{/* <StatBox
								title="Alert"
								subtitle="alert"
								progress="0.25"
								increase="0"
								icon={
									<AddAlertOutlinedIcon
										sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
									/>
								}
							/> */}
							<div className="container">
								<h2>Alerts</h2>
								<div className="count">0</div>
							</div>
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
									title="Rain"
									subtitle="Rain"
									progress={
										selectedDeviceDetails &&
										selectedDeviceDetails.data &&
										selectedDeviceDetails.data.statPerDeviceId[0].stat
											.dailyStat[1].statParams.latestValue / 100
									}
									increase={
										selectedDeviceDetails &&
										selectedDeviceDetails.data &&
										selectedDeviceDetails.data.statPerDeviceId[0].stat
											.dailyStat[1].statParams.latestValue
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
									<select onChange={changeParamName} className="form-control">
										{/* {parameters &&
											parameters.map((parameter) => (
												<option value={parameter.displayName}>
													{parameter.displayName}
												</option>
											))} */}
										<option value="temperature">Temperature</option>
										<option value="pressure">Pressure</option>
										<option value="CO">CO</option>
										<option value="CO2">CO2</option>
										<option value="NO2">NO2</option>
										<option value="O3">O3</option>
										<option value="PM2p5">PM2p5</option>
										<option value="PM10">PM10</option>
										<option value="SO2">SO2</option>
										<option value="TSP">TSP</option>
										<option value="humidity">Humidity</option>
										<option value="noise">Noise</option>
										<option value="rain">Rain</option>
										<option value="windDirection">Wind Direction</option>
										<option value="windSpeedAvg">Wind SpeedAvg</option>
									</select>
									<IconButton>
										<DownloadOutlinedIcon
											sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
										/>
									</IconButton>
								</Box>
							</Box>

							<Box height="250px" ml="-20px">
								{sample_loading ? (
									<Spinner />
								) : sampleDashData ? (
									<LineChart isDashboard={true} data={sampleDashData} />
								) : (
									<h1>NO DATA</h1>
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
