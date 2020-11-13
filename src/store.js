const store = {
  LandingPage: {
    primaryHeader: `Hi, I'm Khang`,
    subHeader: "A curious, enthusiastic, goal-oriented developer",
  },
  About: {
    header: "who i am",
    contents: [
      "I am living in Toronto, Ontario. I have been writing code for a couple of years and have gotten my hand in various languages and frameworks. I love coding in the back-end but also love to code in the front-end.",
      "I am responsible for my own progress and take self-development seriously.I task and try to push myself to the limit every single day and enjoy every second of it. My goal is to work as a developer in a team of passionate, amazing people and work hard to achieve it.",
      "If you are an employer looking to hire or a friend who just wanna talk, feel free to contact me.",
    ],
  },
  Skill: {
    header: "what i am capable of",
    details: [
      {
        iconName: "code",
        heading:
          "I started with C and C++, migrated to C# soon later and now really interested in JavaScript.",
        subHeading: "Languages I know",
        skillNames: ["C#", "C++", "Java", "JavaScript", "HTML/CSS"],
      },
      {
        iconName: "usb",
        heading:
          "I started with WPF in Desktop application but now working mostly in Web Development.",
        subHeading: "Frameworks/libraries I has worked with",
        skillNames: [
          "ASP.NET/ASP.NET Core",
          "React/React Native",
          "Redux",
          "Express",
          "Angular",
          "SQL Server/MongoDB",
          "GraphQL",
        ],
      },
      {
        iconName: "wrench",
        heading:
          "I also know about tools and utilities to make development process easier.",
        subHeading: "Tools I use",
        skillNames: [
          "Visual Studio",
          "Intellij IDEA",
          "Webpack",
          "Terminal/Powershell",
          "Git",
        ],
      },
    ],
  },
  Project: {
    header: "What i have done",
    details: [
      {
        name: "crwn-clothing",
        subHeading: [
          `An online shopping store allowing users to purchase clothing products.`,
        ],
        intro: "React, Redux, Firebase, Stripe API",
        demoUrl: `https://crwn-clothing.kaelpg.dev`,
        srcUrl: `https://github.com/kaeltran16/crwn-clothing`,
        imageUrl:
          "https://res.cloudinary.com/medium-cloned/image/upload/q_auto/v1575321964/crwn-clothing.png",
      },
      {
        name: "cat-wiki",
        subHeading: [
          `A site for cat lovers to search for their favorite cats and see their detail and images!`,
        ],
        intro: "React, Express",
        demoUrl: `https://cat-wiki.netlify.app/`,
        imageUrl:
          "https://res.cloudinary.com/medium-cloned/image/upload/v1605090423/Screen_Shot_2020-11-11_at_5.24.51_PM.png",
        srcUrl: `https://github.com/kaeltran16/cat_wiki`,
      },
      {
        name: "devchat",
        subHeading: [
          `A Slack clone allowing logged in user to chat privately or together in various channel.`,
        ],
        intro: "React, Redux, Firebase",
        demoUrl: `https://devchat.kaelpg.dev`,
        srcUrl: `https://github.com/kaeltran16/slack-clone`,
        imageUrl: `https://res.cloudinary.com/medium-cloned/image/upload/q_auto/v1575321964/devchat.png`,
      },
    ],
  },
  Contact: {
    header: "get in touch",
    contactDetails: {
      email: "cktran16x2@gmail.com",
      tel: "4169987489",
    },
    socialIcons: [
      {
        icon: "linkedin",
        name: "Linkedin",
        url: "https://www.linkedin.com/in/khangtranx",
      },
      {
        icon: "github",
        name: "Github",
        url: "https://github.com/kaeltran16",
      },
      {
        icon: "facebook",
        name: "Facebook",
        url: "https://www.facebook.com/khangishere",
      },
      {
        icon: "twitter",
        name: "Twitter",
        url: "https://twitter.com/KhangCaoTran",
      },
      {
        icon: "google-plus",
        name: "Google",
        url: "https://plus.google.com/105861925169691513017",
      },
    ],
  },
};

export default store;
