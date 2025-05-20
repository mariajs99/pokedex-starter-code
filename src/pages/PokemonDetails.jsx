import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { GridLoader } from "react-spinners";

function PokemonDetails() {

  const navigate = useNavigate(); //nos permite acceder a la funcion navigate para hacer redirecciones

  const params = useParams();

  const [details, setDetails] = useState(null);

  useEffect(() => {
    getData(); //llamamos a la api y actualizamos el estado
  }, [params]);
  //Cuando los parámetros dinámicos cambien, vuelva a llamar a la api
  //y vuelve a actualizar el estado

  //!No se puede hacer una funcion asincrona dentro de un useEffect (async funcion)
  //! por lo que la hacemos fuera y la metemos luego dentro llamándola
  const getData = async () => {
    try {
      //aquí hacemos la llamada a la API
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`
      );
      console.log(response);
      setDetails(response.data);
      //Para estilizar el cliploader comentamos esta ultima linea para verlo
    } catch (error) {
      console.log(error);
      //Queremos redireccionar al ususario a la página de errores. Importamos useNavigate.
      navigate("/error")
    }
  };

  if (details === null) {
    return (
      <div>
        {" "}
        <GridLoader color="red" size={50} />{" "}
      </div>
    );
  }

  return (
    <div>
      <h1>{details.name}</h1>
      <img src={details.sprites.front_default} alt="pokemon" width={"150px"} />
      <h3>Peso: {details.weight}</h3>
      <h3>Altura: {details.height}</h3>
    </div>
  );
}

export default PokemonDetails;

//!COMANDO PARA HACER LA ESTRUCTURA RAPIDO : rfce
