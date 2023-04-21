import { useVideoTexture } from "@react-three/drei"
import { DoubleSide } from "three"
import {  useState } from "react"




export default function Video() {
    
    const [pause, setPause] = useState(false)
   
    
    const props = {
        unsuspend: 'canplay',
        muted: true,
        loop: true,
        start: pause
    }
    
    const videoTexture = useVideoTexture("./static/video/paisaje.mp4", props)

    const playVideo = () =>{
        setPause(true)
    }

    return (
        <mesh receiveShadow position-z={6} position-y={ 6.5 } position-x={-9} rotation-y={ Math.PI * 0.5 } onClick={playVideo}>
            <planeGeometry args={[30, 18]} />
            <meshStandardMaterial map={videoTexture}  side={DoubleSide} />
        </mesh>
    )
}