import React from 'react'
import DeviceList from '../components/DeviceList';
import Table from '../components/Table';

function LivedataScreen() {
  return (
    <div className="livedata_screens">
      <h1 className="mt-5">
        <h2 className='text-white'>All Devices</h2>
        {/* <Table /> */}
        <DeviceList />
      </h1>
    </div>
  );
}

export default LivedataScreen