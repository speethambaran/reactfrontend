import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Dashboard from '../components/Dashboard';
import DeviceList from '../components/DeviceList';
import Table from '../components/Table';
import Users from '../components/Users';
import OrganisationScreen from './OrganisationScreen';

function HomeScreen() {
  return (
    <div className="home-screen">
      <Tabs>
        <TabList>
          <Tab>
            <p>Dashboard</p>
          </Tab>
          <Tab>
            <p>Devices</p>
          </Tab>
          <Tab>
            <p>Live Data</p>
          </Tab>
          <Tab>
            <p>Users</p>
          </Tab>
          <Tab>
            <p>Organization</p>
          </Tab>
          <Tab>
            <p>API Key</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <Dashboard />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            {/* <DeviceList /> */}
            <Table />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h1>3</h1>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Users />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            {/* <h1>Organization</h1> */}
            <OrganisationScreen />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h1>5</h1>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default HomeScreen