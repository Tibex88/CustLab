import React from 'react'

import { HexColorPicker } from "react-colorful"

function ColorPicker({ c }) {
    return (

        <div id="colorCollection" style={{ position: "absolute", top: "75px", right: "180px" }}>
            <HexColorPicker color={c}
            />
        </div>

        // <div style={{ display: snap.current ? "block" : "none" }}>
        //     <HexColorPicker className="picker" onChange={(color) => { return color }} />
        //     <h1>{snap.current}</h1>
        // </div>
    )
}

export default ColorPicker