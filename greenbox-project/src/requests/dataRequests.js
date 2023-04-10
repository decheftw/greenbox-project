/* eslint-disable no-prototype-builtins */
let data = require('../customers.json');

export const consoleLogData = () => {
    console.log(data);
}

export const getConversions = (selectedSchools) => {
    let reservations = 0, accountsMade = 0;
    for (let i = 0; i < data.length; i++) {
        if (selectedSchools.includes(data[i].school)) {
            accountsMade += 1;
            if (data[i].hasOwnProperty('monthlyCost')) {
                reservations += 1;
            }
        }
    }
    return {
        reservations, 
        accountsMade
    };
}

// Months is a list of months of which data is requested from in the form of mm-yyyy
export const getRevenue = (selectedSchools, months) => {
    const revenuePerMonth = Object.fromEntries(months.map(k => [k, 0]))
    for (let i = 0; i < data.length; i++) {
        const entry = data[i];
        if (selectedSchools.includes(entry.school) && entry.hasOwnProperty('monthlyCost')) {
            const pickupDate = Date.parse(entry.pickupDate);
            const returnDate = Date.parse(entry.returnDate);
            for (const [month] of Object.entries(revenuePerMonth)) {
                const monthArray = month.split("-");
                const monthObject = new Date(monthArray[1], monthArray[0]);
                if (pickupDate <= monthObject && monthObject < returnDate) {
                    revenuePerMonth[month] += entry.monthlyCost;
                }
            }
        }
    }
    return revenuePerMonth
}

export const getPickups = (selectedSchools) => {
    const pickups = {};
    for (let i = 0; i < data.length; i++) {
        const entry = data[i];
        if (selectedSchools.includes(entry.school) && entry.hasOwnProperty('monthlyCost')) {
            const currentDate = new Date();
            const pickupDate = Date.parse(entry.pickupDate);
            if (currentDate < pickupDate) {
                if (pickups.hasOwnProperty(entry.pickupDate)) {
                    pickups[entry.pickupDate]["customers"] += 1;
                    pickups[entry.pickupDate]["items"] += entry.numItems;
                }
            } else {
                const pickupDateData = {
                    "customers": 1,
                    "items": entry.numItems
                };
                pickups[entry.pickupDate] = pickupDateData;
            }
        }
    }
    return pickups
}