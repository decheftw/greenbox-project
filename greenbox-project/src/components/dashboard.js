/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { consoleLogData, getConversions, getRevenue, getPickups } from '../requests/dataRequests';
import RevenueChart from './revenueChart';
import ConversionsChart from './conversionsChart';
import PickupsTable from './pickupsTable';

function Dashboard() {
    const [revenueData, setRevenueData] = useState([]);
    const [conversionData, setConversionData] = useState({});
    const [pickupData, setPickupData] = useState([]);
    const [selectedSchools, setSelectedSchools] = useState(["Dartmouth", "Yale", "Princeton", "Harvard", "Cornell", "Brown", "Columbia", "UPenn"])
    useEffect(() => {
        consoleLogData()
        setConversionData(getConversions(selectedSchools));
        setRevenueData(getRevenue(selectedSchools, ["12-2022","01-2023", "02-2023", "03-2023", "04-2023"]));
        setPickupData(getPickups(selectedSchools));
    }, []);


    return (
        <div>
            <h1>Dashboard</h1>
            <RevenueChart data={revenueData} />
            <ConversionsChart data={conversionData} />
            <PickupsTable data={pickupData} />
        </div>
    )
}

export default Dashboard;