import axios from "axios";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function AddSensorScreen() {
  const [paramName, setParamName] = useState(""); //
  const [displayName, setDisplayName] = useState(""); //
  const [displayNameHtml, setdisplayNameHtml] = useState(""); //
  const [unit, setUnit] = useState(""); //
  const [unitDisplayHtml, setunitDisplayHtml] = useState(""); //
  const [isDisplayEnabled, setisDisplayEnabled] = useState(true); //
  const [displayImage, setdisplayImage] = useState("");
  const [isPrimary, setisPrimary] = useState(false);
  const [needsLiveData, setneedsLiveData] = useState(true);
  const [valuePrecision, setvaluePrecision] = useState(1); //
  const [isCsvParam, setisCsvParam] = useState(true);
  const [isFilterable, setisFilterable] = useState(true);
  const [signageDisplayLive, setsignageDisplayLive] = useState(true);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  let sensorDataModel = {
    paramName,
    displayName,
    displayNameHtml,
    unit,
    unitDisplayHtml,
    isDisplayEnabled,
    displayImage,
    isPrimary,
    needsLiveData,
    valuePrecision,
    isCsvParam,
    isFilterable,
    signageDisplayLive,
    maxRanges: {
      min: min,
      max: max,
    },
  };

  const addSensorParameter = async (e) => {
    e.preventDefault();
    let data = await axios
      .post(`/sensor/add-sensor`, sensorDataModel)
      .then((result) => {
        if (result.data.errorCode == 1) {
          alert("Sensor successfully added");
          window.location.reload();
        } else if (result.data.errorCode == -1) {
          alert("Sensor already existing with this name");
        }
      });
  };

  return (
    <div className="container-fluid sensorTab mt-5">
      <h2>Sensor List</h2>
      <Tabs style={{ height: "400px", top: "10px", position: "relative" }}>
        <TabList style={{ backgroundColor: "rgb(245 245 245)" }}>
          <Tab>
            <p style={{ color: "darkcyan" }}>Sensor Parameters</p>
          </Tab>
          <Tab>
            <p style={{ color: "darkcyan" }}>Sensor Type</p>
          </Tab>
        </TabList>

        <TabPanel style={{ backgroundColor: "white" }}>
          <div>
            <i
              className="ml-auto fa fa-plus-circle"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              style={{ float: "right" }}
            ></i>
          </div>
          <div className="panel-content table-wrapper-scroll-y my-custom-scrollbar">
            <table
              className="table table-fixed"
              style={{ backgroundColor: "white" }}
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
        </TabPanel>
        <TabPanel style={{ backgroundColor: "white" }}>
          <div className="panel-content">
            <div className="panel-content table-wrapper-scroll-y my-custom-scrollbar">
              <table
                className="table table-fixed"
                style={{ backgroundColor: "white" }}
              >
                <thead className="thead-light">
                  <tr>
                    <th scope="col">SENSOR TYPE</th>
                    <th scope="col">DESCRIPTION</th>
                    <th scope="col">ACTION</th>
                  </tr>
                </thead>
                <tbody className="orgRow">
                  <tr>
                    <td>ESPATNAOTDR</td>
                    <td>test sensor type</td>

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
        </TabPanel>
      </Tabs>
      <div
        className="modal fade "
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-xl"
          role="document"
        >
          <div className="modal-content">
            <div className="">
              <h5
                className="modal-title text-center"
                id="exampleModalCenterTitle"
              >
                Add Sensor Parameter
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                {/* <span aria-hidden="true">&times;</span> */}
              </button>
            </div>
            <div className="modal-body">
              <div>
                <form onSubmit={addSensorParameter}>
                  <div className="row">
                    <div className="col-md-6 mt-2">
                      <p>Parameter Name</p>
                      <input
                        type="text"
                        placeholder="parameter name"
                        className="form-control"
                        onChange={(e) => setParamName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 mt-2">
                      <p>Unit</p>
                      <input
                        type="text"
                        placeholder="unit.."
                        className="form-control"
                        onChange={(e) => setUnit(e.target.value)}
                      />
                    </div>

                    <div className="col-md-6 mt-2">
                      <p>Display Name</p>
                      <input
                        type="text"
                        placeholder="display name"
                        className="form-control"
                        onChange={(e) => setDisplayName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 mt-2">
                      <p>Unit Display Html</p>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                        onChange={(e) => setunitDisplayHtml(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 mt-2">
                      <p>Display Name Html</p>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                        onChange={(e) => setdisplayNameHtml(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 mt-2">
                      <p>Display Enabled</p>
                      <select
                        className="form-control"
                        onChange={(e) => setisDisplayEnabled(e.target.value)}
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div className="col-md-6 mt-2">
                      <p>Value Precision</p>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                        onChange={(e) => setvaluePrecision(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 mt-2">
                      <p>Min Range</p>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                        onChange={(e) => setMin(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 mt-2">
                      <p>Filterable</p>
                      <select
                        className="form-control"
                        onChange={(e) => setisFilterable(e.target.value)}
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div className="col-md-6 mt-2">
                      <p>Max Range</p>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                        onChange={(e) => setMax(e.target.value)}
                      />
                    </div>
                  </div>
                  <div style={{ float: "right" }}>
                    <button
                      type="button"
                      className="btn btn-secondary m-2"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-success m-2">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddSensorScreen;