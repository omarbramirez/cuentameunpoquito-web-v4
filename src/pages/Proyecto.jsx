import Imagen05 from '../assets/images/Imagen05.jpg'; 

function Proyecto (){

    return(
        <>
        <h2>SOBRE NOSOTROS</h2>
        <div id={`about-us`}>
        <p>
        Historias que caben en la palma de la mano, relatos que duran lo que el canto de un gorrión, cuentos breves en menos de 150 palabras. Cuéntame Un PoQuito es una iniciativa ciudadana que cuenta con el apoyo de la Secretaría de Cultura del Municipio de Quito para fomentar la lectura y escritura de microcuentos en la población.
      </p>
    <img src={Imagen05} alt="about-us" className={`img`}/>
      <p>
      Cuéntame un PoQuito busca fomentar la lectura, escritura y aprecio por la literatura en el Distrito Metropolitano de Quito, a través de cuatro propuestas transformadoras:
      </p>
      <ul id={`about-us-list`}>
        <li>
         
        <span className={`numeredList`}>1</span>
        Talleres de lectoescritura impartidos a estudiantes de secundaria de colegios quiteños;
        </li>
        <li>
        <span className={`numeredList`}>2</span>
        Concurso de microcuento abierto a varias edades y categorías en el que se promueve la participación activa de la comunidad; 
        </li>
        <li>
          <span className={`numeredList`}>3</span>
        Instalación de murales con fragmentos de cuentos de autores ecuatorianos consolidados; 
        </li>
        <li>
        <span className={`numeredList`}>4</span>
        Publicación de un libro con los microcuentos de los ganadores y menciones del concurso, lo cual cataliza el ecosistema editorial y fortalece la cadena del libro en Ecuador.
        </li>
      </ul>
        </div>
        </>
    )
}

export default Proyecto;