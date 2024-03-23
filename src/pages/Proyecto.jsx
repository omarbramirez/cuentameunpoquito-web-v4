import Imagen05 from '../assets/images/Imagen05.jpg'; 

function Proyecto (){

    return(
        <>
        <h2>SOBRE NOSOTROS</h2>
        <div>
        <p>
        Historias que caben en la palma de la mano, relatos que duran lo que el canto de un gorrión, cuentos breves en menos de 150 palabras. Cuéntame Un PoQuito es una iniciativa ciudadana que cuenta con el apoyo de la Secretaría de Cultura del Municipio de Quito para fomentar la lectura y escritura de microcuentos en la población.
      </p>
    <img src={Imagen05} alt="flower" className={`img`}/>
      <p>
      Cuéntame un PoQuito busca fomentar la lectura, escritura y aprecio por la literatura en el Distrito Metropolitano de Quito, a través de cuatro propuestas transformadoras: 1) talleres de lectoescritura impartidos a estudiantes de secundaria de colegios quiteños; 2) concurso de microcuento abierto a varias edades y categorías en el que se promueve la participación activa de la comunidad; 3) instalación de murales con fragmentos de cuentos de autores ecuatorianos consolidados; 4) publicación de un libro con los microcuentos de los ganadores y menciones del concurso, lo cual cataliza el ecosistema editorial y fortalece la cadena del libro en Ecuador.
      </p>
        </div>
        </>
    )
}

export default Proyecto;