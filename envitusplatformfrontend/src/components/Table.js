import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listDevices } from "../actions/deviceActions";
import { BASE_URL } from "../constants/AppliationConstants";
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

function Table({role}) {
  const dispatch = useDispatch();
  const deviceList = useSelector((state) => state.deviceList);
  const { loading, error, device } = deviceList;
  
  useEffect(() => {
    dispatch(listDevices());
  }, [dispatch]);

  return (
    <div className="mt-5">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger" style={{fontWeight:500}}>Oops something went wrong</MessageBox>
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
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{device.deviceId}</td>
                  {/* < (15 * 60 * 1000) ? 'ASWINS' : 'NOT LIVE' */}
                  <td>
                    {console.log('LAST RECEIVD TIME : ',device.lastDataReceiveTime)}
                    <i
                      className={`fa fa-dot-circle-o ${((device.lastDataReceiveTime) - (new Date().valueOf() )) < 15 * 60 * 1000 ? 'live' : 'not-live'}`}
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
  );
}

export default Table;
