import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrganization } from "../actions/organizationActions";
import { listUsers } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import axios from "axios";
import { BASE_URL } from "../constants/AppliationConstants";

function OrganisationScreen() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const organizationList = useSelector((state) => state.organizationList);
  const { loading, error, users } = userList;
  const { errormessage, organizations } = organizationList;
  console.log("Error : ", error);

  const addOrganisation = async (e) => {
    e.preventDefault();
    await axios.post(`/addorganization/`).then((response) => {
      if (response.data.errorCode === 0) {
        alert("Organisation successfully added");
        window.location.reload();
      } else {
        alert("Error");
      }
    });
  };

  const deleteOrganization = async (name) => {
    await axios.post(`${BASE_URL}/deleteorganization`).then((response) => {
      if (response.data.errorCode == 0) {
        alert("Organization deleted");
        window.location.reload();
      }
    });
  };

  useEffect(() => {
    dispatch(listUsers());
    dispatch(listOrganization());
  }, [dispatch]);
  return (
    <div className="orgScreen">
      {loading ? (
        <LoadingBox />
      ) : errormessage ? (
        <MessageBox variant="danger">Oops something went wrong</MessageBox>
      ) : (
        <div>
          <div className="container-fluid mt-2">
            <h2>Organization List</h2>
            <i
              className="ml-auto fa fa-plus-circle"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              style={{ float: "right" }}
            ></i>
            <div className="row">
              {console.log(organizations)}
              {organizations &&
                organizations.map((org) => (
                  <div className="col-md-4">
                    <div className="cardBx">
                      <div style={{ float: "right" }}>
                        {/* <i className="fa fa-ellipsis-v m-2"></i> */}

                        <div class="dropdown dropleft">
                          <i
                            class="fa fa-ellipsis-v m-2"
                            type="button"
                            id="dropdownMenu2"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          ></i>
                          <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenu2"
                          >
                            <button class="dropdown-item" type="button">
                              Edit
                            </button>
                            <button
                              class="dropdown-item"
                              type="button"
                              onClick={(e) => deleteOrganization(org.name)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-5">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_pp19lwbku3OLDvTF3qHLT0mhVKgCYD8jQ&usqp=CAU"
                          className="w-25 mt-4"
                        />
                      </div>
                      <h4 className="org-name text-center">{org.name}</h4>
                    </div>
                  </div>
                ))}
            </div>
          </div>
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
                          />
                        </div>
                        <div className="col-md-6 mt-2">
                          <p>Users</p>
                          <select className="form-control">
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
                          />
                        </div>
                        <div className="col-md-6 mt-2">
                          <p>Devices</p>
                          <select className="form-control">
                            <option></option>
                            <option></option>
                          </select>
                        </div>

                        <div className="col-md-6 mt-2">
                          <p>default</p>
                          <select className="form-control">
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
