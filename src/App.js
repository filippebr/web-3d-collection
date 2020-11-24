import React, { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './App.scss';

import { Canvas, useFrame, extend, useThree } from 'react-three-fiber';

import { softShadows } from 'drei';

softShadows();

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef(null);
  const { camera, gl } = useThree();

  useFrame(() => (
    orbitRef.current.update()
  ))

  return (
    <orbitControls 
      autoRotate
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 2.6}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  )
}

const SpinningMesh = ({position, args, color}) => {
  const mesh = useRef(null);
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += .01));

  return (
    <mesh 
      castShadow 
      position={position} 
      ref={mesh}
    >                 
      <boxBufferGeometry attach='geometry' args={args} />
      <meshStandardMaterial attach='material' color={color} />
    </mesh>
  );
};

const Plane = () => (
  <mesh 
    receiveShadow
    rotation={[-Math.PI / 2, 0, 0]} 
    position={[0, -3, 0]} >
    <planeBufferGeometry attach='geometry' args={[100, 100]} />
    <shadowMaterial attach='material' opacity={.3} />
    {/** This is necessary to cast a shadow */}
  </mesh>
)

const Lights = () => (
  <>
    <ambientLight intensity={.1} />    
    <directionalLight
      castShadow
      position={[0, 10, 0]}
      intensity={1.5}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
    />
    <pointLight position={[-10, 0, -20]} intensity={.5} />
    <pointLight position={[0, -10, 0]} intensity={1.5} />    
  </>
)

function App() {  
  return (
    <>
      <Canvas 
        shadowMap
        colorManagement 
        camera={{position: [-5, 2, 10], fov: 60}}
      >    
         
        <Lights />
        
        <Controls />   
        
        <Plane />

        <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} color='lightblue' />
        <SpinningMesh position={[-2, 1, -5]} color='pink' />
        <SpinningMesh position={[5, 1, -2]} color='pink' /> 
      </Canvas>
    </>
  );
}

export default App;
