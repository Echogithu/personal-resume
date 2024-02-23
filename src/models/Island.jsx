/**
 * https://gltf.pmnd.rs/
 * 可以将 gltf 或 glb 文件转化为 jsx 组件
 */

import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from "../assets/3d/island.glb";

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const islandRef = useRef();

  // 获取 Three.js 渲染器和视口
  const { gl, viewport } = useThree();

  const { nodes, materials } = useGLTF(islandScene);

  // 鼠标最后的 x 位置
  const lastX = useRef(0);
  // 旋转速度
  const rotationSpeed = useRef(0);
  // 定义阻尼系数以控制旋转阻尼
  const dampingFactor = 0.95;

  // 处理指针（鼠标或触摸屏）向下事件
  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    // 存储当前的客户端 X 位置
    lastX.current = clientX;
  };

  // 处理指针（鼠标或触摸屏）向上事件
  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  // 处理指针（鼠标或触摸屏）移动事件
  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      // 计算鼠标光标的水平位置的变化
      // 相对 viewport 宽度
      const delta = (clientX - lastX.current) / viewport.width;

      // 根据鼠标/触摸移动更新岛屿的旋转
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;

      // 更新最后一个 clientX 位置
      lastX.current = clientX;

      // 更新转速
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  // 按下键盘事件
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useEffect(() => {
    // 添加指针和键盘事件的事件侦听器
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  // 优化方法
  // 每个帧更新时都会调用此函数
  useFrame(() => {
    // 如果不旋转，请施加阻尼以减慢旋转（平滑）
    if (!isRotating) {
      // 应用阻尼系数
      rotationSpeed.current *= dampingFactor;

      // 当速度很小时停止旋转
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      // 旋转时根据岛屿方向判断当前阶段
      const rotation = islandRef.current.rotation.y;

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // 标准化旋转值以确保其保持在 [0, 2 * Math.PI] 范围内。
      // 目标是确保旋转值保持在特定范围内
      // 防止旋转值非常大或负值的潜在问题。
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
    // {Island 3D model from: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907}
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
};

export default Island;
