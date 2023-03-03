import "./index.css"
import React, { useRef, useEffect, createRef, useState } from "react"
import { FaTimes, FaPlus } from "react-icons/fa"
import { BsFillPencilFill, BsLayerBackward, BsLayerForward } from "react-icons/bs"
import { useProxy } from "valtio"
import { fabric } from "fabric"
import { HexColorPicker } from "react-colorful"
import { ps5, drawingMode } from "../../store/index"

const Modal = () => {
  let snap = useProxy(ps5)
  const drawingmode = useProxy(drawingMode)

  const [canvas, setCanvas] = useState([])
  const [brushColor, setbrushColor] = useState("#A7A9AC")
  const [brushSize, setbrushSize] = useState(24)
  const [tctx, setCtx] = useState({})
  const [savedColors, setSavedColor] = useState([])

  const canvasRefs = useRef(snap.items.map(() => createRef()))
  const objectSelector = useRef()
  const colorWidth = useRef(24)
  const colorPen = useRef(null)
  const tCan = useRef()

  let eyeDropper;

  useEffect(() => {
    // console.log(tCan.current)
    // setCtx(temp)
    // setCtx(tCan.current.getContext("2d"))

    let t = canvasRefs.current.map((canva, index) => {
      var canv = new fabric.Canvas(canva.current, {
        preserveObjectStacking: true,
        backgroundColor: "rgba(255, 255, 255, 1)",
        drawingmode,
      })
      // canv.setBackgroundColor("rgba(255, 255, 255, 1)")
      if (canv.freeDrawingBrush) {
        canv.freeDrawingBrush.color = brushColor
        canv.freeDrawingBrush.width = brushSize
      }
      canv.on("after:render", function (options) {
        setDrawing(index)
      })

      return canv
    })
    setCanvas(t)
  }, [])

  useEffect(() => {
    setCtx(tCan.current.getContext("2d"))
  }, [tCan])

  function clearCanvas() {
    let conformation = confirm("Are you sure you want to clear canvas this operation is not reversable?")
    if (conformation) {
      let index = findActiveCanvas()
      canvas[index].forEachObject(function (obj) {
        canvas[index].remove(obj);
      })
      canvas[index].backgroundColor = "white"
    }
  }

  function setDrawing(index) {
    canvasRefs.current[index].current.toBlob(function (blob) {
      ps5.items[index].texture = URL.createObjectURL(blob, "img.jpeg") //dynamic texture targeting
    })
  }

  function findActiveCanvas() {
    return ps5.items.findIndex((el) => el.hidden == false)
  }

  function color(color) {
    let index = findActiveCanvas()
    setbrushColor(color)
    setbrushSize(colorWidth.current.value)
    // colorPen.current.style.color = brushColor
    colorWidth.current.style.display = "inline"

    canvas[index].freeDrawingBrush.color = brushColor
    var checkObj = canvas[index].getActiveObject()

    if (checkObj) {
      if (checkObj.get("type") != "path") checkObj.set("fill", brushColor)
      checkObj.set("stroke", brushColor)
      canvas[index].renderAll()
    }
    else {
      canvas[index].backgroundColor = color
      canvas[index].renderAll();
      console.log(canvas[index].backgroundColor)
    }

    tctx.clearRect(0, 0, 60, 35)
    tctx.beginPath()
    tctx.moveTo(brushSize / 2, 35 / 2)
    tctx.lineTo(60 - brushSize / 2, 35 / 2)
    tctx.strokeStyle = brushColor
    tctx.lineWidth = brushSize
    tctx.lineCap = "round"
    tctx.stroke()
  }

  function add() {
    let index = findActiveCanvas()
    var obj;
    switch (objectSelector.current.value) {
      case "rectangle":
        obj = new fabric.Rect({
          width: 100,
          height: 70,
          fill: brushColor,
          left: 0,
          top: 0,
          centeredScaling: false,
          cornerStyle: "circle",
          cornerSize: 28,
          cornerColor: "black"
        })
        // obj.on("mouse:dblclick", function (options) {
        //   canvas[index].discardActiveObject();
        // })
        canvas[index].add(obj)
        break
      case "triangle":
        obj = new fabric.Triangle({
          width: 100,
          height: 75,
          fill: brushColor,
          left: 0,
          top: 0,
        })
        canvas[index].add(obj)
        break
      case "circle":
        obj = new fabric.Circle({
          radius: 50,
          fill: brushColor,
          left: 0,
          top: 0,
        })
        canvas[index].add(obj)
        break
      case "line":
        obj = new fabric.Line([50, 100, 200, 100], {
          left: 0,
          top: 0,
          stroke: brushColor,
          strokeWidth: 8,
        })
        canvas[index].add(obj)
        break
      case "text":
        obj = new fabric.Textbox("Edit this text", {
          left: 0,
          top: 0,
          fill: brushColor,
          strokeWidth: 2,
          fontFamily: "Arial",
        })
        canvas[index].add(obj)
        break
      case "image":
        var input = document.createElement("input")
        input.style.visibility = "hidden"
        input.type = "file"
        input.accept = "image/*"
        input.onchange = async (e) => {
          let image = e.target.files[0]
          fabric.Image.fromURL(URL.createObjectURL(image, image.name), function (oImg) {
            console.log(canvas[index])
            oImg.scaleToWidth(canvas[index].height);
            canvas[index].add(oImg)
          })
        }
        input.click()
        break
      default:
        alert("No")
    }
  }

  function selectObject() {
    drawingMode.value = !drawingmode.value
    canvas.map((el, index) => {
      canvas[index].isDrawingMode = drawingmode.value
    })
  }

  function deleteObjects() {
    let index = findActiveCanvas()

    var active = canvas[index].getActiveObjects()
    if (active) {
      canvas[index].discardActiveObject()
      canvas[index].remove(...active)
    }
  }

  function range() {
    let index = findActiveCanvas()
    setbrushSize(colorWidth.current.value)
    let temp = tCan.current.getContext("2d")
    temp.clearRect(0, 0, 60, 35) //comment out
    temp.beginPath()
    temp.moveTo(brushSize / 2, 35 / 2)
    temp.lineTo(60 - brushSize / 2, 35 / 2)
    temp.lineWidth = brushSize
    temp.lineCap = "round"
    temp.stroke()
    canvas[index].freeDrawingBrush.width = brushSize
  }

  function sendToBack() {
    let index = findActiveCanvas()
    var active = canvas[index].getActiveObjects()
    canvas[index].sendToBack(active[0])
  }

  function sendToFront() {
    let index = findActiveCanvas()
    var active = canvas[index].getActiveObjects()
    canvas[index].bringToFront(active[0])
  }

  function addTexture(e) {
    let index = findActiveCanvas()
    let image = e.target.files[0]
    fabric.Image.fromURL(URL.createObjectURL(image, image.name), function (oImg) {
      canvas[index].add(oImg)
    })

  }

  async function pickColor() {

    //Check if the browser supports eyedropper
    if ("EyeDropper" in window) {
      eyeDropper = new EyeDropper();
    } else {
      alert("Your browser doesn't support Eyedropper API");
      return false;
    }

    const color = await eyeDropper
      .open()
      .then((colorValue) => {
        // error.classList.add("hide");
        //Get the hex color code
        let hexValue = colorValue.sRGBHex;
        //Convert Hex Value To RGB
        let rgbArr = [];
        for (let i = 1; i < hexValue.length; i += 2) {
          rgbArr.push(parseInt(hexValue[i] + hexValue[i + 1], 16));
          console.log(rgbArr);
        }
        let rgbValue = "rgb(" + rgbArr + ")";
        console.log(hexValue, rgbValue);
        setbrushColor(hexValue)
        setSavedColor(items => {
          return [hexValue, ...items]
        })
        // result.style.display = "grid";
        // hexValRef.value = hexValue;
        // rgbValRef.value = rgbValue;
        // pickedColorRef.style.backgroundColor = hexValue;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deselect() {
    console.log("cleared")
    canvas[index].discardActiveObject();
  }

  return (

      <div className="modal">
        {/* Canvas that correponds to each object in the 3d model */}
        <div>
          {ps5.items.map((el, index) => {
            return (
              <div key={index} hidden={el.hidden} >
                <canvas className="canvases" key={index} ref={canvasRefs.current[index]} ></canvas>
              </div>
            )
          })}
        </div>

        <div className="editor" >
          <div className="cla">

            <BsFillPencilFill color={brushColor} className="brush" />
            <h2>Choose Color</h2>
          </div>
          <div className="colorCollection">
            <HexColorPicker color={brushColor} className="HexColorPicker"
              onChange={(c) => {
                color(c)
              }}
            />
            <button className="btn" onClick={pickColor}>
              Eye Dropper Tool
            </button>
            <div className="color_list">
        {savedColors.map((el, index) => {
          return (
            <div className="color_item" style={{ background: `${el}` }} onClick={() => { color(el) }} key={index}>{el}</div>
          )
        })}
      </div>
          </div>

          <div className="resize">
            <canvas id="toolCan" ref={tCan}></canvas>
            <input
              type="range"
              id="colorWidth"
              ref={colorWidth}
              min="1"
              max="30"
              onInput={range}
            />
          </div>

          <div className="buttons">
<div className="buttons1">
            <button
              className="btn btn-secondary"
              id="selObj"
              onClick={selectObject}
            >
              {drawingmode.value ? " Drawing Mode" : "Exit Drawing mode"}
            </button>

            <button
              className="btn btn-secondary"
              id="selObj"
              onClick={clearCanvas}
            >
              Clear Canvas
            </button>
</div>
<div className="buttons2">
   
              <BsLayerBackward
                title={"Send object to back"}
                onClick={sendToBack}
                className="btn btn-secondary"
              />

              <BsLayerForward
                title={"Bring object forward"}
                onClick={sendToFront}
                className="btn btn-secondary"
              />
        
           
              <select
                className="custom-select"
                ref={objectSelector}
                id="paintOption">
                <option value="rectangle">Rectangle</option>
                <option value="triangle">Triangle</option>
                <option value="circle">Circle</option>
                <option value="line">Line</option>
                <option value="text">Textbox</option>
                <option value="image">Image</option>
              </select>
              <button className="btn btn-primary" onClick={add} value="add" id="add">
                <FaPlus />
              </button>
              <button
                className="btn btn-danger"
                onClick={deleteObjects}
                value="delete"
                id="delete"
              >
                <FaTimes />
              </button>
         
            </div>
          </div>
        </div>
      </div>

   
  )
}

export default Modal
