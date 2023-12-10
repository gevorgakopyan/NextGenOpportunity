// BasicTabs.js
import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {console.log({children}, {value}, {index})}
      {value === index && (
        <div>
        
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
        </div>
      )}
    </div>
  );
}

export default function BasicTabs({ value, handleChange }) {
  return (
    <>
    {console.log( {value})}
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Introduction" />
          <Tab label="Literature Overview" />
          <Tab label="Conclusion" />
          {/* Add more tabs as needed */}
        </Tabs>
      </Box>
    </Box>
    </>
  );
}
