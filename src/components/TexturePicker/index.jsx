import React from 'react'
import { decals } from "./../../store"

function texturePicker() {

    function drag(ev) {
        console.log(ev);
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function addTexture(e) {
        let image = e.target.files[0]
        decals.push({ path: URL.createObjectURL(image, image.name) })
    }

    function addToCurrentCanvas(e) {
        console.log(e)
    }

    return (
        <>
            <div>texturePicker</div>
            <input type="file" accept="image/*" onChange={(e) => { addTexture(e) }} />
            {decals.map((decal, index) => {
                return (
                    <div>
                        <img onClick={(e) => { addToCurrentCanvas(e) }} onDragStart={(e) => { drag(e) }} draggable={true} src={decal.path} style={styles} alt={index + 'img'} />
                    </div>
                )
            })}
        </>
    )
}

export default texturePicker
