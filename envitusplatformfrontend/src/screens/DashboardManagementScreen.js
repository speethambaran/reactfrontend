import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function DashboardManagementScreen() {
    
  return (
    <div className='bg-light'>
        <div className='container-fluid'>
            <h4 style={{color:"#111"}}>Dashboard Settings</h4>
            <br />
            <div className='row'>
                <h6 style={{color:"#111"}}>Graph</h6>
                <Switch {...label} defaultChecked />

            </div>
            <div className='row'>
                <h6 style={{color:"#111"}}>Cards</h6>
                <Switch {...label} defaultChecked />
                
            </div>
        </div>
      
      
    </div>
  )
}

export default DashboardManagementScreen