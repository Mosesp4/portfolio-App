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
  git,
  solidity,
  mernpg,
  breedsavvy,
  brainWave,
  iphone,
  exchange2,
  promptpal,
  homedock,
  yoga,
  SendEth,
  sipsponsor,
  next,
  figma,
  mongoDB,
  sparkLink,
  threejs,
  ethers,
  vite,
  hardhat,
  chatGenius,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
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

const services = [
  {
    title: "FRONT-END DEVELOPMENT",
    icon: web,
  },
  {
    title: "MERN-STACK",
    icon: mernpg,
  },
  {
    title: "BLOCKCHAIN TECHNOLOGY",
    icon: backend,
  },
  {
    title: "UI/UX DEVELOPMENT",
    icon: figma,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "mongoDB",
    icon: mongoDB,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "vite",
    icon: vite,
  },
];

const experiences = [
  {
    title: "JavaScript",
    company_name: "Core Skills",
    iconBg: "#383E56",

    points: [
      "Solid understanding of JavaScript fundamentals, including variables, data types, operators, control structures, functions, and objects",
      "Experience with DOM manipulation using JavaScript, including event handling and manipulation of HTML and CSS elements.",
      "Understanding of asynchronous programming concepts and proficiency in using Promises and async/await syntax.",
      "Ability to write clean and maintainable code, following best practices and design patterns.",
      "Strong problem-solving skills, including the ability to debug code and troubleshoot issues effectively.",
    ],
  },
  {
    title: "Solidity",
    company_name: "Core Skills",
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
    iconBg: "#383E56",
    points: [
      "Strong understanding of React fundamentals, including components, state and props, JSX syntax, and the virtual DOM.",
      "Experience with React component lifecycle, including the use of hooks and context API for state management.",
      "Familiarity with React Router or other routing libraries for building single-page applications (SPA) and handling client-side navigation.",
      "Experience with popular UI frameworks and libraries that integrate well with React, such as Material-UI.",
    ],
  },
];

const projects = [
  {
    name: "Homedock",
    description:
      " Homedock is a fully functional e-commerce website built to reflect my creativity, speed and precision. Starting from a Figma design prototype to a complete intuitive User-interface.",
    tags: [
      {
        name: "next",
        color: "white",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "white",
      },
      {
        name: "shadcn",
        color: "blue-text-gradient",
      },
    ],
    image: homedock,
    source_code_link: "https://github.com/Mosesp4/SendETH",

    image: homedock,
    live_project: "https://e-commerce-website-ruby-theta-30.vercel.app/",
  },
  {
    name: "SendEth (web3)",
    description:
      "Introducing SendEth, your gateway to seamless and secure Ethereum transactions on the web3 blockchain. With SendEth, sending Ethereum from one person to another has never been easier.",
    tags: [
      {
        name: "react",
        color: "white",
      },
      {
        name: "solidity",
        color: "white",
      },
      {
        name: "tailwind css",
        color: "white",
      },
      {
        name: "hardhat",
        color: "white",
      },
      {
        name: "ethers",
        color: "green",
      },
    ],
    image: SendEth,
    source_code_link: "https://github.com/Mosesp4/SendETH",

    image: SendEth,
    live_project: "https://send-eth-drab.vercel.app/",
  },
  {
    name: "Animated Apple Iphone 3D Website",
    description:
      "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "GSAP",
        color: "blue-text-gradient",
      },
    ],

    image: iphone,
    source_code_link: "https://github.com/Mosesp4/iphone",

    image: iphone,
    live_project: "https://iphone-beta-pearl.vercel.app/",
  },

  {
    name: "Promptpal",
    description:
      "Promptpal is a cutting-edge, open-source AI prompting tool designed to ignite creativity and inspiration in the modern world. Discover, create, and share an endless array of captivating prompts that elevate your creative endeavors to new heights.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "white",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "white",
      },
    ],

    image: promptpal,
    source_code_link: "https://github.com/Mosesp4/promptpal",

    image: promptpal,
    live_project: "https://promptpal-two.vercel.app/",
  },

  {
    name: "BreedSaavy",
    description:
      "Discover the fascinating world of dogs like never before with BreedSavvy, the ultimate web app designed exclusively for dog lovers. Introducing BreedSavvy, an innovative feature within PawFolio that empowers you to explore and understand your canine companion in a whole new light.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],

    image: breedsavvy,
    source_code_link: "https://github.com/Mosesp4/breedSavvy",

    image: breedsavvy,
    live_project: "https://breed-savvy.vercel.app/",
  },

  {
    name: "BRAINWAVE: AI Chatting UI",
    description:
      "Designed and implemented a responsive AI chat interface using React.js and Tailwind CSS, providing a business solution for companies leveraging AI to automate customer service processes.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: brainWave,
    source_code_link: "https://github.com/Mosesp4/BrainWave-UI",

    image: brainWave,
    live_project: "brain-wave-ui-jade.vercel.app",
  },

  {
    name: "Sipsponsor (web3)",
    description:
      "Welcome to SipSponsor, the revolutionary 'buy me a coffee' Web3 project with a heart for social impact. At SipSponsor, we believe in harnessing the power of Web3 technology to make a positive change in the lives of the less privileged.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      {
        name: "ethers",
        color: "black",
      },
      {
        name: "chakraUI",
        color: "white",
      },
      {
        name: "typescript",
        color: "white",
      },
    ],
    image: sipsponsor,
    source_code_link: "https://github.com/Mosesp4/SipSponsor",

    image: sipsponsor,
    live_project: "https://sip-sponsor.vercel.app/",
  },

  {
    name: "SparkLink",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind css ",
        color: "pink-text-gradient",
      },
    ],
    image: sparkLink,
    source_code_link: "https://github.com/Mosesp4/Sparklink",

    image: sparkLink,
    live_project: "https://sparklink-mosesp4.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
