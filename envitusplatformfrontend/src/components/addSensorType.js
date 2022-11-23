import React from 'react'

function addSensorType() {
  return (
    <div>
      <div className="panel-content table-wrapper-scroll-y my-custom-scrollbar">
        <table
          className="table table-fixed"
          style={{ backgroundColor: "red" }}
        >
          <thead className="thead-light">
            <tr>
              <th scope="col">DISPLAY NAME</th>
              <th scope="col">PARAMETER</th>
              <th scope="col">MIN</th>
              <th scope="col">MAX</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody className="orgRow">
            <tr>
              <td>Temperature</td>
              <td>temperature</td>
              <td>0</td>
              <td>100</td>
              <td>
                <i className="fa fa-pencil m-1"></i>
                <i className="fa fa-trash m-1"></i>
                <i className="fa fa-eye m-1"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default addSensorType