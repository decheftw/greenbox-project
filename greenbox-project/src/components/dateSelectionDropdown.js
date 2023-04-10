import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DateSelectionDropdown(props) {
    let { setSelectedDates, currentSelection } = props;

    const handleChange = (event) => {
        setSelectedDates(event.target.value);

      };
    
    return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel>Months</InputLabel>
            <Select
            defaultValue={"All"}
            value={currentSelection}
            label="Months"
            onChange={handleChange}
            >
            <MenuItem value={"Last Month"}>Last Month</MenuItem>
            <MenuItem value={"Past 6 Months"}>Past 6 Months</MenuItem>
            <MenuItem value={"Past Year"}>Past Year</MenuItem>

            </Select>
        </FormControl>
        </Box>
    );
}