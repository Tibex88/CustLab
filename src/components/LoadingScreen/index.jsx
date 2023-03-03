import React from 'react'
import { Html } from "@react-three/drei"
import "./index.css"
import ContentLoader from "react-content-loader"


const index = () => {
    return (
        <Html className='loading_screen'>
            <ContentLoader
                speed={2}
                width={400}
                height={460}
                viewBox=" 400 460"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
            </ContentLoader>
        </Html>
    )
}

export default index


