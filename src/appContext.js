import React from 'react';
import PropTypes from 'prop-types';
const { Provider, Consumer } = React.createContext({});

const withDataContext = (Component, dataType) => {
	const EnhancedComponent = ({
		LandingPage,
		About,
		Skill,
		Project,
		Contact
	}) => (
		<Consumer>
			{value => {
				switch (dataType) {
					case 'LandingPage':
						return <Component {...LandingPage} {...value} />;
					case 'About':
						return <Component {...About} {...value} />;
					case 'Skill':
						return <Component {...Skill} {...value} />;
					case 'Project':
						return <Component {...Project} {...value} />;
					case 'Contact':
						return <Component {...Contact} {...value} />;
				}
			}}
		</Consumer>
	);

	EnhancedComponent.propTypes = {
		LandingPage: PropTypes.array,
		About: PropTypes.object,
		Skill: PropTypes.object,
		Project: PropTypes.object,
		Contact: PropTypes.object
	};

	return EnhancedComponent;
};

withDataContext.propTypes = {
	Component: PropTypes.object.isRequired,
	dataType: PropTypes.oneOf([
		'LandingPage',
		'About',
		'Skill',
		'Project',
		'Contact'
	]).isRequired
};

export { withDataContext, Provider, Consumer };
