import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/AppliationConstants";

function Table() {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`${BASE_URL}/getdevice`);
      setDevices(data.data.message);
      console.log("DATA===========", data.data.message);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="table-responsive mt-2 p-2">
        <h1>Device List</h1>
        <table className="table mt-2" style={{ backgroundColor: "white" }}>
          <thead className="thead-light">
            <tr>
              <th scope="col">SI</th>
              <th scope="col">Device ID</th>
              <th scope="col">Status</th>
              <th scope="col">City</th>
              <th scope="col">Type</th>
              <th scope="col">LandMark</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {devices &&
              devices.map((device, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{device.deviceId}</td>
                  <td>
                    <i
                      className="fa fa-dot-circle-o"
                      style={{
                        color: "grey",
                        backgroundColor: "grey",
                        borderRadius: "50%",
                      }}
                    ></i>
                  </td>
                  <td>{device.location.city}</td>
                  <td>{device.subType}</td>
                  <td style={{ height: "4px" }} className="">
                    {device.location.landMark}
                  </td>
                  <td>
                    <i className="fa fa-pencil m-1"></i>
                    <i
                      className="fa fa-trash m-1"
                      onClick={(e) => deleteUser(user.id)}
                    ></i>
                    <i className="fa fa-eye m-1"></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
