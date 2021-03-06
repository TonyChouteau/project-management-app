import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	appbar : {
		position: 'fixed',
		top: 0,
		backgroundColor: "#555555",
		color: "#FFFFFF",
	},
	menuButton: {
		marginRight: theme.spacing(2),
		fontSize: "40px",
	},
	title: {
		flexGrow: 1,
	},
	search: {
	  position: 'relative',
	  borderRadius: theme.shape.borderRadius,
	  backgroundColor: fade(theme.palette.common.white, 0.15),
	  '&:hover': {
		backgroundColor: fade(theme.palette.common.white, 0.25),
	  },
	  marginRight: theme.spacing(2),
	  marginLeft: 0,
	  width: '100%',
	  [theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	  },
	},
	searchIcon: {
	  width: theme.spacing(7),
	  height: '100%',
	  position: 'absolute',
	  pointerEvents: 'none',
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
	inputRoot: {
	  color: 'inherit',
	},
	inputInput: {
	  padding: theme.spacing(1, 1, 1, 7),
	  transition: theme.transitions.create('width'),
	  width: '100%',
	  [theme.breakpoints.up('md')]: {
		//width: 250,
		//height: 35,
	  },
	},
}));

function DisplayAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.appbar}>
				<Toolbar>
				<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
					placeholder="Recherche..."
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					}}
					inputProps={{ 'aria-label': 'search' }}
					/>
				</div>
				{/*<Typography variant="h6" className={classes.title}>
					Projets
				</Typography>
				<Button color="inherit">Login</Button>*/}
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default DisplayAppBar;