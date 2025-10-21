'use client';

import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1} />;
}

export default function Element() {
  const url = '/Chibi Robo.glb';
  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [0, 1, 3] }}>
        <ambientLight intensity={0.10} />
        <directionalLight position={[2, 2, 2]} />
        <Model url={url} />
        <OrbitControls enableZoom={false}  />
      </Canvas>
    </div>
  );
}
