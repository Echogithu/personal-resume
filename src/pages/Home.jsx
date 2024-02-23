import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, Sky } from "@react-three/drei";
import Island from "../models/Island.jsx";
import Bird from "../models/Bird.jsx";
import Plane from "../models/Plane.jsx";

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        个人信息
      </div> */}
      <Canvas
        className="w-full h-screen relative"
        camera={{ near: 0.1, far: 1000 }}
      >
        {/* 加载异步资源时显示加载指示器或者备用内容，以提高用户体验 */}
        <Suspense fallback={<Loader />}>
          {/* 定向光 */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          {/* 环境光*/}
          <ambientLight intensity={0.5} />
          {/* 半球光 */}
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000"
            intensity={1}
          />
          <Bird />
          <Sky />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
          <Plane />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
