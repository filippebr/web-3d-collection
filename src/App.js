import React from 'react';

import { Canvas } from 'react-three-fiber';
import { softShadows } from 'drei';

import SpinningMesh from './components/spinningMesh';
import PlaneMesh from './components/planeMesh';
import Controls from './components/Controls';
import Lights from './components/Lights';

import './App.scss';

softShadows();

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

        <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} color='lightblue' />
        <SpinningMesh position={[-2, 1, -5]} color='pink' />
        <SpinningMesh position={[5, 1, -2]} color='pink' /> 
      </Canvas>
    </>
  );
}

export default App;
