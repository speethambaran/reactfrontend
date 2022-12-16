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
import FlexBetween from "../../components/FlexBetween";

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
		<Box m="1.5rem 2.5rem">
			{initialLoading ? (
				<LoadingBox />
			) : initialError ? (
				<MessageBox>{error}</MessageBox>
			) : (
				<div>
					{/* <FlexBetween> */}
					<Header title="DASHBOARD"
						subtitle="Welcome to your dashboard" />
					<FormControl
						p="-1rem"
					>
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

					{/* </FlexBetween> */}

					<Box
						mt="20px"
						display="grid"
						gridTemplateColumns="repeat(12, 1fr)"
						gridAutoRows="160px"
						gap="20px"
					// sx={{
					//   "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
					// }}
					>
						{/* ROW 1 */}

						<Box
							gridColumn="span 2"
							gridRow="span 1"
							display="flex"
							flexDirection="column"
							justifyContent="space-between"
							p="1.25rem 1rem"
							flex="1 1 100%"
							backgroundColor={colors.primary[400]}
							borderRadius="0.55rem">

							{cardLoading ? (
								<Spinner />
							) : error ? (
								<MessageBox />
							) : (
								<div>
									<Typography
										variant="h4"
										fontWeight="bold"
										sx={{ color: colors.grey[100] }}
										justifyContent="flex-start"
									>
										Device Details
									</Typography>

									<Box display="flex" justifyContent="space-between" padding={1}>
										<Typography
											variant="h6"
											fontWeight="bold"
											display="table-column"
											sx={{ color: colors.greenAccent[500] }}
											justifyContent="flex-start"
										>
											<Typography>Device ID</Typography>
											<Typography>Subtype</Typography>
											<Typography>Location</Typography>
											<Typography>LandMark</Typography>

										</Typography>
										<Typography
											variant="h6"
											display="table-column"
											sx={{ color: colors.grey[100] }}
											justifyContent="flex-end"
										>
											<Typography>{currentDevice}</Typography>
											<Typography>ESPATNAOTDR</Typography>
											<Typography>Location</Typography>
											<Typography>LandMark</Typography>
										</Typography>

									</Box>
								</div>
							)}
						</Box>


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
						<Box
							gridColumn="span 8"
							gridRow="span 2"
							//   backgroundColor={colors.primary[400]}
							p="1rem"
							borderRadius="0.55rem"
						>

							{dashboardData && (
								<LineChart isDashboard={true} data={mockDataLine} />
							)}


						</Box>


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
						/>
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
						/>

						{/* ROW 2 */}
						<Box
							gridColumn="span 12"
							gridRow="span 3"
							backgroundColor={colors.primary[400]}
							p="1.5rem"
							borderRadius="0.55rem"
						>
							<FlexBetween>
								<Typography
									variant="h3"
									fontWeight="500"
									display="row"
									color={colors.greenAccent[500]}
									justifyContent="flex-start"
								>
									Device ID : {currentDevice}
								</Typography>
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
							</FlexBetween>



							{loadingTime ? (
								<Spinner />
							) : (

								dashboardData && (
									<LineChart isDashboard={true} data={mockDataLine} />
								)
							)}
						</Box>
						<Box
							gridColumn="span 8"
							gridRow="span 2"
							backgroundColor={colors.primary[400]}
							p="1.5rem"
							borderRadius="0.55rem"
						>
							<AddressMap isDashboard={true} />
						</Box>
					</Box>
				</div>
			)}
		</Box>
	);
};
export default Dashboard;
