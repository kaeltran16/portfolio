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
        header: 'what i capable of',
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
                skillNames: ['ASP.NET/ASP.NET Core', 'React/Angular', 'Redux', 'Express', 'React Native', 'SQL Server/MongoDB', 'GraphQL']
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
        details: [
            {
                name: 'natours',
                subHeading: `Portfolio site for an imagine company in tours business. It is the result of 'Advanced CSS course' I took to improve my existing CSS and Sass skill. `,
                intro: 'HTML/SCSS',
                demoUrl: `http://khangtran.ca/natours`,
                srcUrl: `https://github.com/Khang-Tran/natours`
            },
            {
                name: 'devpals',
                subHeading: `A social network site for developers to connect, sharing their thought and coding activities. It also allows users to add friends and comment on friends's posts.`,
                intro: 'MongoDB, Express, React, Nodejs, Redux',
                demoUrl: `https://devpals.herokuapp.com`,
                srcUrl: `https://github.com/Khang-Tran/devpals`
            },
            {
                name: 'ishop',
                subHeading: 'API for developing online shopping site. The API provides authentications and authorization, allows managers to add products with categories and users to order and receive invoices.',
                intro: 'ASP.NET Core Web API, EF Core, JWT',
                demoUrl: `https://ishop-api.azurewebsites.net/api/swagger/index.html`,
                srcUrl: `https://github.com/Khang-Tran/iShop_v.02`
            }
        ],
    },
    Contact: {
        header: 'get in touch',
        contactDetails: {
            email: 'cktran16x2@gmail.com',
            tel: '4169987489'
        },
        socialIcons: [
            {icon: 'linkedin', name: 'Linkedin', url: 'https://www.linkedin.com/in/khangtranx'},
            {icon: 'github', name: 'Github', url: 'https://github.com/Khang-Tran'},
            {icon: 'facebook', name: 'Facebook', url: 'https://www.facebook.com/khangishere'},
            {icon: 'twitter', name: 'Twitter', url: 'https://twitter.com/KhangCaoTran'},
            {icon: 'google-plus', name: 'Google', url: 'https://plus.google.com/105861925169691513017'},
        ]
    }
};

export default store;