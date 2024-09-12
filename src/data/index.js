import {
  arizent,
  bethere,
  paywall,
  brightspot
} from "../assets";

import {
  flatiron1, flatiron2, flatiron3, fun4
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

const experiences = [
  {
    title: "Software Engineer, ML Platforms",
    company_name: "Flatiron Health",
    date: "2022 - 2023",
    details: [
      "Developed machine learning models to enhance real-world oncology evidence, optimizing data processes and pipelines for improved efficiency.",
      "Streamlined data collection and transformation workflows using Python-based solutions, ensuring high-quality patient data.",
      "Improved data pipeline performance by optimizing DAGs, significantly reducing AWS resource processing times and achieving cost savings.",
      "Integrated tools such as SonarQube to ensure test coverage and maintain patient data integrity throughout the model lifecycle."
    ],
    icons: [
      { name: "FaPython", label: "Python" },
      { name: "FaAws", label: "AWS" },
      { name: "FaDocker", label: "Docker" },
      { name: "SiJenkins", label: "Jenkins" },
      { name: "SiPytorch", label: "PyTorch" },
      { name: "SiTerraform", label: "Terraform" }
    ]
  },
  {
    title: "Full Stack Software Engineer",
    company_name: "Arizent",
    date: "2020 - 2022",
    details: [
      "Led the development of new content types using Java, JavaScript, and MySQL, increasing user engagement by 30%.",
      "Collaborated with designers to integrate creative concepts, enhancing platform functionality and technical feasibility.",
      "Engineered platform enhancements, from backend Java services to frontend component development, improving system reliability and reducing downtime."
    ],
    icons: [
      { name: "FaJava", label: "Java" },  // Corrected from DiJava to FaJava
      { name: "SiMysql", label: "MySQL" },  // Corrected from DiMysql to SiMysql
      { name: "FaDocker", label: "Docker" },
      { name: "FaGit", label: "Git" },
      { name: "FaGithub", label: "GitHub" }
    ]
  },
  {
    title: "Shopify Consultant",
    company_name: "Freelance",
    date: "2018 - 2020",
    details: [
      "Developed unique store applications by modifying the Shopify backend, providing custom solutions for eCommerce businesses.",
      "Created and maintained a custom API that backed up customer data on a private Apache/SQL server and managed HTML views with dynamic data.",
      "Configured the API to manage product expiration, automatically removing customer access to expired content.",
      "Successfully facilitated contracts with 20 businesses, ensuring client satisfaction through reliable and scalable solutions."
    ],
    icons: [
      { name: "SiShopify", label: "Shopify" },  // Corrected from FaShopify to SiShopify
      { name: "FaDatabase", label: "SQL" },
      { name: "FaHtml5", label: "HTML" },
      { name: "FaLinux", label: "Linux" }
    ]
  },
  {
    title: "Junior Application Developer",
    company_name: "Rutgers University",
    date: "2018",
    details: [
      "Integrated new processes to enhance UX design using open-source software, Drupal, for internal employee modules.",
      "Developed bash scripts to automate data downloads on Unix systems.",
      "Redesigned HTML/CSS for the University Online Learning conference, utilizing Bootstrap for improved responsiveness and accessibility."
    ],
    icons: [
      { name: "FaLinux", label: "Linux" },
      { name: "FaHtml5", label: "HTML" },
      { name: "FaCss3", label: "CSS" },
      { name: "SiBootstrap", label: "Bootstrap" },  // Corrected from FaBootstrap to SiBootstrap
      { name: "FaDrupal", label: "Drupal" },
    ]
  },
  {
    title: "Bachelors, Computer Science",
    company_name: "Rutgers University",
    date: "2016 - 2020",
    details: [
      "Earned a Bachelor of Science in Computer Science, gaining proficiency in software engineering, machine learning, and data analysis.",
      "Worked on projects involving data analysis and computer architecture.",
      "Minored in Digital Communications and Information Management (DCIM), focusing on the intersection of digital technology and communication."
    ],
    icons: [
      { name: "FaPython", label: "Python" },
      { name: "FaJava", label: "Java" },
      { name: "FaLinux", label: "Linux" },
    ]
  }
];

const portfolio = [
  {
    name: "Arizent: Social Merchandising",
    description:
      "A tool developed to help writers and editors expand their work and social networks by promoting the process of sharing popular content across platforms.",
    image: arizent,
    flowchartImage: brightspot,
  },
  {
    name: "BeThere",
    description:
      "A platform developed to enhance social experiences that helps users connect with others in their area; building stronger offline communities and expanding personal networks.",
    image: bethere,
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
      name: "WeatherApp",
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
      name: "osrsplugintracker",
      visibility: "Private",
      description: "Python-based solution for tracking OSRS plugins, leveraging Python and OSRS APIs.",
      lastUpdated: "Updated on Mar 6",
    },
    {
      name: "Kalman2D",
      visibility: "Public",
      description: "Python project focused on machine learning triangulation using Kalman filters.",
      lastUpdated: "Updated on Apr 15, 2020",
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
      visibility: "Public",
      description: "Python-based solution that integrates Shopify customer data with SQL databases.",
      lastUpdated: "Updated on Mar 26, 2020",
    },
    {
      name: "OCRDigitData",
      visibility: "Public",
      description: "Machine learning project that identifies digit shapes using a Naive Bayes classifier in Python.",
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


export { experiences, portfolio, events, githubRepos };

