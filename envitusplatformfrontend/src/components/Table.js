import React from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

function Table() {
    const test = ()=>{
        alert('test')
    }
    const devices = [
      { device_id: 1, status: "active",City:"Ernakulam",type:"sensor",landmark:"Kochi", family: "Air" },
      { device_id: 2, status: "offline",City:"Ernakulam",type:"sensor",landmark:"Kochi", family: "Water" },
      { device_id: 3, status: "active",City:"Ernakulam",type:"sensor",landmark:"Kochi", family: "Flood" },
      { device_id: 4, status: "active",City:"Ernakulam",type:"sensor",landmark:"Kochi", family: "Flood" },
      { device_id: 5, status: "active",City:"Ernakulam",type:"sensor",landmark:"Kochi", family: "Water" },
      { device_id: 6, status: "active",City:"Ernakulam",type:"sensor",landmark:"Kochi", family: "Water" },
      { device_id: 7, status: "active",City:"Ernakulam",type:"sensor",landmark:"Kochi", family: "Flood" },
      { device_id: 8, status: "active",City:"Ernakulam",type:"sensor",landmark:"Kochi", family: "Air" },
      { device_id: 9, status: "active",City:"Ernakulam",type:"sensor",landmark:"Kochi", family: "Water" },
      { device_id: 10, status: "active",City:"Ernakulam",type:"sensor",landmark:"Kochi", family: "Flood" },
      { device_id: 11, status: "active",City:"Ernakulam",type:"sensor",landmark:"Kochi", family: "Water" },
      { device_id: 12, status: "active",City:"Ernakulam",type:"sensor",landmark:"Kochi", family: "Flood" },
      { device_id: 13, status: "active",City:"Ernakulam",type:"sensor",landmark:"Kochi", family: "Air" },
      { device_id: 14, status: "active",City:"Ernakulam",type:"sensor",landmark:"Kochi", family: "Air" },
      { device_id: 15, status: "active",City:"Ernakulam",type:"sensor",landmark:"Kochi", family: "Flood" },
    ];

    const actionList = {
        "edit" : <i className='fa fa-pencil'></i>,
        "delete" : <i className='fa fa-trash'></i>,
        "view" : <i className='fa fa-pencil'></i>
    }   

    for (let i=0;i<devices.length;i++){
        devices[i].edit = actionList.edit;
        devices[i].delete = actionList.delete;
        devices[i].view = actionList.view;
        if(devices[i].status == "active"){
            devices[i].status = (
              <i
                className="fa fa-dot-circle-o"
                style={{
                  color: "green",
                  backgroundColor: "#40dd40",
                  borderRadius: "50%",
                }}
              ></i>
            );
        }else if (devices[i].status == "offline") {
                devices[i].status = (
                  <i
                    className="fa fa-dot-circle-o"
                    style={{
                      color: "darkgrey",
                      backgroundColor: "#grey",
                      borderRadius: "50%",
                    }}
                  ></i>
                );
              }
    }

    const columns = [
      { dataField: "device_id", text: "devicId", sort: true },
      { dataField: "status", text: "Status", sort: true },
      { dataField: "type", text: "Type", sort: true },
      { dataField: "family", text: "Family", sort: true },
      { dataField: "type", text: "Type", sort: true },
      { dataField: "City", text: "City", sort: true },
      { dataField: "landmark", text: "LandMark", sort: true },
      { dataField: "edit", text: "", onClick: { test } },
      { dataField: "delete", text: "", onClick: { test } },
      { dataField: "view", text: "", onClick: { test } },
    ];

    const defaultSorted = [
      {
        dataField: "name",
        order: "desc",
      },
    ];

    const pagination = paginationFactory({
      page: 2,
      sizePerPage: 5,
      lastPageText: ">>",
      firstPageText: "<<",
      nextPageText: ">",
      prePageText: "<",
      showTotal: true,
      alwaysShowAllBtns: true,
      onPageChange: function(page, sizePerPage) {
        console.log("page", page);
        console.log("sizePerPage", sizePerPage);
      },
      onSizePerPageChange: function(page, sizePerPage) {
        console.log("page", page);
        console.log("sizePerPage", sizePerPage);
      },
    });
  return (
    <div className='container-fluid mt-5'>
        <h1>Device List</h1>
      <BootstrapTable
      className="mt-4"
      rowStyle={{color:"#111",backgroundColor:"white"}}
        bootstrap4
        keyField="id"
        data={devices}
        columns={columns}
        defaultSorted={defaultSorted}
        pagination={pagination}
      />
    </div>
  );
}

export default Table