import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listOrganization } from '../actions/organizationActions';
import { listUsers } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

function OrganisationScreen() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const organizationList = useSelector((state) => state.organizationList);
  const { loading, error, users } = userList;
  const { organizations } = organizationList;
  
  useEffect(() => {
    dispatch(listUsers());
    dispatch(listOrganization())
  }, [dispatch]);
  return (
    <div className="orgScreen">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox />
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
              {organizations &&
                organizations.map((org) => (
                  <div className="col-md-4">
                    <div className="cardBx">
                      <div className="text-center mt-5">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_pp19lwbku3OLDvTF3qHLT0mhVKgCYD8jQ&usqp=CAU"
                          className="w-25 mt-4"
                        />
                      </div>
                      <h4 className="org-name text-center">
                        {org.name}
                      </h4>
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
                    <form>
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
                            <option>aswins</option>
                            <option>aswins</option>
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
                    </form>
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
                  <button type="button" className="btn btn-success">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrganisationScreen