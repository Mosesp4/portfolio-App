import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  // tesla,
  git,
  // meta,
  // starbucks,
  solidity,
  // shopify,
  breedsavvy,
  // carrent,
  jobit,
  tripguide,
  threejs,
  ethers,
  hardhat,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FRONT-END DEVELOPER",
    icon: web,
  },
  {
    title: "SOLIDITY DEVELOPER",
    icon: mobile,
  },
  {
    title: "BLOCKCHAIN TECHNOLOGY",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
 
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Ethers",
    icon: ethers,
  },
  {
    name: "hardhat",
    icon: hardhat,
  },
];

const experiences = [
  {
    title: "JavaScript",
    company_name: "Core Skills",
    // icon: starbucks,
    iconBg: "#383E56",
   
    points: [
      "Solid understanding of JavaScript fundamentals, including variables, data types, operators, control structures, functions, and objects",
      "Experience with DOM manipulation using JavaScript, including event handling and manipulation of HTML and CSS elements.",
      "Understanding of asynchronous programming concepts and proficiency in using Promises and async/await syntax.",
      "Ability to write clean and maintainable code, following best practices and design patterns.",
      "Strong problem-solving skills, including the ability to debug code and troubleshoot issues effectively."
    ],
  },
  {
    title: "Solidity",
    company_name: "Core Skills",
    // icon: tesla,
    iconBg: "",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Solid understanding of blockchain technology and the Ethereum platform, including Ethereum Virtual Machine (EVM), smart contracts, and decentralized applications (DApps).",
      "Proficiency in Solidity programming language, including knowledge of data types, control structures, functions, and object-oriented programming concepts.",
      "Experience with development tools for Solidity, such as Remix, Truffle, and Ganache, as well as knowledge of web3.js library for interacting with the Ethereum network.",
      "Knowledge of decentralized finance (DeFi) concepts and protocols, such as Uniswap, Aave, and Compound, and experience in building DeFi applications using Solidity.",
      "Ability to write clean, maintainable, and well-documented code, and follow software development best practices such as version control, testing, and code reviews.",
      "Strong problem-solving skills, including the ability to debug code and troubleshoot issues effectively, and to design and implement robust and scalable smart contracts.",
    ],
  },
  {
    title: "React",
    company_name: "Core Skills",
    // icon: shopify,
    iconBg: "#383E56",
    // date: "Jan 2022 - Jan 2023",
    points: [
      "Strong understanding of React fundamentals, including components, state and props, JSX syntax, and the virtual DOM.",
      "Experience with React component lifecycle, including the use of hooks and context API for state management.",
      "Familiarity with React Router or other routing libraries for building single-page applications (SPA) and handling client-side navigation.",
      "Experience with popular UI frameworks and libraries that integrate well with React, such as Material-UI.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   // icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "BreedSaavy",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: breedsavvy,
    source_code_link: "https://github.com/",
  },
  {
    name: "rhjr",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
