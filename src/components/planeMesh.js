const Plane = () => (
  <mesh 
    receiveShadow
    rotation={[-Math.PI / 2, 0, 0]} 
    position={[0, -3, 0]} >
    <planeBufferGeometry attach='geometry' args={[100, 100]} />
    {/* <meshPhysicalMaterial attach='material' color='red' /> */}
    <shadowMaterial attach='material' opacity={.3} />
    {/** This is necessary to cast a shadow */}
  </mesh>
)

export default Plane;