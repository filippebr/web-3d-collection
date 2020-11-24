import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useFrame, useThree, extend } from 'react-three-fiber';

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

export default Controls;