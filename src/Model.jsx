import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("static/vaca.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.73}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[-21.61, 2.25, -35.35]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dairy_cow_Mat002_0.geometry}
              material={materials["Mat.002"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("static/vaca.glb");
