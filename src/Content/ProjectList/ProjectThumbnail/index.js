import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

import Config from "../../../Data/Config.json";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
        background : "#555555",
        margin: "10px 10px 10px 10px",
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        width: "410px",
        height : "300px",
    },
    title: {
        fontWeight: "bold",
        color: "#ffffff",
    },
    subtitle: {
        color: "#cccccc",
    },
    image: {
        background : "#000000",
        //backgroundImage: "url('https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg')",
        width: "410px",
        height : "225px",
        marginTop: "25px",
        backgroundPosition: "center", /* Center the image */
        backgroundRepeat: "no-repeat", /* Do not repeat the image */
        backgroundSize: "cover", /* Resize the background image to cover the entire container */
    }
}));

function ProjectThumbnail(props) {
    const classes = useStyles();
    const [loaded, setLoaded] = React.useState(false);
    const [project, setProject] = React.useState({});
    const [backgroundImage, setBackgroundImage] = React.useState("https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg");
    
    if (!loaded)
    {
        setLoaded(true);
        getProject();
    }

    function getProject()
    {
        //console.log(Config.protocole+"://"+Config.ip+":"+Config.port+Config.project+"/"+props.id);
        fetch(Config.protocole+"://"+Config.ip+":"+Config.port+Config.project+"/"+(props.id+1))
        .then(response => response.json())
        .then ((jsonData) => {
            setProject(jsonData);
            //console.log(jsonData);
        })
    }
    

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="h5" className={classes.title}>
                    {project.title} 
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                    {project.tags!==undefined?project.tags[0].toUpperCase()+" Project":""}
                </Typography>
                <Paper className={classes.image} style={{backgroundImage: "url("+backgroundImage+")"}}>
                    
                </Paper>
            </Paper>
        </div>
    );
}

export default ProjectThumbnail;