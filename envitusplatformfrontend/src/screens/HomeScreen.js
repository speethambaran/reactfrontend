import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Dashboard from '../components/Dashboard';

function HomeScreen() {
  return (
    <div>
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
            <h1>2</h1>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h1>3</h1>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h1>4</h1>
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