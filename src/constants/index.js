import {
  anwu,
  ruixin,
  guangong,
  project1,
  project2,
  project3,
} from "../assets/images";
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
    iconUrl: summiz,
    theme: "btn-back-blue",
    name: "DICOM Viewer 医学影像阅片器",
    description: `一个高效的在线 DICOM Viewer 医学影像阅片器，提供了快速流畅的医学影像阅读体验；支持多种
      DICOM 图像模态，使医疗专业人员能够准确、快速地分析和诊断患者影像；通过灵活的挂片布局和多元化的医学
      影像工具，提升了医学影像分析的准确性和效率。`,
    link: project1,
  },
  {
    iconUrl: summiz,
    theme: "btn-back-blue",
    name: "睿心分数",
    description: `该项目是一个建模软件的开发，主要应用于无创冠脉供血功能评估；通过医学图像的二维和三维可视化
    处理，提供了中心线编辑、轮廓编辑和计算模型等功能，提高血管功能评估的准确率。`,
    link: project2,
  },
  {
    iconUrl: summiz,
    theme: "btn-back-blue",
    name: "3D 配置器",
    description: `DIY 椅子,可自定义椅子材料、颜色等。`,
    link: project3,
    live: "https://echogithu.github.io/chair-configurator/",
  },
];
