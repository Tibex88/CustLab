import { proxy } from "valtio"

export let ps5 = proxy({
  current: null, //not used anywhere yet
  items: [
    //settings for each part of the 3d object
    {
      name: "touchsurface",
      color: "#ff0000",
      scale: 69.34,
      position: [42.35, 101.18, -14.18],
      hidden: true,
      texture: "/images/UV_Grid.webp",
    },
    {
      name: "rl_buttons",
      color: "#ff0000",
      scale: [10.52, 12.02, 10.15],
      position: [41.74, 59.27, -5.43],
      hidden: false,
      texture: "/images/UV_Grid.webp",
    },
    {
      name: "buttons",
      color: "#ff0000",
      scale: [10.52, 12.02, 10.15],
      position: [41.64, 59.28, -6.05],
      hidden: true,
      texture: "/images/UV_Grid.webp",
    },
    {
      name: "analog",
      color: "#ff0000",
      scale: [10.72, 12.25, 10.34],
      position: [42.38, 58.73, -3.65],
      hidden: true,
      texture: "/images/UV_Grid.webp",
    },
    {
      name: "ps_logo",
      color: "#ff0000",
      scale: [10.52, 12.02, 10.15],
      position: [42.04, 59.08, -5.96],
      hidden: true,
      texture: "/images/UV_Grid.webp",
    },
    { name: "right_handle", color: "#ff0000", position: [41.63, 59.33, -5.71], hidden: true, texture: "/images/UV_Grid.webp" },
    {
      name: "line",
      color: "#ff0000",
      scale: [10.94, 12.49, 10.55],
      position: [41.81, 56.76, -6.04],
      hidden: true,
      texture: "/images/UV_Grid.webp",
    },

    {
      name: "back",
      color: "#ff0000",
      scale: [10.52, 12.02, 10.15],
      position: [41.63, 59.33, -5.71],
      hidden: true,
      texture: "/images/UV_Grid.webp",
    },
    {
      name: "share_buttons",
      color: "#ff0000",
      scale: [10.52, 12.02, 10.15],
      position: [41.94, 59.49, -5.54],
      hidden: true,
      texture: "/images/UV_Grid.webp",
    },
    {
      name: "d_pad",
      color: "#ff0000",
      scale: [10.52, 12.02, 10.15],
      position: [41.82, 59.24, -6.11],
      hidden: true,
      texture: "/images/UV_Grid.webp",
    },
    { name: "front", color: "#ff0000", position: [41.63, 59.33, -5.71], hidden: true, texture: "/images/UV_Grid.webp" },
    { name: "left_handle", color: "#ff0000", position: [41.93, 59.33, -5.71], hidden: true, texture: "/images/UV_Grid.webp" },
    { name: "ring", color: "#ff0000", position: [41.63, 59.33, -5.71], hidden: true, texture: "/images/UV_Grid.webp" },
  ],
})

export const drawingMode = proxy({ value: true })
export const darkMode = proxy({ value: false })

export const decals = proxy([{ path: "/images/UV_Grid.webp" }, { path: "/images/UV_Grid.webp" }])

// export const ps4 = proxy({
//   current: null,
//   items: [
//     { name: "ps_button", color: "#ff0000", hidden: false, texture: "/images/UV_Grid.webp" },
//     { name: "touchpad", color: "#ff0000", hidden: true, texture: "/images/UV_Grid.webp" },
//     { name: "Material.001", color: "#ff0000", hidden: true, texture: "/images/UV_Grid.webp" },
//     { name: "light", color: "#ff0000", hidden: true, texture: "/images/UV_Grid.webp" },
//     { name: "Material.003", color: "#ff0000", hidden: true, texture: "/images/UV_Grid.webp" },
//     { name: "analogs", color: "#ff0000", hidden: true, texture: "/images/UV_Grid.webp" },
//     { name: "aiStandardSurface13", color: "#ff0000", hidden: true, texture: "/images/UV_Grid.webp" },
//     { name: "buttons", color: "#ff0000", hidden: true, texture: "/images/UV_Grid.webp" },
//   ],
// })
