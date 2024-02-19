import {Suspense} from 'react'
import { Canvas ,useFrame} from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF,} from '@react-three/drei'
import CanvasLoader from '../Loader'

const Rick = () => {
  const rick  = useGLTF('./mail_box/scene.gltf')
  return (
    <mesh>
    <hemisphereLight intensity={2} groundColor='white' />
    <spotLight
      position={0}
      angle={0.12}
      penumbra={1}
      castShadow
      shadow-mapSize={1024} 
    />
    <primitive
      object={rick.scene}
      scale={[50, 50, 50]}
      position-y={-7}
      rotation-y={0}
    />
  </mesh>
  )
}
 const RickCanvas = () =>{
  return (
    <Canvas 
    shadows
    frameloop='demand'
    camera={{ position: [4, 3, 6], fov: 48, near:0.6 }}

    >
          <Suspense fallback={<CanvasLoader/>}>
            <OrbitControls 
             
             autoRotateSpeed={2}
            enableZoom={false}
             maxPolarAngle={Math.PI /2 }
             minPolarAngle={Math.PI /2 }
              />
              <Rick/>

          </Suspense>
    </Canvas>
  )
 }
export default RickCanvas