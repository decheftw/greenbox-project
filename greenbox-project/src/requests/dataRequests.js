/* eslint-disable no-prototype-builtins */
let data = require('../customers.json');

export const consoleLogData = () => {
    console.log(data);
}

export const getConversions = (selectedSchools) => {
    if (selectedSchools == "All") {
        selectedSchools = ["Dartmouth", "Yale", "Princeton", "Harvard", "Cornell", "Brown", "Columbia", "UPenn"]
    }
    let reservations = 0, accountsMade = 0;
    for (let i = 0; i < data.length; i++) {
        if (selectedSchools.includes(data[i].school)) {
            accountsMade += 1;
            if (data[i].hasOwnProperty('monthlyCost')) {
                reservations += 1;
            }
        }
    }
    const conversionsDataObject = [{name: "Accounts Without Reservation", value: accountsMade-reservations}, {name: "Reservations",value: reservations}]
    return conversionsDataObject
}

// Months is a list of months of which data is requested from in the form of mm-yyyy
export const getRevenue = (selectedSchools, months) => {
    if (selectedSchools == "All") {
        selectedSchools = ["Dartmouth", "Yale", "Princeton", "Harvard", "Cornell", "Brown", "Columbia", "UPenn"]
    }
    if (months == "Last Month") {
        months = ["03-2023"]
    } else if (months == "Past 6 Months") {
        months = ["10-2022","11-2022","12-2022","01-2023","02-2023","03-2023"]
    }
    else if (months == "Past Year") {
        months = ["04-2022","05-2022","06-2022","07-2022","08-2022","09-2022","10-2022","11-2022","12-2022","01-2023","02-2023","03-2023"]
    }
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
    const revenuePerMonthArray = [];
    for (const [month] of Object.entries(revenuePerMonth)) {
        const monthlyRevenueObject = {
            "name": month,
            "revenue": revenuePerMonth[month]
        }
        revenuePerMonthArray.push(monthlyRevenueObject)
    }
    return revenuePerMonthArray
}

export const getPickups = (selectedSchools) => {
    if (selectedSchools == "All") {
        selectedSchools = ["Dartmouth", "Yale", "Princeton", "Harvard", "Cornell", "Brown", "Columbia", "UPenn"]
    }
    const pickups = {};
    for (let i = 0; i < data.length; i++) {
        const entry = data[i];
        if (selectedSchools.includes(entry.school) && entry.hasOwnProperty('monthlyCost')) {
            const currentDate = new Date("2023-01-01");
            const pickupDate = new Date(entry.pickupDate);
            const pickupDateString = pickupDate.toISOString().substring(0, 10);
            if (currentDate < pickupDate) {
                if (pickups.hasOwnProperty(pickupDateString)) {
                    pickups[pickupDateString]["customers"] += 1;
                    pickups[pickupDateString]["items"] += entry.numItems;
                } else {
                    const pickupDateData = {
                        "customers": 1,
                        "items": entry.numItems
                    };
                    pickups[pickupDateString] = pickupDateData;
                }
            }
        }
    }
    const pickupsDataArray = [];
    for (const [day] of Object.entries(pickups)) {
        const pickupsDataObject = {
            "day": day,
            "customers": pickups[day]["customers"],
            "items": pickups[day]["items"]
        }
        pickupsDataArray.push(pickupsDataObject)
    }
    pickupsDataArray.sort(function(a,b) {
        return new Date(a.day) - new Date(b.day);
    });
    return pickupsDataArray
}