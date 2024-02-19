import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <nav className="sidebar">
      
      {/* example of 3 links */}
      <Link to={"/"}>bulbasaur</Link>
      <Link to={"/"}>charmander</Link>
      <Link to={"/"}>squirtle</Link>

    </nav>
  )
}

export default Sidebar