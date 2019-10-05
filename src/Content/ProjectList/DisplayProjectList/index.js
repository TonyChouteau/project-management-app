import React from 'react';

import { createMuiTheme, MuiThemeProvider, makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

import ProjectThumbnail from "../ProjectThumbnail";
import Config from "../../../Data/Config.json";

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            //sm: 550,
            //md: 950,
            lg: 1200,
            xl: 1750
        }
    }
});

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    grid : {
        margin: "20px 1% 20px 1%",
        width : "98%",
        textAlign: 'center',
    },
    paper: {
        margin: "10px 10px 10px 10px",
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        width: "410px",
        height : "300px",
    },
}));

function DisplayProjectList() {
    const classes = useStyles();
    const [count, setCount] = React.useState(0);
    
    if (count === 0)
    {
        getCount();
    }

    function getCount()
    {
        //console.log(Config.protocole+"://"+Config.ip+":"+Config.port+Config.count);
        fetch(Config.protocole+"://"+Config.ip+":"+Config.port+Config.count)
        .then(response => response.json())
        .then ((jsonData) => {
            setCount(jsonData.total);
        })
    }

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <Grid className={classes.grid} container direction="row" justify="center" alignItems="flex-start">
                        {[...Array(count)].map((e,i) => {
                            return (
                                <Grid className={classes.cell} key={i} item>
                                    <ProjectThumbnail id={i}/>
                                </Grid>
                            )
                        })}
                </Grid>
            </div>
    </MuiThemeProvider>
    );
}

export default DisplayProjectList;