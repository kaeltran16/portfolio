const store = {
   LandingPage: {
      primaryHeader: `Hi, I'm Khang`,
      subHeader: 'A curious, decisive, goal-oriented developer'
   },
   About: {
      header: 'who i am',
      contents: [
         'I am living in Toronto, Ontario. I have been writing code for a couple of years and have gotten my hand dirty in various languages and frameworks. I love coding back-end development but also comfortable if I have to code in the front-end.',
         'I am responsible for my own project and take self-development seriously.I task and try to push myself to the limit every single day and enjoy every second of it. My goal is to work as a web developer in a team of passionate, amazing people and work hard to achieve it.',
         'If you are an employer looking to hire or a friend who just wanna talk, feel free to contact me.'
      ]
   },
   Skill: {
      header: 'what i am capable of',
      details: [
         {
            iconName: 'code',
            heading: 'I started with C and C++, migrated to C# soon later and now really interested in JavaScript.',
            subHeading: 'Languages I know',
            skillNames: ['C#', 'C++', 'Java', 'JavaScript', 'HTML/CSS']
         },
         {
            iconName: 'usb',
            heading: 'I started with WPF in Desktop application but now working mostly in Web Development.',
            subHeading: 'Frameworks/libraries I has worked with',
            skillNames: ['ASP.NET/ASP.NET Core', 'React/React Native', 'Redux', 'Express', 'Angular', 'SQL Server/MongoDB', 'GraphQL']
         },
         {
            iconName: 'wrench',
            heading: 'I also know about tools and utilities to make development process easier.',
            subHeading: 'Tools I use',
            skillNames: ['Visual Studio', 'Intellij IDEA', 'Webpack', 'Terminal/Powershell', 'Git']
         }
      ]
   },
   Project: {
      header: 'What i did',
      details: [
         {
            name: 'recipello',
            subHeading: [
               `A site enables users to search for food recipes or logged in user to post their favorite food recipe and vote for recipes they love. Authorization and authentication via JWT allows only logged in users to post and modify their own recipes.`,
               `Strengthened my JavaScript full stack skill and put my hand on GraphQL, a powerful query language for API and how to integrate with MongoDB and Nodejs server in the back-end via ApolloServer and integrate with React via ApolloClient.`
            ],
            intro: 'JavaScript, React, MongoDB, Express, GraphQL',
            demoUrl: `http://khangtran.ca/recipello`,
            srcUrl: `https://github.com/Khang-Tran/recipello`
         },
         {
            name: 'devpals',
            subHeading: [
               `A social network site for developers to connect, sharing their thought and coding activities. It also allows users to add friends, like and comment on friends's posts. Authorization and authentication via JWT allows only logged in users to post their activities and modify their own post.`,
               `Strengthened my JavaScript full stack skill and learned how to design a database for social network site, integrated MongoDB into Express and manage global states by Redux and consume those states in React to make a maintainable and predictable application.`
            ],
            intro: 'JavaScript, MongoDB, Express, React, Redux',
            demoUrl: `https://devpals.herokuapp.com`,
            srcUrl: `https://github.com/Khang-Tran/devpals`
         },
         {
            name: 'ishop',
            subHeading: [
               'An API for developing online shopping site enables consumers to store and categorize and display their products, enables their users to order products, get shipped and receive invoices. Authorization and authentication via JWT allows only authorized users to add and remove products, the rest just view or order products.',
               `Strengthened my C# and .NET skills, designed a complex relational database and implemented it by "code first" approach via Entity Framework Core, implemented maintainable and reusable API endpoints and prevent them from common attack methods.`
            ],
            intro: 'C#, ASP.NET Core Web API, EF Core, JWT',
            demoUrl: `https://ishop-api.azurewebsites.net/api/swagger/index.html`,
            srcUrl: `https://github.com/Khang-Tran/iShop_v.02`
         }
      ]
   },
   Contact: {
      header: 'get in touch',
      contactDetails: {
         email: 'cktran16x2@gmail.com',
         tel: '4169987489'
      },
      socialIcons: [
         {
            icon: 'linkedin',
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/khangtranx'
         },
         {
            icon: 'github',
            name: 'Github',
            url: 'https://github.com/Khang-Tran'
         },
         {
            icon: 'facebook',
            name: 'Facebook',
            url: 'https://www.facebook.com/khangishere'
         },
         {
            icon: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/KhangCaoTran'
         },
         {
            icon: 'google-plus',
            name: 'Google',
            url: 'https://plus.google.com/105861925169691513017'
         }
      ]
   }
};

export default store;
