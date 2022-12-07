import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Dashboard from "../components/Dashboard";
import DeviceList from "../components/DeviceList";
import Header from "../components/Header";
import Table from "../components/Table";
import Users from "../components/Users";
import AddSensorScreen from "./AddSensorScreen";
import DashboardManagementScreen from "./DashboardManagementScreen";
import LivedataScreen from "./LivedataScreen";
import OrganisationScreen from "./OrganisationScreen";

function HomeScreen({ role }) {
	const [userRole, setUserRole] = useState("");

	useEffect(() => {
		let userInfo = JSON.parse(localStorage.getItem("userData"));
		setUserRole(userInfo.role);
	}, []);
	return (
		<div>
			<header>{/* <Header /> */}</header>
			<div className="home-screen">
				{userRole == "Super Admin" ? (
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
									<p>Organization</p>
								</Tab>
								<Tab>
									<p>Sensor</p>
								</Tab>
								<Tab>
									<p>API Key</p>
								</Tab>
								<Tab>
									<p>Manage Dashboard</p>
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
									<Table role={userRole} />
								</div>
							</TabPanel>
							<TabPanel>
								<div className="panel-content">
									<LivedataScreen role={userRole} />
								</div>
							</TabPanel>
							<TabPanel>
								<div className="panel-content">
									<Users role={userRole} />
								</div>
							</TabPanel>
							<TabPanel>
								<div className="panel-content">
									{/* <h1>Organization</h1> */}
									<OrganisationScreen role={userRole} />
								</div>
							</TabPanel>
							<TabPanel>
								<div className="panel-content">
									{/* <h1>SENSOR</h1> */}
									<AddSensorScreen role={userRole} />
								</div>
							</TabPanel>
							<TabPanel>
								<div className="panel-content">
									<h1>5</h1>
								</div>
							</TabPanel>
							<TabPanel>
								<div className="panel-content">
									<DashboardManagementScreen role={userRole} />
								</div>
							</TabPanel>
						</Tabs>
					</div>
				) : (
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
							</TabList>

							<TabPanel>
								<div className="panel-content">
									<Dashboard />
								</div>
							</TabPanel>
							<TabPanel>
								<div className="panel-content">
									{/* <DeviceList /> */}
									<Table role={userRole} />
								</div>
							</TabPanel>
							<TabPanel>
								<div className="panel-content">
									<LivedataScreen role={userRole} />
								</div>
							</TabPanel>
						</Tabs>
					</div>
				)}
			</div>
		</div>
	);
}

export default HomeScreen;
