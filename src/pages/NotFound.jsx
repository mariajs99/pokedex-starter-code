import { Link } from "react-router-dom"
import sadPikachuImg from "../assets/images/sad-pikachu.gif"
import pokeballImg from "../assets/images/pokeball.png"

function NotFound() {
  return (
    <div>
      
      <h2>Seems you are lost</h2>

      <img src={sadPikachuImg} alt="sad-pika" />

      <h5>Click on the Pokeball to go back home</h5>

      <Link to={"/"}>
        <img src={pokeballImg} alt="pokeball" width={70}/>
      </Link>

    </div>
  )
}

export default NotFound