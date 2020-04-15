import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Collapse,
	Avatar,
	IconButton,
	Typography,
} from '@material-ui/core/'
import { red } from '@material-ui/core/colors';
import {
	FavoriteIcon,
	ShareIcon,
	ExpandMoreIcon,
	MoreVertIcon
} from '@material-ui/icons/Favorite';
import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

function buildBody(props){
	
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);


	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						R
						</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={props.meta.name}
				subheader={props.meta.categories}
			/>
			<CardMedia
				className={classes.media}
				image={props.meta.pictures}
				title={props.meta.name}
			/>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					This impressive paella is a perfect party dish and a fun meal to cook together with your
					guests. Add 1 cup of frozen peas along with the mussels, if you like.
					</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>Method:</Typography>
					<Typography paragraph>
						{props.meta.notes}
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}

class Place extends Component {
	render() {
		return (
			<div class="place_grid">
				{buildBody(this.props)}
			</div>
		);
	}
}

export default Place;