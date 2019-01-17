import React from 'react';

const AppDataContext = React.createContext({});

const DataType = {
   LandingPage: 'LandingPage',
   AboutPage: 'AboutPage',
   SkillPage: 'SkillPage',
   WorkPage: 'WorkPage',
   ContactPage: 'ContactPage'
};

const withDataContext = (Component, dataType) => {
   const EnhancedComponent = props => (
      <Consumer>
         {value => {
            switch (dataType) {
               case DataType.LandingPage:
                  return <Component {...props} {...value.LandingPage} />;
               case DataType.AboutPage:
                  return <Component {...props} {...value.About} />;
               case DataType.SkillPage:
                  return <Component {...props} {...value.Skill} />;
               case DataType.WorkPage:
                  return <Component {...props} {...value.Work} />;
               case DataType.ContactPage:
                  return <Component {...props} {...value.Contact} />;
               default:
                  return <Component {...value}/>;
            }
         }}
      </Consumer>
   );
   return EnhancedComponent;
};

const { Provider, Consumer } = AppDataContext;

export { withDataContext, AppDataContext, Provider, Consumer, DataType };
