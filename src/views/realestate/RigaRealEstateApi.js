import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function RigaRealEstateApi() {
    return (
        <Typography component="div" align={"left"}>
            <Typography variant='h6'>
                HTTP POST endpoint
            </Typography>
            <code>http://35.189.254.202:8501/v1/models/riga:predict</code>
            <Typography variant='h6'>
                Request body
            </Typography>
            <code>
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
            </code>
        </Typography>
    )

}