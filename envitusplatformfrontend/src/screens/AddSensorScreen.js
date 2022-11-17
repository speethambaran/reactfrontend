import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function AddSensorScreen() {
  return (
    <div className="container sensorTab mt-5">
      <h2>Sensor List</h2>
      <Tabs style={{ height: "400px", top: "10px", position: "relative" }}>
        <TabList style={{ backgroundColor: "#cee1e1" }}>
          <Tab>
            <p style={{ color: "#222" }}>Sensor Parameters</p>
          </Tab>
          <Tab>
            <p style={{ color: "#222" }}>Sensor Type</p>
          </Tab>
        </TabList>

        <TabPanel style={{ backgroundColor: "white" }}>
          <div className="panel-content table-wrapper-scroll-y my-custom-scrollbar">
            <table className="table mt-5 table-fixed" style={{ backgroundColor: "white" }}>
              <thead className="thead-light" >
                <tr >
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
        </TabPanel>
        <TabPanel style={{ backgroundColor: "white" }}>
          <div className="panel-content">
            <div class="table-wrapper-scroll-y my-custom-scrollbar">
              <table class="table table-bordered table-striped mb-0">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default AddSensorScreen