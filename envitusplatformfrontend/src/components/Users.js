import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

export default function Users() {
  const [user, setUser] = useState([]);

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;
  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);
  return (
    <div className="container-fluid mt-5">
      <h2>All Users</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Role</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.is_active == true ? "active" : "inactive"}</td>
                  <td>
                    <i className="fa fa-pencil m-1"></i>
                    <i className="fa fa-trash m-1"></i>
                    <i className="fa fa-eye m-1"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          ;
        </div>
      )}
    </div>
  );
}
