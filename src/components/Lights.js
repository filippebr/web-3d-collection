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
    <pointLight position={[10, 0, 50]} intensity={.5} />
    <pointLight position={[0, -10, 0]} intensity={1.5} />    
  </>
);

export default Lights;