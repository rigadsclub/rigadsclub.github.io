import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import RigaRealEstateDemo from "./RigaRealEstateDemo";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import RigaRealEstateApi from "./RigaRealEstateApi";

const useStyles = makeStyles(() => ({
    header: {
        width: '100%',
        marginLeft: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'no-wrap'
    },
    title: {
        textAlign: 'left',
    },
    titleHeader: {
        margin: '8px 0 4px 0',
    },
    project: {
    },
    riga: {
        margin: '8px',
        width: '80px',
        height: '80px',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo/riga-horizontal.png)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    },
    ai: {
        margin: '8px',
        width: '80px',
        height: '80px',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/avatar/ai.png)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default function RigaRealEstateProject() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Paper elevation={3}>
            <div className={classes.project}>
                <div className={classes.header}>
                    <div className={classes.riga}/>
                    <div className={classes.title}>
                        <h3 className={classes.titleHeader}>Riga real estate price prediction</h3>
                        <Typography variant="subtitle2" gutterBottom>
                            Machine learning solution that suggests real estate sale and rent price
                        </Typography>
                    </div>
                </div>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="demo" />
                        <Tab label="public Api" />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <RigaRealEstateDemo />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <RigaRealEstateApi />
                </TabPanel>
            </div>
        </Paper>
    );
}