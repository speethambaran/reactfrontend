import * as React from 'react';
// import LoadingBox from "./LoadingBox";
// import MessageBox from "./MessageBox";
import DeviceList from "../../components/DeviceList";

const Sampletable = () => {

    return (
        <div>
            <h1 className="title">Device List</h1>
        <table className="table mt-2" style={{ color: "white" }}>
  <thead className="thead-light">
    <tr>
      
    <th scope="col">SI</th>
      <th scope="col">Device ID</th>
     <th scope="col">Status</th>
    <th scope="col">City</th>
    <th scope="col">Type</th>
    <th scope="col">LandMark</th>
    </tr>
  </thead>
  <tbody>
   
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
 
    )

}

export default Sampletable

