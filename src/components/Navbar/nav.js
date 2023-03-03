import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./styles1.css"

export default function Navbar() {
  return (
    // <head>
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src="/images/controller.png" alt="" /><span>CustLab</span>
      </Link>
      <ul>
      <Link to="/">
        Home
      </Link>
        <Link to="/App">Customizer</Link>
        {/* <CustomLink to="/">About US</CustomLink> */}
      </ul>
    </nav>
    // </head>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
