import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios"

//Queremos llamar a la api para que nos de los primeros 20 pokemons
//Y pintamos esa info haciendo un Link por cada pokemon de la lista

//1. Que herramienta usamos para llamar a la API?
//* .fetch

//2. Donde hacemos la llamada a la API?
//* Dentro de la base de la funcion, usando un useEffect() en su formato componentDidMount,
//* asegurandonos de que el componente se renderice correctamente

//3. Como procesamos una llamada que es asíncrona?
//* Con then/catch o async/await

//4. Que hacemos con la data una vez la recibimos?
//* Almacenarla en un estado

//5. Como pintamos los enlaces por cada pokemon?
//*Haremos un punto map para que por cada elemento del estado, se pinte la info de cada uno de ellos.

function Sidebar() {
  const [allPokemon, setAllPokemon] = useState(null);
  //Cuando inicializamos los estados, lo solemos hacer con null porque se empieza vacio
  //Esta actualizacion del estado se hará mas adelante con setAllPokemon.
  //*Pero en este caso no podemos inicializar el estado con nul, porque al intentar hacer el .map,
  //*Nos saldra un error avisando de que no puede recorrer un array que es nulo.
  //!La forma profesional de solucionarlo, sería poniendo null, y crear una clausula de guarda o un GESTOR DE LOADING

  useEffect(() => {
    //El fectch nos retorna una promesa

    /*    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllPokemon(data.results);
        console.log(data.results); //Muy importante hacer console.log para ver la data con la que estamos trabajando
      }); */

      //!Otra forma de hacerlo con libreria axios mucho mas limpia
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=200")
      //El ?limit= indica la cantidad de pokemons que queremos añadir al listado
      .then((response) => {
        console.log(response)
        setAllPokemon(response.data.results)
      })
      .catch((error) => {
        console.log(error)
      })

  }, []);

  //!Gestor de loading
  if(allPokemon === null) {
    return <h3>... Buscando los pokemons</h3>
  }


  return (
    <nav className="sidebar">
      {/* example of 3 links */}
      {/*
      <Link to={"/"}>bulbasaur</Link>
      <Link to={"/"}>charmander</Link>
      <Link to={"/"}>squirtle</Link> 
      */}

      {allPokemon.map((eachPokemon) => {
        //En los enlaces debemos definir los valores de la ruta de cada pokemon, eso se hace interpolando:
        return <Link key={eachPokemon.name} to={`/poke/${eachPokemon.name}`}>{eachPokemon.name}</Link>

      })}
    </nav>
  );
}

export default Sidebar;
