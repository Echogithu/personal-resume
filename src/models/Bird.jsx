import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

// https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export default function Bird() {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);

  // 访问小鸟的动画
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // 使用正弦波更新 Y 位置以模拟鸟类运动
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // 检查鸟是否到达相对于相机的某个端点
    if (birdRef.current.position.x > camera.position.x + 10) {
      // 将方向更改为向后并将小鸟在 y 轴上旋转 180 度
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // 改变方向以向前并重置小鸟的旋转
      birdRef.current.rotation.y = 0;
    }

    // 根据方向更新 X 和 Z 位置
    if (birdRef.current.rotation.y === 0) {
      // 向前移动
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // 向后移动
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
}
