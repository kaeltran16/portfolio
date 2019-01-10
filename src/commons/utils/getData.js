// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AppDataContext } from 'appContext';

export const Page = {
   Landing: 'LandingPage',
   About: 'AboutPage',
   Skill: 'SkillPage',
   Work: 'WorkPage',
   Contact: 'ContactPage'
};

const getData = targetPage => {
   const { LandingPage, About, Skill, Work, Contact }
      = useContext(AppDataContext);

   switch (targetPage) {
      case Page.Landing:
         return LandingPage;
      case Page.About:
         return About;
      case Page.Skill:
         return Skill;
      case Page.Work:
         return Work;
      case Page.Contact:
         return Contact;
      default:
         console.error('unknown page, please only select valid page.');
         return {};
   }
};

export default getData;
