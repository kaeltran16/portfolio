import React from 'react';

const {Provider, Consumer} = React.createContext({});

const DataType = {
    LandingPage: 'LandingPage',
    AboutPage: 'AboutPage',
    SkillPage: 'SkillPage',
    WorkPage: 'WorkPage',
    ContactPage: 'ContactPage'
};

const withDataContext = (Component, dataType) => {
    const EnhancedComponent = (props) => (
        <Consumer>
            {value => {
                switch (dataType) {
                    case DataType.LandingPage:
                        return <Component {...props} {...value.LandingPage} />;
                    case DataType.AboutPage:
                        return <Component {...props} {...value.About} />;
                    case DataType.Skill:
                        return <Component {...props} {...value.Skill} />;
                    case DataType.WorkPage:
                        return <Component {...props} {...value.Project} />;
                    case DataType.ContactPage:
                        return <Component {...props} {...value.Contact} />;
                    default:
                        return <Component {...value}/>
                }
            }}
        </Consumer>
    );


    return EnhancedComponent;
};

export {withDataContext, Provider, Consumer, DataType};
