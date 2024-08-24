import { meta, shopify, starbucks, tesla, common, mb } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    unity,
    csharp,
    threejs,
    blender,
    oculus,
    sql,
    jira,
    python,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: unity,
        name: "Unity",
        type: "Frontend",
    },
    {
        imageUrl: csharp,
        name: "CSharp",
        type: "Backend",
    },
    { 
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
        
    },
    {
        imageUrl: blender,
        name: "Blender",
        type: "Frontend",
    },
    {
        imageUrl: oculus,
        name: "Oculus",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Data",
    },
    {
        imageUrl: jira,
        name: "Jira",
        type: "Project Management",
    },
    {
        imageUrl: mui,
        name: "Material UI Library",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Unity Developer Intern",
        company_name: "The Commons XR",
        icon: common,
        iconBg: "#accbe1",
        date: "Sep 2022 - Jan 2023",
        points: [
            "Developing and maintaining 3D applications using Unity and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other interns to elevate our educational platform.",
            "Implementing bug fixes in our VR product version.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Instructor & Department Lead",
        company_name: "Mission Bit",
        icon: mb,
        iconBg: "#fbc3bc",
        date: "June 2023 - Aug 2024",
        points: [
            "Taught over 400 high school students including 4 semester classes and 20 workshops around the Bay Area.",
            "Lead classes in Web Development, Game Design and Intro to VR in a project based learning environment.",
            "Students in Jaedon's classes consistently won awards in the program each semester.",
            "Showed foundational knowledge in HTML/CSS/JS, Unity/C#, Python, WebVR and SQL through classes and workshops to students ages 14-26.",
            "Received Department Lead position for the Game Design Team and lead weekly meetings garnering constructive feedback for our classes",
        ],
    },
    {
        title: "Freelance Web Developer",
        company_name: "",
        icon: react,
        iconBg: "#b7e4c7",
        date: "June 2019 - Present",
        points: [
            "Solo developing and maintaining frontend webpages for clients using React.js, Tailwind, Bootstrap, Squarespace and other related technologies",
            "Spearheaded outreach to local businesses that showed a need for an online presence.",
            "Implementing responsive and interactive design and ensuring cross-browser compatibility.",
            
        ],
    },
    {
        title: "Solo Game Developer",
        company_name: "",
        icon: unity,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing 3D Games with Unity, working in topics ranging from VR to normal first person games/experiences. ",
            "Focused on the Design and Development of Games. Encompassing every aspect of development from project planning to finish.",
            "Finished first demo of 'The Bowling Lane' and a VR Ping Pong Game and plan to release more in the future. ",
            "Conduct group playtests with friends, family and community on LinkedIn.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: unity,
        theme: 'btn-back-green',
        name: 'The Bowling Lane',
        description: 'A 3D Physics based, Action/Horror escape game made in Unity. Solo Developed from start to finish. Two full levels developed with Enemy AI and detailed Game Mechanics. Click below for the Live Link and Demo.',
        link: 'https://jaedon-l.itch.io/the-bowling-lane',
    },
    {
        iconUrl: car,
        theme: 'btn-back-red',
        name: 'Driving Instructor Website',
        description: 'Developing a brand advertisement page per Client Request, implemented Email functions and API to connect with Calendar Booking Sites, Client and Server Side in development.',
        link: 'https://standard-driving-school.glitch.me/',
    },
    {
        iconUrl: unity,
        theme: 'btn-back-blue',
        name: 'Multiplayer Ping Pong VR',
        description: 'Mini VR Physics project using Unity Netcode and DOTS and implementing object handtracking to override Unity Physics system to play a simple Ping Pong Game with a friend.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'React Three Fiber Portfolio',
        description: 'Using React Three Fiber, Three.JS and Tailwind, created a detailed 3D environment showing skills in Frontend Development and Object-Oriented Programming. Implemented Audio, Animation, Shaders and Interactivity. ',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'College Work',
        description: 'Collection of older projects finished during school, featuring aspects of game programming, three.js, Character and Level Design and a Senior Capstone Game Project.',
        link: 'https://jaedon-lee.github.io/portfolio/index.html',
    }
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];