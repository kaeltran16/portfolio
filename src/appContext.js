import React from 'react';
import PropTypes from 'prop-types';

const {Provider, Consumer} = React.createContext({});

const withDataContext = (Component, dataType) => {
    const EnhancedComponent = (props) => (
        <Consumer>
            {value => {
                switch (dataType) {
                    case 'LandingPage':
                        return <Component {...props} {...value.LandingPage} />;
                    case 'About':
                        return <Component {...props} {...value.About} />;
                    case 'Skill':
                        return <Component {...props} {...value.Skill} />;
                    case 'Project':
                        return <Component {...props} {...value.Project} />;
                    case 'Contact':
                        return <Component {...props} {...value.Contact} />;
                    default:
                        return <Component {...value}/>
                }
            }}
        </Consumer>
    );


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

export {withDataContext, Provider, Consumer};
