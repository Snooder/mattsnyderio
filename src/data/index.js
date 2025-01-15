import {
  arizent,
  bethere,
  paywall,
  starfetcher_dashboard, brightspot, flatiron_logo,arizent_logo,freelance_logo,rutgers_logo,newbrunswick_logo, starfetcher_mobile, weatherornot_laptop
} from "../assets";

import {
  flatiron1, flatiron2, flatiron3, fun4,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const latestExperiences = [
  {
    title: "WeatherOrNot",
    description: `
     WeatherOrNot is a travel platform that combines GPT-powered weather forecasting with trip planning. It helps users find trips that align with good weather and affordable travel deals. The goal is to make planning simple while encouraging exploration.
    `,
    details: `
      The platform uses React for the interactive interface, Node.js for backend functionality, and Hostinger for reliable hosting. OpenAI's GPT provides weather forecasts and personalized travel recommendations, giving users practical insights for their plans. Building this project required integrating several systems to create a seamless user experience.
    `,
    finalNote: `
     WeatherOrNot is designed to inspire travel while simplifying the process. Each feature focuses on making planning easier and more enjoyable, ensuring users can focus on discovering new destinations.
    `,
    photo: weatherornot_laptop, // Replace with actual photo path
    icons: [
      {
        name: "FaReact",
        label: "React",
        description: "Crafted the user interface with React to deliver a smooth and engaging experience."
      },
      {
        name: "FaNodeJs",
        label: "Node.js",
        description: "Developed the server-side logic using Node.js to ensure fast and reliable performance."
      },
      {
        name: "FaCloud",
        label: "Hostinger",
        description: "Deployed the platform on Hostinger, providing stable and cost-effective hosting solutions."
      },
      {
        name: "FaBrain",
        label: "OpenAI",
        description: "Integrated GPT technology to deliver smart weather forecasts and personalized travel suggestions."
      },
    ],
  },
  {
    title: "Starfetcher",
    description: `
     Starfetcher is a platform designed for a retro online game I enjoyed growing up. It allows users to log in, set preferences, and explore features tailored to their likes and dislikes. The goal was to create an intuitive experience that feels personal and engaging.
    `,
    details: `
     The project uses React for the frontend, Python for web scraping, Golang for a fast backend, and AWS for scalable hosting. Every technical choice was made to ensure the platform performs well and adapts to user needs.
    `,
    finalNote: `
     Starfetcher reflects my focus on building systems that connect with users. Each feature is built with purpose, blending technology with user feedback to create a meaningful experience.
    `,
    photo: starfetcher_mobile, // Replace with actual photo path
    icons: [
      {
        name: "FaReact",
        label: "React",
        description: "Designed and implemented the front-end with React, ensuring a dynamic and responsive user interface."
      },
      {
        name: "FaPython",
        label: "Python",
        description: "Built backend services in Python, enabling secure user authentication and personalized data processing."
      },
      {
        name: "FaGolang",
        label: "Go",
        description: "Developed efficient microservices using Go to handle high-performance requests and user interactions."
      },
      {
        name: "FaAws",
        label: "AWS",
        description: "Deployed the platform on AWS, leveraging its scalability and security to deliver a reliable user experience."
      },
    ],
  },
];

const IconShadows = {
  FaPython: 'group-hover:drop-shadow-[0_0_20px_rgba(0,128,255,0.9)]', // Blue
  FaAws: 'group-hover:drop-shadow-[0_0_20px_rgba(255,153,0,0.9)]', // Orange
  FaDocker: 'group-hover:drop-shadow-[0_0_20px_rgba(0,171,223,0.9)]', // Teal
  FaGit: 'group-hover:drop-shadow-[0_0_20px_rgba(255,69,0,0.9)]', // Red
  FaGithub: 'group-hover:drop-shadow-[0_0_20px_rgba(0,0,0,0.9)]', // Black
  FaHtml5: 'group-hover:drop-shadow-[0_0_20px_rgba(227,76,38,0.9)]', // Orange-Red
  FaCss3: 'group-hover:drop-shadow-[0_0_20px_rgba(38,77,228,0.9)]', // Blue
  FaLinux: 'group-hover:drop-shadow-[0_0_20px_rgba(255,209,0,0.9)]', // Yellow
  FaDrupal: 'group-hover:drop-shadow-[0_0_20px_rgba(0,121,193,0.9)]', // Cyan
  FaJava: 'group-hover:drop-shadow-[0_0_20px_rgba(176,114,25,0.9)]', // Brown
  SiJenkins: 'group-hover:drop-shadow-[0_0_20px_rgba(0,77,64,0.9)]', // Dark Green
  SiPytorch: 'group-hover:drop-shadow-[0_0_20px_rgba(255,114,0,0.9)]', // Orange
  SiTerraform: 'group-hover:drop-shadow-[0_0_20px_rgba(121,70,252,0.9)]', // Purple
  SiMysql: 'group-hover:drop-shadow-[0_0_20px_rgba(0,96,128,0.9)]', // Dark Cyan
  FaDatabase: 'group-hover:drop-shadow-[0_0_20px_rgba(39,174,96,0.9)]', // Green
  FaShopify: 'group-hover:drop-shadow-[0_0_20px_rgba(84,184,84,0.9)]', // Bright Green
  FaBootstrap: 'group-hover:drop-shadow-[0_0_20px_rgba(128,0,128,0.9)]', // Purple
  FaEgg: 'group-hover:drop-shadow-[0_0_20px_rgba(255,223,0,0.9)]', // Yellow
  MdOutlineEgg: 'group-hover:drop-shadow-[0_0_20px_rgba(255,192,0,0.9)]', // Gold
  FaReact: 'group-hover:drop-shadow-[0_0_20px_rgba(97,218,251,0.9)]', // React Blue
  FaGolang: 'group-hover:drop-shadow-[0_0_20px_rgba(0,173,216,0.9)]', // Cyan
  FaNodeJs: 'group-hover:drop-shadow-[0_0_20px_rgba(102,204,102,0.9)]', // Green
  FaCloud: 'group-hover:drop-shadow-[0_0_20px_rgba(135,206,235,0.9)]', // Sky Blue
  FaBrain: 'group-hover:drop-shadow-[0_0_20px_rgba(255,105,180,0.9)]', // Pink
};

const experiences = [
  {
    title: "Software Engineer, ML Platforms",
    company_name: "Flatiron Health",
    date: "2022 - 2023",
    location: "New York, NY",
    companyLogo: flatiron_logo,
    details: [
      "Developed machine learning models to enhance real-world oncology evidence, optimizing data processes and pipelines for improved efficiency.",
      "Streamlined data collection and transformation workflows using Python-based solutions, ensuring high-quality patient data.",
      "Improved data pipeline performance by optimizing DAGs, significantly reducing AWS resource processing times and achieving cost savings.",
      "Integrated tools such as SonarQube to ensure test coverage and maintain patient data integrity throughout the model lifecycle."
    ],
    icons: [
      {
        name: "FaPython",
        label: "Python",
        description: "Maintained the Python CLI & API that enabled ML Model Builders to quickly evaluate and test experiments that predict and prevent the onset of life-threatening health conditions."
      },
      {
        name: "FaAws",
        label: "AWS",
        description: "Monitored multiple server fleets of EC2, RDS, and ELB services that enabled Data Scientists to get model results back at record speeds while also looking out for improved ways to monitor experiments."
      },
      {
        name: "FaDocker",
        label: "Docker",
        description: "Packaged custom built CLIs built with Python and model prediction dependencies into Docker containers, allowing individual models to be thoroughly tested before pushing to production."
      },
      {
        name: "SiJenkins",
        label: "Jenkins",
        description: "Upgraded build pipelines with automatic testing via SonarCube, while simplifying build processes by integrating with Jenkins Agents."
      },
      {
        name: "SiPytorch",
        label: "PyTorch",
        description: "Routinely reviewed PyTorch models for breaking changes upon dependency upgrades to safely handle unexpected occurences eg. data drift and regression testing."
      },
      {
        name: "SiTerraform",
        label: "Terraform",
        description: "Managed deployments and scaling of server fleets via Terraform (IoC), ensured platform stability from AWS, Databases, and Monitoring tools."
      }
    ]
  },
  {
    title: "Full Stack Software Engineer",
    company_name: "Arizent",
    location: "New York, NY",
    companyLogo: arizent_logo,
    date: "2020 - 2022",
    details: [
      "Led the development of new content types using Java, JavaScript, and MySQL, increasing user engagement by 30%.",
      "Collaborated with designers to integrate creative concepts, enhancing platform functionality and technical feasibility.",
      "Engineered platform enhancements, from backend Java services to frontend component development, improving system reliability and reducing downtime."
    ],
    icons: [
      {
        name: "FaJava",
        label: "Java",
        description: "Developed on a Content Management System (CMS) written in Java with new Content Types, elegant frontend visuals, and commercial 3rd Party integrations."
      },
      {
        name: "SiMysql",
        label: "MySQL",
        description: "Constructed new SQL Queries that utilized Indexing, stored procedures, and clever strategies to return results fast."
      },
      {
        name: "FaDocker",
        label: "Docker",
        description: "Migrated build processes to Docker containers for faster testing and reducing costs of Jenkins builds."
      },
      {
        name: "FaGit",
        label: "Git",
        description: "Shared Git CLI shortcuts for team use that enabled faster code branching and effortless code-reviews."
      },
      {
        name: "FaGithub",
        label: "GitHub",
        description: "Led a new peer-review system for the betterment of derisking technical mistakes."
      }
    ]
  },
  {
    title: "Shopify Engineer",
    company_name: "Freelance",
    companyLogo: freelance_logo,
    location: "Hoboken, NJ",
    date: "2018 - 2020",
    details: [
      "Developed unique store applications by modifying the Shopify backend, providing custom solutions for eCommerce businesses.",
      "Created and maintained a custom API that backed up customer data on a private Apache/SQL server and managed HTML views with dynamic data.",
      "Configured the API to manage product expiration, automatically removing customer access to expired content.",
      "Successfully facilitated contracts with 20 businesses, ensuring client satisfaction through reliable and scalable solutions."
    ],
    icons: [
      {
        name: "FaShopify",
        label: "Shopify",
        description: "Sold tailored eCommerce solutions for the Shopify platform which automated a subscription-based model with no extra infrastructure."
      },
      {
        name: "FaDatabase",
        label: "SQL",
        description: "Centralized customer events to a remote database service which allowed for faster responses than relying on Shopify's API."
      },
      {
        name: "FaHtml5",
        label: "HTML",
        description: "Crafted dynamic templates that were visually appealing interfaces using CSS, HTML, and Shopify's Liquid syntax."
      },
      {
        name: "FaLinux",
        label: "Linux",
        description: "Learned how to run remote services via Linux, allowing a robust and scalable infrastructure as more clients were onboarded."
      }
    ]
  },
  {
    title: "Junior Application Developer",
    company_name: "Rutgers University",
    companyLogo: rutgers_logo,
    location: "New Brunswick, NJ",
    date: "2018 - 2019",
    details: [
      "Integrated new processes to enhance UX design using open-source software, Drupal, for internal employee modules.",
      "Developed bash scripts to automate data downloads on Unix systems.",
      "Redesigned HTML/CSS for the University Online Learning conference, utilizing Bootstrap for improved responsiveness and accessibility."
    ],
    icons: [
      {
        name: "FaLinux",
        label: "Linux",
        description: "Gained practical experience in Linux system administration, employing shell scripting to automate tasks and optimize workflows."
      },
      {
        name: "FaHtml5",
        label: "HTML",
        description: "Designed and implemented a user-friendly and visually appealing front-end interface for the Rutgers University's online tele-conference."
      },
      {
        name: "FaCss3",
        label: "CSS",
        description: "Utilized CSS to optimize the visual design and user experience of the website, delivering a professional and aesthetically pleasing presentation."
      },
      {
        name: "FaBootstrap",
        label: "Bootstrap",
        description: "Employed Bootstrap to develop a responsive and cross-platform compatible platform for Professors scheduling meetings, ensuring a consistent and optimal user experience across different devices."
      },
      {
        name: "FaDrupal",
        label: "Drupal",
        description: "Played a key role in developing internal employee tools using Drupal, resulting in friendly workflows and enhanced efficiency."
      }
    ]
  },
  {
    title: "Bachelors, Computer Science",
    company_name: "Rutgers University",
    location: "New Brunswick, NJ",
    companyLogo: newbrunswick_logo,
    date: "2016 - 2020",
    details: [
      "Earned a Bachelor of Science in Computer Science, gaining proficiency in software engineering, machine learning, and data analysis.",
      "Minored in Digital Communications and Information Management (DCIM), focusing on the intersection of digital technology and communication.",
      "Worked on projects ranging from Machine Learning, System Architecture, Computer Engineering, and Algorithms.",
    ],
    icons: [
      {
        name: "FaPython",
        label: "Python",
        description: "Acquired a deep understanding of Python programming and successfully applied it to a variety of data analysis and machine learning projects."
      },
      {
        name: "FaJava",
        label: "Java",
        description: "Built a strong foundation in software engineering by gaining practical experience with Java programming."
      },
      {
        name: "FaLinux",
        label: "Linux",
        description: "Developed a solid understanding of Linux system administration, encompassing server management and troubleshooting techniques."
      }
    ]
  }
];


const recentProjects = [
  {
    name: "StarFetcher: OSRS Shooting Star Tracker",
    description:
      "Starfetcher is a platform designed to help Old School RuneScape (OSRS) players efficiently track and scout the highest-priority stars that will imporve their mining level.",
    image: starfetcher_dashboard,
  },
  {
    name: "BrightSpot: Social Merchandising Plugin",
    description:
      "A tool developed to help writers and editors expand their social reach by dynamically promoting the popular content across publication platforms.",
    image: arizent,
    flowchartImage: brightspot,
  },
  {
    name: "Shopify Paywall Solution",
    description:
      "A custom paywall system created for clients using Shopify to offer subscription-based services, enabling websites to securely manage user access and content restrictions.",
    image: paywall,
  },
];

const events = [
  {
    image: flatiron1,
    title: "Flatiron Health | ML Platforms - Archery Offsite",
    location: "Gotham Archery, NYC",
    date: "October 25, 2022",
    longDescription: "A fun team-building day at Gotham Archery with the ML Platforms team.",
  },
  {
    image: flatiron2,
    title: "Flatiron Health | 10 Year Anniversary",
    location: "Brooklyn, NY",
    date: "June 16, 2022",
    longDescription: "Celebrating 10 years of innovation and growth at Flatiron Health.",
  },
  {
    image: flatiron3,
    title: "Flatiron Health | All-Hands 2023 (Team Zelda)",
    location: "Chelsea Peirs, NYC",
    date: "May 18, 2023",
    longDescription: "Company-wide meeting discussing goals and upcoming projects.",
  },
  {
    image: fun4,
    title: "Moogle | Career Networking Event",
    location: "Frying Pan, NYC",
    date: "July 12, 2022",
    longDescription: "A networking event for tech professionals hosted by Moogle.",
  },
];

const githubRepos = {
  JavaScript: [
    {
      name: "WeatherOrNot",
      visibility: "Private",
      description: "JavaScript project that focuses on weather forecasting, using Docker, Node.js, and React.",
      lastUpdated: "Updated last week",
    },
    {
      name: "SubPaywall",
      visibility: "Private",
      description: "JavaScript-based solution for a subscription paywall, leveraging MIT License and Express.js.",
      lastUpdated: "Updated on Apr 24, 2022",
    },
    {
      name: "ReactTemplateProject",
      visibility: "Private",
      description: "Built with JavaScript, this project implements a React template structure using modern frontend technologies.",
      lastUpdated: "Updated on Apr 21, 2022",
    },
    {
      name: "fashion-api",
      visibility: "Private",
      description: "This JavaScript project handles MongoDB queries, developed using Express.js and Node.js.",
      lastUpdated: "Updated on Nov 8, 2020",
    },
    {
      name: "fashion-ios",
      visibility: "Private",
      description: "JavaScript project designed for managing a Fashion iOS app, using Node.js and MongoDB.",
      lastUpdated: "Updated on Mar 16, 2021",
    },
    {
      name: "IMS",
      visibility: "Public",
      description: "Inventory Management System built with JavaScript, focusing on Node.js and MongoDB.",
      lastUpdated: "Updated on Aug 27, 2020",
    },
    {
      name: "StreamCounter",
      visibility: "Public",
      description: "A JavaScript project built for creating music countdown timers in Streamlabs OBS, leveraging JavaScript and OBS plugins.",
      lastUpdated: "Updated on Jul 26, 2020",
    },
  ],
  Python: [
    {
      name: "SOTWBot",
      visibility: "Private",
      description: "Python project that provides tournament information to Discord, using TempleOSRS API and Discord.py.",
      lastUpdated: "Updated 2 weeks ago",
    },
    {
      name: "OCRDigitData",
      visibility: "Public",
      description: "Machine learning project that identifies digit shapes using a Naive Bayes classifier in Python.",
      lastUpdated: "Updated on Mar 26, 2020",
    },
    {
      name: "Kalman2D",
      visibility: "Public",
      description: "Python project focused on machine learning triangulation using Kalman filters.",
      lastUpdated: "Updated on Apr 15, 2020",
    },
    {
      name: "osrsplugintracker",
      visibility: "Private",
      description: "Python-based solution for tracking OSRS plugins, leveraging Python and OSRS APIs.",
      lastUpdated: "Updated on Mar 6",
    },
    {
      name: "Beanstalk",
      visibility: "Private",
      description: "Python project built for financial firm automation, leveraging custom-built Python solutions.",
      lastUpdated: "Updated on May 29, 2021",
    },
    {
      name: "UltimateHandicapperApi",
      visibility: "Private",
      description: "Python API developed for the Ultimate Handicapper system, focusing on betting algorithms.",
      lastUpdated: "Updated on Mar 14, 2021",
    },
    {
      name: "ShopifyBotTagger",
      visibility: "Private",
      description: "Python-based solution that integrates Shopify customer data with SQL databases.",
      lastUpdated: "Updated on Mar 26, 2020",
    },
    {
      name: "AIGuessingGame",
      visibility: "Public",
      description: "A Python-based AI guessing game that learns through gameplay.",
      lastUpdated: "Updated on Mar 26, 2020",
    },
    {
      name: "ClientServerDNS",
      visibility: "Public",
      description: "Python project focused on DNS server-client architecture for network communication.",
      lastUpdated: "Updated on Mar 26, 2020",
    },
    {
      name: "VegasProfitsStore",
      visibility: "Private",
      description: "Python-based store management system built for Vegas Profits.",
      lastUpdated: "Updated on Oct 14, 2019",
    },
  ],
  Java: [
    {
      name: "BarrowsCryptCounter",
      visibility: "Public",
      description: "Java-based solution for tracking crypt counters in the Barrows minigame, built using RuneLite.",
      lastUpdated: "Updated on Aug 6",
    },
    {
      name: "runelite",
      visibility: "Public",
      description: "Open-source OSRS client developed with Java, forked from the RuneLite repository.",
      lastUpdated: "Updated on Aug 29, 2023",
    },
    {
      name: "plugin-hub",
      visibility: "Public",
      description: "Java project forked from the official RuneLite plugin hub repository.",
      lastUpdated: "Updated on Aug 6",
    },
    {
      name: "Barrows-Door-Highlighter-Extension",
      visibility: "Public",
      description: "RuneLite Plugin for highlighting doors in the Barrows minigame, built with Java.",
      lastUpdated: "Updated on Aug 20, 2022",
    },
    {
      name: "wintertodtelite",
      visibility: "Public",
      description: "Java-based project developed for the Wintertodt minigame in OSRS.",
      lastUpdated: "Updated on Mar 27, 2022",
    },
    {
      name: "farming-contract-extension",
      visibility: "Public",
      description: "Java plugin developed for RuneLite, focused on extending farming contract features.",
      lastUpdated: "Updated on Mar 31, 2023",
    },
    {
      name: "Discord-Collection-Logger",
      visibility: "Public",
      description: "Java project that posts collection log items and pets to Discord, built for OSRS players.",
      lastUpdated: "Updated on Jan 16, 2023",
    },
  ],
  TypeScript: [
    {
      name: "shopifywall",
      visibility: "Private",
      description: "TypeScript-based project for building an admin template using Chakra UI and React.",
      lastUpdated: "Updated on Feb 2",
    },
    {
      name: "UltimateHandicapper",
      visibility: "Private",
      description: "TypeScript project focused on the Ultimate Handicapper betting system, utilizing React.",
      lastUpdated: "Updated on Mar 16, 2021",
    },
    {
      name: "fashion-ios",
      visibility: "Private",
      description: "TypeScript-based Fashion iOS App developed with modern UI frameworks.",
      lastUpdated: "Updated on Mar 16, 2021",
    },
    {
      name: "Beanstalk",
      visibility: "Private",
      description: "Custom TypeScript solution developed for a financial services company.",
      lastUpdated: "Updated on May 29, 2021",
    },
    {
      name: "nativescript-filter-select",
      visibility: "Public",
      description: "TypeScript project for building a filter select plugin in NativeScript, forked from moayadnajd.",
      lastUpdated: "Updated on Jun 20, 2019",
    },
  ],
  C: [
    {
      name: "TCPServerClient",
      visibility: "Public",
      description: "C project focused on building a TCP server-client architecture for network protocols.",
      lastUpdated: "Updated on Sep 26, 2020",
    },
    {
      name: "Unity Game Development Scripts",
      visibility: "Public",
      description: "C# scripts developed for Unity game projects, aiding in C# learning.",
      lastUpdated: "Updated on Mar 4, 2021",
    },
  ],
};

const technologySentences = {
  Python: [
      "Matt made an NFL Prediction app using Python's data analysis tools in 2022.",
      "Using Python, Matt made a competitive Trivia chat-intragtion for Twitch streamers.",
      "Matt used Python to maintain hundreds of cancer research models at Flatiron Health."
  ],
  AWS: [
      "Matt created his first EC2 instance in 2022, and recieved his first expensive AWS bill the month after.",
      "Matt learned the heavy role of managing IAM policies in 2022.",
      "Matt scaled infrastructure up, down, and all around at Flatiron Health."
  ],
  Docker: [
      "Matt started using Docker to create projects in 2022.",
      "Matt orchestrated Docker environments at Arizent and Flatiron Health."
  ],
  Jenkins: [
      "Matt used Jenkins CI/CD to check for code quality at Flatiron Health.",
      "Matt wired Git commits to Jenkins to allow fast and continuous value.",
  ],
  Terraform: [
      "Matt managed Blue/Green deployments using Terraform at Flatiron Health.",
      "Matt's wife Brenna is way better at Cloud Engineering than he is."
  ],
  MySQL: [
      "Matt made his first MySQL database when he was 13 years old, it still lives to this day.",
      "Matt gave a short lecture in high school to his classmates on the costly effects of unoptimizationed queries",
  ],
  Shopify: [
      "Matt assisted over 30 businesses get started working with Shopify for eCommerce solutions.",
      "Matt automated a Shopify business to over $12k/month and increased returning subscriptions by 300%."
  ],
  Unity: [
    "Matt has developed a handful of mobile games using Unity across iOS and Playstore.",
    "Matt crafted a fully immersive AR/VR space exploration game with Unity.",
    "Matt designed an action-packed marine biology game using Unity."
  ],
  Slack: [
    "Matt's made dozens of Slack app integrations, his favorite's were tailored for data scientists.",
    "Matt made over 100 custom emojis to improve team morale and keep spirits high.",
    "Matt loves using Slack huddles for quick team discussions."
  ],
  React: [
    "Matt built this site using React, thank you for stopping by!",
    "Matt has developed several high functioning platforms with React's efficient architecture.",
    "Matt utilizes React to create products that cater to the best possibilities in user experience."
  ]
};


export { technologySentences, experiences, recentProjects, events, githubRepos, latestExperiences, IconShadows };

