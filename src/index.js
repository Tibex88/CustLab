import React from "react"
import { createRoot } from "react-dom/client"

import ReactDOM from "react-dom"
import "./styles.css"
import "react-colorful/dist/index.css"
import App from "./App"
import Home from "./Home"
import { BrowserRouter } from "react-router-dom"
import  "./components/Navbar/styles1.css"


createRoot(document.getElementById("root"))
.render(
    <BrowserRouter> 
        <Home />
    </BrowserRouter>
)
