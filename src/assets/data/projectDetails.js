import react from "@/assets/images/tech-stack/react.svg";
import gitEnabled from "@/assets/images/gitEnabled.png";
import gitDisabled from "@/assets/images/gitDisabled.png";
import project from "@/assets/images/project-Images/jntugv.png";
import calculator from "@/assets/images/project-Images/calculator.png";
import hopecare from "@/assets/images/project-Images/hopecare.jpeg";
import climatecompass from "@/assets/images/project-Images/climatecompass.jpeg";
import gemini from "@/assets/images/gemini.png";
import next from "@/assets/images/tech-stack/next.svg";
import geminiChat from "@/assets/images/project-Images/geminiChat.png";
import currencyApp from "@/assets/images/project-Images/currencyApp.png";
import figma from "@/assets/images/tech-stack/figma.svg";
import angular from "@/assets/images/tech-stack/angularjs.svg";
import material from "@/assets/images/material-ui.svg";
import expo from "@/assets/images/expo.svg";
import python from "@/assets/images/tech-stack/python.svg";

import aura1 from "@/assets/images/project-Images/aura.jpeg";
import aura2 from "@/assets/images/project-Images/aura2.jpg";
import aura3 from "@/assets/images/project-Images/aura3.jpeg";

import cc1 from "@/assets/images/project-Images/cc1.png";
import cc2 from "@/assets/images/project-Images/cc2.png";

import gcb1 from "@/assets/images/project-Images/gcb1.jpeg";
import gcb2 from "@/assets/images/project-Images/gcb2.jpeg";

import hc1 from "@/assets/images/project-Images/hc1.png";
import hc2 from "@/assets/images/project-Images/hc2.png";
import logo from "@/assets/images/project-Images/logo.png";

import currencyC1 from "@/assets/images/project-Images/currencyC1.png";
import currencyC2 from "@/assets/images/project-Images/currencyC2.png";

import Aceternity from "@/assets/images/tech-stack/Aceternity.png";
import tailwind from "@/assets/images/tech-stack/tailwindcss.svg";


const projectDetails = [
  {
    title: "Aura Image Generation",
    titleImage: aura1,
    desc: `Aura Image Generation is Machine Learning based image generation application. 
    It uses Convolutional Neural Networks to generate Aura Image of a given human image. Which the image is a thermal image of a human.
    Generates aura using the Chakras mapping with the help of Machine Learning. Algorithms used in the Project are Support Vector machine, 
    Logistic Regression, K-Means Clustering, K-Nearest Neighbours, Neural Networks.`,
    website: "",
    gitImage: gitEnabled,
    gitLink: "https://github.com/KanithiSubramanyam/Aura_image_generation",
    category: "AI",
    techUsed: [
      { tech: "Python", image: python },
    ],
    images: [aura1, aura2, aura3],
  },
  {
    title: "Personal Notepad",
    titleImage: geminiChat,
    desc: `Personal Notepad is a web application which replaces the traditional notepad.
     It is a simple and easy to use application which allows users to write notes, save them, and delete them. 
     It is a web application which is built using React.js and deployed on Netlify. It is a Progressive Web Application (PWA).`,
    website: "https://personal-notepads.netlify.app",
    gitImage: gitEnabled,
    gitLink: "https://github.com/KanithiSubramanyam/personal-notepad",
    category: "Web", // Assigning category to each project
    techUsed: [
      { tech: "React", image: react },
      { tech: "Expo", image: expo },
    ],
    images: [gcb1, gcb2],
  },
  {
    title: "To Do List (Track Based)",
    titleImage: hopecare,
    desc: `Track Based To Do List is a web application which saves the tasks for each user where it tracks the lifecycle of the 
    task. It is a web application which is built using React.js and deployed on Netlify. It is a Progressive Web Application (PWA).
    Which it has four stages of tasks: To Do, In Progress, Completed, and Deleted.`,
    website: "https://advanced-to-do-list.netlify.app",
    gitImage: gitEnabled,
    gitLink: "https://github.com/KanithiSubramanyam/Advanced-React-To-do-List-app",
    category: "Web", // Assigning category to each project
    techUsed: [
      { tech: "React Js", image: react },
    ],
    images: [hc1, hc2],
  },

  {
    title: "To Do List",
    titleImage: climatecompass,
    desc: `Simple To Do List which is a simple to do list that we can create and delete tasks. 
    It is a web application which is built using React.js and deployed on Netlify. It is a Progressive Web Application (PWA).`,
    website: "https://subbu-to-do-list-app.netlify.app",
    gitImage: gitEnabled,
    gitLink: "https://github.com/KanithiSubramanyam/React-to-do-list-app",
    category: "Web", // Assigning category to each project
    techUsed: [
      { tech: "React Js", image: react },
      { tech: "Material UI", image: material },
    ],
    images: [cc1, cc2],
  },

  {
    title: "Behance Clone App",
    titleImage: currencyApp,
    desc: `Behance Clone app is a Behnace website which is clone of the website. It is a web application which is built using React.js and deployed on Netlify.`,
    website: "https://behance-clone-subramanyam.netlify.app",
    gitImage: gitEnabled,
    gitLink: "https://github.com/KanithiSubramanyam/Behance-Clone-App",
    category: "Web", // Assigning category to each project
    techUsed: [
      { tech: "React Js", image: react },
      { tech: "TailWind CSS", image: tailwind },
    ],
    images: [currencyC1, currencyC2],
  }, {
    title: "Infusion Techno Solutions",
    titleImage: logo,
    desc: `Infusion Techno Solutions is a web application which is a Application that is built for a software company. 
    It is a web application which is built using Laravel and deployed on godday.
    The application is built for a reputated company called infusion techno solutions`,
    website: "www.infusiontechnosolutions.com/",
    gitImage: gitDisabled,
    gitLink: "",
    category: "Web", // Assigning category to each project
    techUsed: [
      { tech: "React Js", image: react },
      { tech: "Material UI", image: material },
    ],
    images: [logo],
  },
];

export default projectDetails;
