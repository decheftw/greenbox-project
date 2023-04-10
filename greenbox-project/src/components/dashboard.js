// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { consoleLogData, getConversions, getRevenue, getPickups } from '../requests/dataRequests';

function Dashboard() {
    useEffect(() => {
        consoleLogData()
        console.log(getConversions(["Dartmouth", "Yale"]));
        console.log(getRevenue(["Cornell", "Harvard"], ["01-2023", "02-2023"]));
        console.log(getPickups(["Brown", "Princeton"]));
    }, []);
}

export default Dashboard;