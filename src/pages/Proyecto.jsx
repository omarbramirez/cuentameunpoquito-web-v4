import Imagen05 from '../assets/images/Imagen05.jpg'; 

function Proyecto (){

    return(
        <>
        <h2>SOBRE NOSOTROS</h2>
        <div>
        <p>
        Historias que caben en la palma de la mano, relatos que duran lo que el
        canto de un gorrión, cuentos breves en menos de 150 palabras. Cuéntame
        Un PoQuito es una iniciativa ciudadana que cuenta con el apoyo de la
        Secretaría de Cultura del Municipio de Quito para fomentar la lectura y
        escritura de microcuentos en la población. El proyecto consta de cuatro
        componentes: talleres de lectoescritura para estudiantes de secundaria,
        un concurso de microcuentos abierto a varias edades y categorías, un
        libro que incluirá los relatos ganadores y, finalmente, la instalación
        de murales con textos breves de autores consolidados.
      </p>
    <img src={Imagen05} alt="flower" className={`img`}/>
      <p>
        Cuéntame un PoQuito es un proyecto que busca fomentar la lectura,
        escritura y aprecio por la literatura en el Distrito Metropolitano de
        Quito, a través de un concurso de microcuento en el que se promueve la
        participación activa de la comunidad. Asimismo, pretende incentivar la
        apropiación del espacio público y la revitalización de la tradición
        literaria escrita, además de comprometerse a ser una herramienta que
        permita impulsar la creatividad, el diálogo intergeneracional y la
        diversidad cultural entre la ciudadanía quiteña.
      </p>
        </div>
        </>
    )
}

export default Proyecto;