import React from 'react';
import AppBar from "./Header/AppBar/DisplayAppBar";
import ProjectList from "./Content/ProjectList/DisplayProjectList";

//import { makeStyles } from '@material-ui/core/styles';

import './App.css';

/*const useStyles = makeStyles(theme => ({
	list : {
    marginTop: "64px",
	},
}));*/

function App(props)
{
	//const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar/>
      <ProjectList/>
    </React.Fragment>
  );
}

export default App;