import { Box, useTheme } from "@mui/material"
import { tokens } from "../../theme";
import Header from "../../components/Header";
// import LineChart from "../components/Linechart";
import FloatingActionButtonZoom from "../../components/LiveData/LiveScreen"
import EnhancedTable from "../../components/LiveData/LivedataTable"
import { useDispatch, useSelector } from "react-redux";
import { listDevices } from "../../actions/deviceActions";
import { useEffect, useState } from "react";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";


const LiveData = ({ role = "Operator" }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dispatch = useDispatch();
    const deviceList = useSelector((state) => state.deviceList);
    const { loading, error, device } = deviceList;
    const [bgColor, setBgcolor] = useState('whitesmoke')
    const [currentDevice, setCurrentDevice] = useState(device && device[0])

    console.log('CURRENT DEVICE------------',currentDevice)

    const selectedDevice = async (id) => {
        setCurrentDevice(id)
        setBgcolor("green")
    }

    useEffect(() => {
        dispatch(listDevices());
    }, [dispatch]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box m="30px">
            <Box display="flex" justifyContent="space-between" alignItems="center" >
                <Header title="Live Data" subtitle="Welcome" />
            </Box>
            <Box
                display="grid"
                gridTemplateColumns="repeat(12,1fr)"
                gridAutoRows="178px"
                gap="19px"
            >
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
                        <Box height="250px" ml="-2em" width="2000px" mt="-1em" marginRight="-2em">
                            {/* <EnhancedTable /> */}
                            <div>
                                {loading ? (
                                    <LoadingBox />
                                ) : error ? (
                                    <MessageBox variant="danger" style={{ fontWeight: 500 }}>Oops something went wrong</MessageBox>
                                ) : (
                                    <div className="table-responsive mt-2 p-2">
                                        <h1 className="title">Device List</h1>
                                        <table className="table mt-2" style={{ backgroundColor: "white" }}>
                                            <thead className="thead-light">
                                                <tr>
                                                    <th scope="col">SI</th>
                                                    <th scope="col">Device ID</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">City</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">LandMark</th>
                                                    {role == "Super Admin" && (<th scope="col">Actions</th>)}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {device &&
                                                    device.map((device, index) => (
                                                        <tr onClick={(e) => selectedDevice(device.deviceId)}>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{device.deviceId}</td>
                                                            {/* < (15 * 60 * 1000) ? 'ASWINS' : 'NOT LIVE' */}
                                                            <td>
                                                                <i
                                                                    className={`fa fa-dot-circle-o ${((device.lastDataReceiveTime) - (new Date().valueOf())) < 15 * 60 * 1000 ? 'live' : 'not-live'}`}
                                                                    style={{
                                                                        borderRadius: "50%",
                                                                    }}
                                                                ></i>
                                                            </td>
                                                            <td>{device.location.city}</td>
                                                            <td>{device.subType}</td>
                                                            <td style={{ height: "4px" }} className="">
                                                                {device.location.landMark}
                                                            </td>
                                                            {role == "Super Admin" && (
                                                                <td>
                                                                    <i className="fa fa-pencil m-1"></i>
                                                                    <i
                                                                        className="fa fa-trash m-1"
                                                                        onClick={(e) => deleteUser(user.id)}
                                                                    ></i>
                                                                    <i className="fa fa-eye m-1"></i>
                                                                </td>
                                                            )}
                                                        </tr>
                                                    ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </Box>
                    </Box>
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
                        <Box height="250px" ml="-2em" width="2000px" mt="-1em" marginRight="-2em">
                            <FloatingActionButtonZoom deviceId={currentDevice} />
                        </Box>
                    </Box>
                </Box>
            </Box >
        </Box >
    )
}

export default LiveData;


