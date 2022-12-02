import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '../components/Table';
import LivedataTable from '../components/LivedataTable';
import DeviceList from '../components/DeviceList';
import LiveChart from '../components/LiveChart';
import LineChart from '../components/Linechart';
import { mockDataLine } from '../data/mockData';
import { useDispatch, useSelector } from 'react-redux';
import { listDevices } from '../actions/deviceActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import LivedataGraph from '../components/LivedataGraph';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ role }) {
  const [value, setValue] = React.useState(0);

  const dispatch = useDispatch();
  const deviceList = useSelector((state) => state.deviceList);
  const { loading, error, device } = deviceList;
  const [bgColor, setBgcolor] = React.useState('whitesmoke')
  const [currentDevice,setCurrentDevice] = React.useState(device && device[0])

  const selectedDevice = async (id) => {
    setCurrentDevice(id)
    setBgcolor("green")
  }

  React.useEffect(() => {
    dispatch(listDevices());
  }, [dispatch]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* <Table /> */}
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
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab className='text-white' label="Raw Data" {...a11yProps(0)} />
          <Tab className='text-white' label="Graph" {...a11yProps(1)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h2>Raw Data</h2>
        <LivedataTable deviceId = {currentDevice} /> 
      </TabPanel>
      <TabPanel value={value} index={1}>
        Graph
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
          <LivedataGraph />
          </div>
          <div className='col-md-2'></div>
        
        </div>
      </TabPanel>
    </Box>
  );
}