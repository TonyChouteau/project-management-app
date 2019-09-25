import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    paper: {
        margin: "10px 10px 10px 10px",
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        minWidth: "410px",
        height : "300px",
    },
}));

function ProjectThumbnail(props) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                {props.id}
            </Paper>
        </div>
    );
}

export default ProjectThumbnail;