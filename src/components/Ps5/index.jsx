import React, { useState, useEffect, useRef } from 'react'
import { useGLTF, useTexture } from "@react-three/drei"
import { ps5 } from "../../store"


const Ps5 = (props) => {

    const [highlight, sethighlight] = useState(false);
    const [highlightColor, sethighlightColor] = useState("#c58d06");

    var count = 0;
    var maxCount = 1;
    var timeout = 500;

    function toggleItem(name) {
        ps5.items.map((el, index) => {
            el.name === name ? el.hidden = false : el.hidden = true
        })
        sethighlight(prevState => (!prevState))
        let interval = setInterval(function () {
            count++;
            sethighlight(prevState => (!prevState))
            console.log(count);
            if (count == maxCount) {
                clearInterval(interval);
            }
        }, timeout);
    }
    const { nodes, materials } = useGLTF('/models/ps5final.glb')
    return (
        <group {...props} dispose={null}
            onClick={(e) => (e.stopPropagation(), (toggleItem(e.object.name)))}>
            {ps5.items.map((mesh, index) => {
                return (
                    <mesh key={index} geometry={nodes[`${mesh.name}`].geometry} name={mesh.name} material={materials[`${mesh.name}`]} position={mesh.position} rotation={[1.43, -0.01, 0.06]}
                        scale={mesh.scale ? mesh.scale : undefined}>
                        <meshStandardMaterial key={index}
                            map={useTexture(mesh.texture)}
                            {...(highlight && !mesh.hidden ? { color: highlightColor } : {})}
                        />
                    </mesh>
                )
            })}
        </group>
    )
}
export default Ps5