import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Echo</span>
        👋
        <br />
        欢迎来到我的小岛 ⛳️
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          <span className="mr-4">📍 深圳</span> 
          <span className="mr-4">💼 3年</span> 
          <span>🎓 本科</span> 
          <br /> 
          <span>📲 13433680844</span>
          <br /> 
          <span>💌 13433680844@163.com</span>
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          了解更多
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          如果好奇我的经历和项目 👀
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          了解更多
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
       如果您需要招聘一名前端开发 👩🏻‍💻
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        欢迎联系我
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
