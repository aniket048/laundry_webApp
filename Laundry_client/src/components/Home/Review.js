import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import customer1 from '../../images/review/customer-1.jpg';
import customer2 from '../../images/review/customer-2.jpg';
import customer3 from '../../images/review/customer-3.jpg';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1)
		}
	},
	large: {
		width: theme.spacing(12),
		height: theme.spacing(12)
	}
}));

const StyledRating = withStyles({
	iconFilled: {
		color: '#68bbf5'
	},
	iconHover: {
		color: '#2ca8ff'
	}
})(Rating);

const Review = () => {
	const classes = useStyles();

	return (
		<section id="Review">
			<Container>
				<div className="d-flex justify-content-center mb-5">
					<h2 className="text-info head-title mt-5">Review & Rating</h2>
				</div>
				<Row className="mt-3 mb-5">
					<Col md={4}>
						<div>
							<div className={classes.root} className="d-flex justify-content-center">
								<Avatar alt="Alberto Duncan" src={customer1} className={classes.large} />
							</div>
							<div className="text-center">
								<h5 className="text-info mt-4 mb-0">Pratik</h5>
								<p className="text-secondary">Student</p>

								<Box component="fieldset" mb={3} borderColor="transparent">
									<StyledRating
										name="customized-color"
										defaultValue={5}
										getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
										precision={0.5}
										icon={<FavoriteIcon fontSize="inherit" />}
									/>
								</Box>

								<p className="mb-5">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ut doloribus eaque
									odio nulla est, sit hic minima in corporis.
								</p>
							</div>
						</div>
					</Col>
					<Col md={4}>
						<div>
							<div className={classes.root} className="d-flex justify-content-center">
								<Avatar alt="Alberto Duncan" src={customer2} className={classes.large} />
							</div>
							<div className="text-center">
								<h5 className="text-info mt-4 mb-0">Saloni</h5>
								<p className="text-secondary">Student</p>

								<Box component="fieldset" mb={3} borderColor="transparent">
									<StyledRating
										name="customized-color"
										defaultValue={4}
										getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
										precision={0.5}
										icon={<FavoriteIcon fontSize="inherit" />}
									/>
								</Box>

								<p className="mb-5">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ut doloribus eaque
									odio nulla est, sit hic minima in corporis.
								</p>
							</div>
						</div>
					</Col>
					<Col md={4}>
						<div>
							<div className={classes.root} className="d-flex justify-content-center">
								<Avatar alt="Alberto Duncan" src={customer3} className={classes.large} />
							</div>
							<div className="text-center">
								<h5 className="text-info mt-4 mb-0">Vivek</h5>
								<p className="text-secondary">Student</p>

								<Box component="fieldset" mb={3} borderColor="transparent">
									<StyledRating
										name="customized-color"
										defaultValue={5}
										getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
										precision={0.5}
										icon={<FavoriteIcon fontSize="inherit" />}
									/>
								</Box>

								<p className="mb-5">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ut doloribus eaque
									odio nulla est, sit hic minima in corporis.
								</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Review;
