import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SchoolSelectionDropdown(props) {
    let { setSchool, currentSelection } = props;

    const handleChange = (event) => {
        setSchool(event.target.value);
      };
    
    return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel>School</InputLabel>
            <Select
            defaultValue={"All"}
            value={currentSelection}
            label="School"
            onChange={handleChange}
            >
            <MenuItem value={"Brown"}>Brown</MenuItem>
            <MenuItem value={"Columbia"}>Columbia</MenuItem>
            <MenuItem value={"Cornell"}>Cornell</MenuItem>
            <MenuItem value={"Dartmouth"}>Dartmouth</MenuItem>
            <MenuItem value={"Harvard"}>Harvard</MenuItem>
            <MenuItem value={"Princeton"}>Princeton</MenuItem>
            <MenuItem value={"UPenn"}>UPenn</MenuItem>
            <MenuItem value={"Yale"}>Yale</MenuItem>
            <MenuItem value={"All"}>All</MenuItem>
            </Select>
        </FormControl>
        </Box>
    );
}