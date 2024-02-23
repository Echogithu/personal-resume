import { anwu, ruixin, guangong } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  webpack,
  git,
  github,
  html,
  javascript,
  linkedin,
  vue,
  nodejs,
  pricewise,
  react,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  uniapp,
  antdesign,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: antdesign,
    name: "antdesign",
    type: "Frontend",
  },
  {
    imageUrl: vue,
    name: "vue",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: webpack,
    name: "Webpack",
    type: "Frontend",
  },
  {
    imageUrl: uniapp,
    name: "uni-app",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
];

export const experiences = [
  {
    title: "前端开发工程师",
    company_name: "暗物智能科技有限公司",
    department: "教育智能硬件产品部",
    icon: anwu,
    iconBg: "#fbc3bc",
    date: "2020.06 - 2021.10",
    points: [
      `公司介绍：暗物智能科技公司致力于打造新一代基于强认知的人工智能技术平台。`,
      `工作职责：1. 参与公司部分产线中应用系统的前端开发，包括 PC 端 Web 页面、移动端 H5 页面、小程序、移动端
混合开发中前端方面的支持；2. 参与公司前端组件库和前端框架的建设和完善，提升开发效率；3. 参与前端开发技术规
范讨论与制定、参与前端部门技术分享。`,
      `工作成果：1. 完成 AILA 智能家长端小程序和后台管理系统的开发; 2. 完成智慧法院小程序、智慧检索平台，并获得《信息安全技术网络安全等级保护基本要求》第三级要求认证。`,
    ],
  },
  {
    title: "前端开发工程师",
    company_name: "睿心智能医疗科技有限公司",
    department: "研发部",
    icon: ruixin,
    iconBg: "#a2d2ff",
    date: "2021.12 - 2023.11",
    points: [
      `公司介绍：睿心医疗专注于在心脑血管医疗中应用人工智能和大数据，以深度学习、流体力学分析和云计算等技术
  进行自主研发，提供智能、精准的医疗解决方案，旨在确保检测准确的同时提升诊疗效率。`,
      `工作职责：1. 参与项目架构与流程设计，负责关键模块的开发和优化；2. 根据业务场景和产品需求，负责项目代码的设
  计与实现，积极参与团队性能优化工作，以提高用户交互体验；3. 参与公司前端公共组件库的维护，参与研发部门技
  术分享。`,
      `工作成果：1. 实现线上版的 DICOM Viewer 阅片器，并投入商业使用; 2. 参与建模软件的设计和开发，成功将复杂建模软件业务落地;
  3. 学习 C++ 服务端渲染技术，将图像渲染全程的时间从100ms/张降低至10ms/张。`,
    ],
  },
];

export const educations = [
  {
    title: "计算机与网络安全学院",
    school_name: "东莞理工学院",
    specialty: "网络工程",
    icon: guangong,
    iconBg: "#88DD8D",
    date: "2016.09 - 2020.06",
    points: [
      `GPA：3.86 （专业前5%）`,
      `CET-4`,
      `荣誉/奖项：三年一等奖学金、优秀大学生称号、东莞大学生移动互联网应用大赛三等奖。`,
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
