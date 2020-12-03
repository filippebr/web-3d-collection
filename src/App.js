import React, { useState, useEffect } from 'react';

import { Canvas } from 'react-three-fiber';
import { softShadows } from 'drei';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// import SpinningMesh from './components/spinningMesh';
import PlaneMesh from './components/planeMesh';
import Controls from './components/Controls';
import Lights from './components/Lights';

import './App.scss';

softShadows();

const SkullMesh = () => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load("/skull_mech.glb", setModel);
  }, []);

  console.log(model);

  return model ? <primitive object={model.scene} /> : null;
}

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
        
        <PlaneMesh />

        <SkullMesh />
      </Canvas>
    </>
  );
}

export default App;
