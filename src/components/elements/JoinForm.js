import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";


export default function JoinForm() {
    <Box>
        <TextField
            label="Name, surname"
            type="number"
            variant="outlined"
            value={rooms.toString()}
            onChange={event => setRooms(parseInt(event.target.value))}
        />
        <TextField
            label="Room count"
            type="number"
            variant="outlined"
            value={rooms.toString()}
            onChange={event => setRooms(parseInt(event.target.value))}
        />
    </Box>

}