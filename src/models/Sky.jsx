import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky1.glb";

export default function Sky({ isRotating }) {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  // 它通过使旋转帧速率独立来确保平滑的动画
  // “delta”表示自上一帧以来的时间（以秒为单位）。
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh ref={skyRef} scale={[0.5, 0.5, 0.5]}>
      <primitive object={sky.scene} />
    </mesh>
  );
}
