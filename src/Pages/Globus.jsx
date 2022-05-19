import React from "react";
import Earth from "../Components/Eart";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";






const Globus = () => {
    
   
    return (<>       
     <div id="canvas-container">
                <Canvas >
                   <Suspense fallback={null} >
                      <Earth />
                   </Suspense>
                </Canvas>
                
     </div>
                         </>
)
    
}

export default Globus;