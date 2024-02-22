import React from "react";
import { Canvas } from "@react-three/fiber";

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        个人信息
      </div> */}
      <Canvas />
    </section>
  );
};

export default Home;
