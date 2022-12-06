import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { listLiveData } from '../../actions/sensorActions';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import LineChart from '../Linechart';
// import LiveChart from '../LiveChart';
import { CSVLink, CSVDownload } from "react-csv";
import moment from 'moment';

const columns = [
  { id: 'deviceId', label: 'Device Id', minWidth: 170 },
  { id: 'logicalDeviceId', label: 'LogicalDeviceId', minWidth: 100 },
  { id: 'temperature', label: 'Temparature', minWidth: 100 },
  { id: 'pressure', label: 'Pressure', minWidth: 100 },
  { id: 'humidity', label: 'Humidity', minWidth: 100 },
  { id: 'PM10', label: 'PM10', minWidth: 100 },
  { id: 'PM2p5', label: 'PM2p5', minWidth: 100 },
  { id: 'CO', label: 'CO', minWidth: 100 },
  { id: 'CO2', label: 'CO2', minWidth: 100 },
  { id: 'NO2', label: 'NO2', minWidth: 100 },
  { id: 'SO2', label: 'SO2', minWidth: 100 },
  { id: 'O3', label: 'O3', minWidth: 100 },
  { id: 'noise', label: 'Noise', minWidth: 100 },
  { id: 'rain', label: 'Rain', minWidth: 100 },
  { id: 'TSP', label: 'TSP', minWidth: 100 },
  { id: 'receivedTime', label: 'Received Time', minWidth: 100 },
  { id: 'rawAQI', label: 'rawAQI', minWidth: 100 },
];

function formatData(data) {
  if (data) {
    let responseObj = {}
    let responseArr = []
    for (let i = 0; i < data.length; i++) {
      let deviceDetails = {
        deviceId: data[i].deviceId,
        logicalDeviceId: data[i].logicalDeviceId
      }
      let deviceData = data[i].data

      let dataObj = data[i].data


      responseObj = {
        ...deviceDetails,
        ...dataObj
      }
      
      let epoch = responseObj.receivedTime
      var d = new Date(epoch* 1000).toLocaleString('en-GB')
      responseObj.receivedTime = d

      responseArr.push(responseObj)

    }
    return responseArr
  }
}

function LivedataTable({deviceId}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const dispatch = useDispatch();
  const liveData = useSelector((state) => state.livedata);
  const { loading, error, livedata } = liveData;

  let dataRow = formatData(livedata)

  dataRow = dataRow && dataRow.sort(
    (p1, p2) => (p1.receivedTime < p2.receivedTime) ? -1 : (p1.receivedTime > p2.receivedTime) ? 1 : 0);
  
  console.log("TAW DATA ------",dataRow ? dataRow :'no data')
  

  React.useEffect(() => {
    dispatch(listLiveData(deviceId));
  }, [dispatch, deviceId]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className='container-fluid'>
      {loading ? (<LoadingBox />) : error ? (<MessageBox>{error}</MessageBox>) : (
        <div className='container'>
          <CSVLink className='btn btn-success ml-auto' style={{float:"right",top:"-10px",position:"relative"}} data={dataRow ? dataRow :''}>Download Data</CSVLink>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {dataRow ? 
                  dataRow.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    }) : <LoadingBox />}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={dataRow ? dataRow.length : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        
        </div>
        
      )}
    </div>
  )
}

export default LivedataTable



