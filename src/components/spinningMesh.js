import React, { useRef } from 'react';

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

export default SpinningMesh;