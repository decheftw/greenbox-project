/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { consoleLogData, getConversions, getRevenue, getPickups } from '../requests/dataRequests';
import RevenueChart from './revenueChart';
import ConversionsChart from './conversionsChart';
import PickupsTable from './pickupsTable';
import SchoolSelectionDropdown from './schoolSelectionDropdown';

function Dashboard() {
    const [revenueData, setRevenueData] = useState([]);
    const [conversionData, setConversionData] = useState({});
    const [pickupData, setPickupData] = useState([]);
    const [selectedSchools, setSelectedSchools] = useState("All");
    const [selectedDates, setSelectedDates] = useState("Last Month");
    useEffect(() => {
        setConversionData(getConversions(selectedSchools));
        setRevenueData(getRevenue(selectedSchools, selectedDates));
        setPickupData(getPickups(selectedSchools));
    }, [selectedSchools, selectedDates]);


    return (
        <div>
            <h1>Dashboard</h1>
            <SchoolSelectionDropdown setSchool={setSelectedSchools} currentSelection={selectedSchools} />
            <RevenueChart data={revenueData} setSelectedDates={setSelectedDates} currentSelection={selectedDates} />
            <ConversionsChart data={conversionData} />
            <PickupsTable data={pickupData} />
        </div>
    )
}

export default Dashboard;