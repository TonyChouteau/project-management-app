import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Config from '../../../Data/Config.json';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	paper: {
		background: '#555555',
		margin: '7px 7px 7px 7px',
		padding: '5px',
		color: theme.palette.text.secondary,
		width: '300px',
		height: '250px',
	},
	title: {
		fontWeight: 'bold',
		color: '#ffffff',
	},
	subtitle: {
		color: '#cccccc',
	},
	image: {
		background: '#000000',
		//backgroundImage: "url('https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg')",
		width: '300px',
		height: '186px',
		marginTop: '10px',
		position: "relative",
		backgroundPosition: 'center',
		/* Center the image */
		backgroundRepeat: 'no-repeat',
		/* Do not repeat the image */
		backgroundSize: 'cover',
		/* Resize the background image to cover the entire container */
		'&:hover': {
			'& div' : {
				height: "100%",
			}
		}
	},
	description: {
		'& div' : {
			padding: "10px",
		},
		color : "#ffffff",
		position: "absolute",
		width: "100%",
		overflowWrap:"break-word",
		overflow: "hidden",
		textOverflow: "ellipsis",
		height: 0,
		bottom: 0,
		background: "#000000AA",
		transition: "height 1s, overflow 0s",
		transitionDelay: "height 0s, overflow 1s",
	}
}));

function ProjectThumbnail(props) {
	const classes = useStyles();
	const [loaded, setLoaded] = React.useState(false);
	const [project, setProject] = React.useState({});
	//const [image, setImage] = React.useState("");
	const [backgroundImage, setBackgroundImage] = React.useState(Config.protocole+"://"+Config.ip+":"+Config.port+Config.image+Config.default);

	if (!loaded) {
		setLoaded(true);
		getProject();
		getThumbnail();
	}

	function getProject() {
		//console.log(Config.protocole+"://"+Config.ip+":"+Config.port+Config.project+"/"+props.id);
		fetch(Config.protocole + '://' + Config.ip + ':' + Config.port + Config.project + '/' + (props.id + 1))
			.then(response => response.json())
			.then(jsonData => {
				setProject(jsonData);
				//console.log(jsonData);	
			});
	}

	function getThumbnail() {
		fetch(Config.protocole + '://' + Config.ip + ':' + Config.port + Config.imagesList + '/' + (props.id+1))
			.then(response => response.json())
			.then(jsonData => {
				let thumbName = jsonData.filter(name => name.includes("main"))[0];
				if (thumbName !== undefined) {
					//console.log(thumbName);
					setBackgroundImage(Config.protocole+"://"+Config.ip+":"+Config.port+Config.image + '/' + (props.id+1) + "/"+ thumbName);
				}
				//setProject(jsonData);
				//console.log(jsonData);
			});
	}

	return (
		<div className={classes.root}>
			<Paper className={classes.paper} padding={1}>
				<Typography variant="h6" className={classes.title}>
					{project.title}
				</Typography>
				<Typography variant="subtitle2" className={classes.subtitle}>
					{project.tags !== undefined ? project.tags[0].toUpperCase() + ' Project' : ''}
				</Typography>
				<Paper className={classes.image} style={{ backgroundImage: 'url(' + backgroundImage + ')' }}>
					<Paper className={classes.description}>
						<div>
							{project.subtitle}
							<hr></hr>
							Projet {(() => {switch(project.type){
								case 0:
									return "Personnel";
								case 1:
									return "Professionnel";
								case 2:
									return "Hackathon";
								default:
									return "N/A";
							}})()}
						</div>
					</Paper>
				</Paper>
			</Paper>
		</div>
	);
}

export default ProjectThumbnail;
