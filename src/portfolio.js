/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Pranshu Pareek",
  title: "Hi all, I'm Pranshu Pareek",
  subTitle: emoji(
    "A passionate programmer having good command in Data Structures & Algorithm using Java."
  ),
  resumeLink:
    "https://bit.ly/pranshuresume",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pranshupareek",
  linkedin: "https://www.linkedin.com/in/pranshupareek/",
  gmail: "pranshupareek47@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/15402302/pranshu-pareek",
  twitter: "https://twitter.com/pranshupareekk",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Software Development Intern at Netmeds.com",
  skills: [
    emoji(
      "⚡ Write efficient & beautiful code"
    ),
    emoji("⚡ Create APIs using Spring Boot, MySQL, NodeJS, Express and MongoDB"),
    emoji(
      "⚡ Create responsive webpage using Bootstrap"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MongoDB & SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kurukshetra University",
      logo: require("./assets/images/KULogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2018 - June 2022",
      desc: "Participated in the hackathons , coding competition and lead the club.",
      descBullets: [
        "Led the Google Developer Student Clubs from 2020 to 2021.",
        "Secured top ranks in coding competitions organised by Codechef, Codeforces, Google, Hackerearth and Hackerrank.",
        "Participated in Hackathons like SIH and NIC by MHRD."
      ]
    },
    {
      schoolName: "Ashok Memorial Public School",
      logo: require("./assets/images/ampsLogo.png"),
      subHeader: "Primary to Senior Secondary",
      duration: "April 2003 - March 2018",
      desc:
        "Got medals in science & english olympiad and participated in competitions.",
      descBullets: ["Got Gold and Silver Medal for english and science olympiad respectively.",
    "Participated in co-curricular activities."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Structure & Algorithm", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Intern",
      company: "Netmeds.com",
      companylogo: require("./assets/images/netmedsLogo.jpg"),
      date: "August 2021 – Present",
      desc:
        "",
      descBullets: [
        "Working on an end‑to‑end recruitment solution that includes application submission, resume screening and interview platform.",
        "Also working on a single sign‑on platform for multiple services required by the organization such as Competitor Analysis, Issues Tracking, etc."
      ]
    }
    ,
    {
      role: "Team Lead and Backend Developer",
      company: "SarvSahayak",
      companylogo: require("./assets/images/ss.png"),
      date: "November 2020 – May 2021",
      desc:
        "",
      descBullets: [
        "Build a team project for users to connect with the nearby NGOs by registering a complaint of a select category by using the MERN stack for the web version and Kotlin+XML for Android.",
        "Implemented RESTful API server and connected the Frontend with Backend."
      ]
    }
    // ,
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "4 ⭐ Coder ",
      subtitle:
        "Secured first rank in the college and 136 Global Rank in Codechef Starter 13 Div 2.",
      image: require("./assets/images/codechef.png"),
      footerLink: [
        {
          name: "Profile Link",
          url:
            "https://www.codechef.com/users/pranshu_pareek"
        },
        // {
        //   name: "Award Letter",
        //   url:
        //     "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url:
        //     "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Ranked 1 out of 362",
      subtitle:
        "Solved 430+ problems with 1444 points on GeeksForGeeks.",
      image: require("./assets/images/gfg.png"),
      footerLink: [
        {
          name: "Profile Link",
          url:
            "https://auth.geeksforgeeks.org/user/pranshupareek/practice/"
        },
        // {
        //   name: "Award Letter",
        //   url:
        //     "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url:
        //     "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Specialist Coder",
      subtitle:
        "Secured 2115 Global Rank out of 12K+ in Educational Codeforces Round 114.",
      image: require("./assets/images/cf.png"),
      footerLink: [
        {
          name: "Profile Link",
          url:
            "http://codeforces.com/profile/pranshupareek"
        },
        // {
        //   name: "Award Letter",
        //   url:
        //     "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url:
        //     "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Google DSC Lead",
      subtitle:
        "Built the culture of peer to peer learning. Hosted and organized technical workshops.",
      image: require("./assets/images/googleDev.png"),
      footerLink: [
        {
          name: "Event Platform",
          url:
            "https://bit.ly/dscchapter"
        },
        // {
        //   name: "Award Letter",
        //   url:
        //     "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url:
        //     "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "National Innovation Contest 2020",
      subtitle:
        "Idea/Prototype got selected for mentoring round in NIC 2020 after being the top team in the campus.",
      image: require("./assets/images/iic.png"),
      footerLink: [
        {
          name: "Project",
          url:
            "https://github.com/SarvSahayak"
        }
      ]
    },

    {
      title: "Smart India Hackathon 2020",
      subtitle: "Qualified for evaluation round after being in the top teams in campus hackathon.",
      image: require("./assets/images/sih.png"),
      footerLink: [
        // {name: "Hackathon", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9310114747",
  email_address: "pranshupareek47@gmail.com",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "pranshupareekk", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
