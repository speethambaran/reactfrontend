import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrganization } from "../actions/organizationActions";
import { listUsers } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import axios from "axios";
import { BASE_URL } from "../constants/AppliationConstants";
import Organization from "../components/Organization";
import { listDevices } from "../actions/deviceActions";

function OrganisationScreen() {
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [isDefault,setIsDefault] = useState('no')
  const [user,setUser] = useState('')
  const [currentDevice,setCurrentDevice] = useState('')

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const organizationList = useSelector((state) => state.organizationList);
  const { loading, error, users } = userList;
  const { errormessage, organizations } = organizationList;
  const deviceList = useSelector((state) => state.deviceList);
  const { device } = deviceList;

  const addOrganisation = async (e) => {
    e.preventDefault();
    let organizationData = {name,description,default: isDefault,users: user,devices : currentDevice}

    await axios.post(`${BASE_URL}/addorganization/`,organizationData).then((response) => {
      if (response.data.errorCode === 0) {
        alert("Organisation successfully added");
        window.location.reload();
      } else {
        alert("Error");
      }
    });
  };

  useEffect(() => {
    dispatch(listUsers());
    dispatch(listOrganization());
    dispatch(listDevices());
  }, [dispatch]);
  return (
    <div className="orgScreen">
      {loading ? (
        <LoadingBox />
      ) : errormessage ? (
        <MessageBox variant="danger">Oops something went wrong</MessageBox>
      ) : (
        <div>
          <div className="container-fluid mt-5">
            <h2>Organization List</h2>
            <i
              className="ml-auto fa fa-plus-circle"
              data-toggle="modal"
              data-target="#exampleModalCenterAddOrganisation"
              style={{ float: "right",color: "#e4e9fc" }}
            ></i>
            <div className="row">
              {organizations &&
                organizations.map((org) => (
                  <div className="col-md-4 mt-4">
                    <Organization org = {org} />
                  </div>
                ))}
            </div>
          </div>
          <div
            className="modal fade "
            id="exampleModalCenterAddOrganisation"
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
                    Add Organisation
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
                    <form onSubmit={addOrganisation}>
                      <div className="row">
                        <div className="col-md-6 mt-2">
                          <p>Name</p>
                          <input
                            type="text"
                            placeholder="Enter name of organization"
                            className="form-control"
                            onChange={(e)=>setName(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6 mt-2">
                          <p>Users</p>
                          <select className="form-control" onChange={(e)=>setUser(e.target.value)}>
                            {users ? (
                              users.map((user) => (
                                <option>{user.username}</option>
                              ))
                            ) : (
                              <option>No user found</option>
                            )}
                          </select>
                        </div>

                        <div className="col-md-6 mt-2">
                          <p>Description</p>
                          <input
                            type="text"
                            placeholder="description"
                            className="form-control"
                            onChange={(e)=>setDescription(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6 mt-2">
                          <p>Devices</p>
                          <select className="form-control" onChange={(e)=>setCurrentDevice(e.target.value)}>
                          {device ? (
                              device.map((device) => (
                                <option>{device.deviceId}</option>
                              ))
                            ) : (
                              <option>No user found</option>
                            )}
                          </select>
                        </div>

                        <div className="col-md-6 mt-2">
                          <p>default</p>
                          <select className="form-control" onChange={(e)=>setIsDefault(e.target.value)}>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit" className="btn btn-success">
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
      )}
    </div>
  );
}

export default OrganisationScreen;
