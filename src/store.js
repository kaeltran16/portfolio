const store = {
    LandingPage: {
        primaryHeader: `Hi, I'm Khang`,
        subHeader: 'Lorem ipsum dolor sit amet'
    },
    About: {
        header: 'who i am',
        contents: [
            'I am living in Toronto, Ontario. I have been writing code for a couple of years and have gotten my hand dirty in various languages and frameworks. I love coding back-end development but also comfortable if I have to code in the front-end.',
            'Everything started with my love and passion for the technology, come from the old computer my dad bought for me back when I was a kid. Ever since then, I try to control it, to make friend with it and when the first time I knew about Pascal and what I could do, I realized I found the purpose of my life.',
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
                skillNames: ['ASP.NET/ASP.NET Core', 'React', 'Angular', 'Express', 'React Native', 'SQL Server', 'MongoDB', 'GraphQL']
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
        header: 'what i did'
    },
    Contact: {
        header: 'get in touch',
        socialIcons: [
            {icon: 'linkedin', name: 'Linkedin', url: 'https://linkedin.com'},
            {icon: 'github', name: 'Github', url: 'https://github.com'},
            {icon: 'facebook', name: 'Facebook', url: 'https://facebook.com'},
            {icon: 'twitter', name: 'Twitter', url: 'https://twitter.com'},
            {icon: 'google-plus', name: 'Google', url: 'https://google.com'},
        ]
    }
};

export default store;