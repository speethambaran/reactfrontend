import React from 'react'
import Map from './Map';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { data } from '../data';

function Dashboard() {
  return (
    <div className="contaiainer-fluid p-2">
      <div className="row">
        <div className="col-md-3">
          <div
            className="cardBx p-4"
            style={{
              color: "#ffff",
              backgroundColor: "#74ffa0",
              boxShadow:
                "0 4px 8px 0 rgba(41, 248, 220, 0.2), 0 6px 20px 0 rgba(26, 243, 142, 0.19)",
            }}
          >
            <h2 className="text-center">Device</h2>
            <div className="row">
              <div className="col-md-6">DeviceID</div>
              <div className="col-md-6">device_1</div>
            </div>
            <div className="row">
              <div className="col-md-6">RT Status</div>
              <div className="col-md-6">sucess</div>
            </div>
            <div className="row">
              <div className="col-md-6">NT Status</div>
              <div className="col-md-6">false</div>
            </div>
            <div className="row">
              <div className="col-md-6">City</div>
              <div className="col-md-6">Ernakulam</div>
            </div>
            <div className="row">
              <div className="col-md-6">Zone</div>
              <div className="col-md-6">Central</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="cardBx p-4"
            style={{ color: "#ffff", backgroundColor: "rgb(78 209 120)" }}
          >
            <h2>Alert</h2>
            <div className="text-center">
              <h1>0</h1>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="cardBx p-4"
            style={{ color: "#ffff", backgroundColor: "rgb(82 221 182)" }}
          >
            <h2>Daily Rain</h2>
            <div className="text-center">
              <h1>0</h1>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="cardBx p-4"
            style={{ color: "#ffff", backgroundColor: "rgb(47 178 199)" }}
          >
            <h2>Daily AQI</h2>
            <div className="text-center">
              <h1>0</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row mt-4">
          <div className="col-md-6">
            <Map />
            {/* <GoogleMap /> */}
          </div>
          <div className="col-md-6">
            {/* <Doughnut data = {data} /> */}
            {/* <BarGraph /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard