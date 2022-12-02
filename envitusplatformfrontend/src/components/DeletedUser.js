import React, { useEffect, useState } from "react";

function DeletedUser({ userList }) {
  const [deactivatedUser, setDeactivatedUser] = useState([]);
  useEffect(() => {
    // console.log("user list : ", userList);
    let testArr = [];
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].is_active == false) {
        testArr.push(userList[i]);
      }
    }
    console.log("TEST ARA : ", testArr);
    setDeactivatedUser(testArr);
  }, []);
  return (
    <div>
      {console.log("deavuve : ", deactivatedUser)}
      <h2 style={{ color: "darkgray" }}>Deactivated Users</h2>
      {/* <h4 className="no_data_message">No Data Found</h4> */}
      <div>
        <table className="table mt-2" style={{ backgroundColor: "white" }}>
          <thead className="thead-light">
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
            {/* {users.map((user, index) => ( */}
            {deactivatedUser.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td style={{ height: "4px", color: "darkred" }} className="">
                  Inactive
                </td>
                <td>
                  <i className="fa fa-pencil m-1"></i>
                  <i className="fa fa-trash m-1"></i>
                  <i className="fa fa-eye m-1"></i>
                </td>
              </tr>
            ))}
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DeletedUser;
