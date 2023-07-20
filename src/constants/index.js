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
  breedsavvy,
  exchange1,
  exchange2,
  promptpal,
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
    title: "TECHNICAL WRITER",
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
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
    name: "SendEth (web3)",
    description:
      "Introducing SendEth, your gateway to seamless and secure Ethereum transactions on the web3 blockchain. With SendEth, sending Ethereum from one person to another has never been easier. SendEth provides you with a clear and comprehensive record of all your Ethereum transfers with gif, allowing you to monitor and review your activity at any time.",
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
    name: "MoSwap UI",
    description:
      "Welcome to MoSwap, a stunning Reactjs and Vanilla CSS creation that brings the excitement of a real crypto swap landing page right to your screen. Immerse yourself in the world of digital assets and experience the future of cryptocurrency trading with our meticulously designed user interface.",
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
        name: "css",
        color: "pink-text-gradient",
      },

      
    ],
    image: exchange1,
    source_code_link: "https://github.com/Mosesp4/DeFi-React-UI",

    image: exchange1,
    live_project: "https://de-fi-react-ui.vercel.app/",
  },

  {
    name: "CryptoWatch",
    description:
    "Introducing CryptoWatch, the ultimate web app designed to keep you updated on the latest cryptocurrency prices. With Crypto Watch, you'll never miss a beat in the dynamic world of digital assets. Stay ahead of the game with real-time price updates for a wide range of cryptocurrencies. Our web app brings together a comprehensive collection of crypto data, providing you with instant access to the prices of popular coins and tokens. From Bitcoin and Ethereum to altcoins and stablecoins, CryptoWatch covers it all.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },

      
    ],
    image: exchange2,
    source_code_link: "https://github.com/Mosesp4/CoinWatch/tree/main",

    image: exchange2,
    live_project: "https://coin-watch-azure.vercel.app/",
  },

  {
    name: "Breathe & Balance",
    description:
      "With our user-friendly interface, booking your desired yoga session has never been easier. Browse through the available classes, check schedules, and secure your spot with just a few clicks. Say goodbye to phone calls and lengthy registration processes. BREATHE & BALANCE streamlines the booking experience for ultimate convenience.",
    tags: [
      {
        name: "Reactjs",
        color: `{white}`,
      },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      {
        name: "css",
        color: "pink-text-gradient",
      },

      
    ],
    image: yoga,
    source_code_link: "https://github.com/Mosesp4/yoga",

    image: yoga,
    live_project: "https://yoga-ebon-alpha.vercel.app",
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
    name: "Chat-Genius",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },

      {
        name: "express",
        color: "pink-text-gradient",
      },

      
    ],
    image: chatGenius,
    source_code_link: "https://github.com/Mosesp4/Chat-Genius",

    image: chatGenius,
    live_project: "https://chat-genius-1j1o361kc-mosesp4.vercel.app/?vercelToolbarCode=wRFFrprS13V2Vd0",
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
