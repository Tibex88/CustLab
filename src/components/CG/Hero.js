import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default function Hero() {
  return (
    <>
      <div className="kk">
        <section>
          <div className="video-wrapper">
            <video playsInline autoPlay muted loop poster="cake.jpg">
              <source src="./image/Customize Your SCUF® PS5, PS4, Xbox, or PC Controller Today - Scuf Gaming.mp4" type="video/webm" />
            </video>

            {/* <!-- This will be positioned on top of our video background --> */}
            <div className="desc">
              <h2>UNPARALLELED CUSTOMIZATION</h2>
            </div>
          </div>
          <section className="intro">
            <div className="desc-intro">
              <h2>ENDLESS CUSTOMIZATION.</h2>
              <p>
                Custlab is an online platform where users can upload, view, and share 3D models. It also offers various customization
                options, including the ability to apply custom details or decals to 3D models.
              </p>
              {/* <p>
                Use code MAXMYPS4 to build your Impact or Infinity for $199.99, code MAXMYPS5 to build your Reflex for $239.99, or code
                MAXMYXBOX to build your Instinct Pro for $199.99
              </p> */}
            </div>
            <div className="img-intro">
              <img src="./image/ggg.png" alt="" />
            </div>
          </section>

          <section className="choose">
            <h2>Customize your Controller</h2>
            <div className="members">
              <div className="img-members">
                <img src="./image/joystick.png" alt="" />
              </div>
              <div className="desc-members">
                <h2>Customize your Controller</h2>
                <p>choose and enter the 3d shape you want to customize</p>

                <Link to={"/App"}>
                  <button>Customize</button>
                </Link>
              </div>
            </div>
          </section>

          <section className="howitworks">
            <h2>How it Works</h2>

            <div className="howto" id="aboutSection">
              <div className="image">
                <img src="./image/how1.jpg" alt="" />
              </div>
              <div className="content">
                <h3>Select a 3d model</h3>
              </div>
            </div>

            <div className="howto2" id="aboutSection">
              <div className="content">
                <h3>Select a part you want to customize</h3>
              </div>
              <div className="image">
                <img src="./image/how1.jpg" alt="" />
              </div>
            </div>

            <div className="howto" id="aboutSection">
              <div className="image">
                <img src="./image/how1.jpg" alt="" />
              </div>
              <div className="content">
                <h3>Move the cursor on the color picker to change colors.</h3>
              </div>
            </div>

            <div className="howto2" id="aboutSection">
              <div className="content">
                <h3>Select a shape from the given dropdown,or an image of your own.</h3>
              </div>
              <div className="image">
                <img src="./image/how1.jpg" alt="" />
              </div>
            </div>
          </section>

          <div className="gallery">
            <figure className="gallery-item">
              <img src="./image/3d (23).png" alt="end result of customization" />
            </figure>
            <figure className="gallery-item">
              <img src="./image/3d(15).png" alt="3d15" />
            </figure>
            <figure className="gallery-item">
              <img src="./image/3d12.png" alt="3d12" />
            </figure>
            <figure className="gallery-item">
              <img src="./image/3d (34).png" alt="end result of customization" />
            </figure>
            <figure className="gallery-item">
              <img src="./image/3d (32).png" alt="end result of customization" />
            </figure>
            <figure className="gallery-item">
              <img src="./image/3d (29).png" alt="end result of customization" />
            </figure>
          </div>
        </section>
        <footer>
          <p>
            <a href=""> Copyright © 2023 3d Product customization app. All Rights Reserved.</a>
          </p>
        </footer>
      </div>
    </>
  )
}
