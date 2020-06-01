import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function RigaRealEstateApi() {
    return (
        <Typography component="div" align={"left"}>
            <h2>HTTP POST endpoint</h2>
            <p>http://35.189.254.202:8501/v1/models/riga:predict</p>
            <h2>Request body</h2>
            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                {JSON.stringify({
                    "instances": [
                        {
                            "op_type": ["For sale"],
                            "district": ["Teika"],
                            "street": [""],
                            "rooms": [1],
                            "area": [38.3],
                            "floor": [3],
                            "total_floors": [3],
                            "house_seria": ["Staļina"],
                            "house_type": ["Brick"],
                            "condition": ["All amenities"],
                            "lat": [56.967406],
                            "lon": [24.186564]
                        },
                        {
                            "op_type": ["For rent"],
                            "district": ["Teika"],
                            "street": [""],
                            "rooms": [1],
                            "area": [38.3],
                            "floor": [3],
                            "total_floors": [3],
                            "house_seria": ["Staļina"],
                            "house_type": ["Brick"],
                            "condition": ["All amenities"],
                            "lat": [56.967406],
                            "lon": [24.186564]
                        }
                    ]
                })}
            </Box>
        </Typography>
    )

}