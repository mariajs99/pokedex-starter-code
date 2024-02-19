import { Link } from "react-router-dom"
import pokeballImg from "../assets/images/pokeball.png"

function Navbar() {
  return (
    <nav className="navbar">
      
      <Link to={"/"}>
        <img src={pokeballImg} alt="pokeball" width={70}/>
      </Link>

    </nav>
  )
}

export default Navbar