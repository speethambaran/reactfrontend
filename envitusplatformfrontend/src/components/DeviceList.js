import React from 'react'

function DeviceList() {
  return (
    <div className="container-fluid mt-5" style={{ backgroundColor: "white" }}>
      <h1>Device List</h1>
      <table class="table mt-5">
        <thead class="thead-light">
          <tr>
            <th scope="col">device ID</th>
            <th scope="col">Status</th>
            <th scope="col">Type</th>
            <th scope="col">Family</th>
            <th scope="col">City</th>
            <th scope="col">LandMark</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">device_1</th>
            <td>
              <i
                className="fa fa-dot-circle-o"
                style={{
                  color: "green",
                  backgroundColor: "#40dd40",
                  borderRadius: "50%",
                }}
              ></i>
            </td>
            <td>Air</td>
            <td>ESPATNAOTDR</td>
            <td>Kochi</td>
            <td>Central</td>
            <td>
              <i className="fa fa-pencil m-1"></i>
              <i className="fa fa-trash m-1"></i>
              <i className="fa fa-eye m-1"></i>
            </td>
          </tr>
          <tr>
            <th scope="row">device_1</th>
            <td>
              <i
                className="fa fa-dot-circle-o"
                style={{
                  color: "green",
                  backgroundColor: "#40dd40",
                  borderRadius: "50%",
                }}
              ></i>
            </td>
            <td>Air</td>
            <td>ESPATNAOTDR</td>
            <td>Kochi</td>
            <td>Central</td>
            <td>
              <i className="fa fa-pencil m-1"></i>
              <i className="fa fa-trash m-1"></i>
              <i className="fa fa-eye m-1"></i>
            </td>
          </tr>
          <tr>
            <th scope="row">device_1</th>
            <td>
              <i
                className="fa fa-dot-circle-o"
                style={{
                  color: "green",
                  backgroundColor: "#40dd40",
                  borderRadius: "50%",
                }}
              ></i>
            </td>
            <td>Air</td>
            <td>ESPATNAOTDR</td>
            <td>Kochi</td>
            <td>Central</td>
            <td>
              <i className="fa fa-pencil m-1"></i>
              <i className="fa fa-trash m-1"></i>
              <i className="fa fa-eye m-1"></i>
            </td>
          </tr>
          <tr>
            <th scope="row">device_1</th>
            <td>
              <i
                className="fa fa-dot-circle-o"
                style={{
                  color: "darkgrey",
                  backgroundColor: "grey",
                  borderRadius: "50%",
                }}
              ></i>
            </td>
            <td>Air</td>
            <td>ESPATNAOTDR</td>
            <td>Kochi</td>
            <td>Central</td>
            <td>
              <i className="fa fa-pencil m-1"></i>
              <i className="fa fa-trash m-1"></i>
              <i className="fa fa-eye m-1"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DeviceList