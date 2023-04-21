import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Floor from './Floor'
import Image from './Image'
import Video from './Video'
import {  Model } from './Model'


export default function Experience() {


    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />
        <directionalLight position={[10,10 , 8]} intensity={2.5} />
        
        <ambientLight intensity={0.5} />
        <Floor/>
        <Model position-y={-2.2} position-z={6} position-x={6} scale={8} />
        <Image/>
        <Video/>
    
    </>
}