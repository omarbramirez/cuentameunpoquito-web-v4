import Imagen06 from '../assets/images/Imagen06.jpg'
import Sections from '../components/Sections'

// eslint-disable-next-line react/prop-types
function Main({setSelectedPage}) {
    return (
        <>
            <img
                src={Imagen06}
                alt={`background-image`}
            />
            <p>
            Cuéntame un poQuito es una iniciativa para la promoción de la literatura breve en la ciudad de Quito. En nuestra primera edición hemos realizado talleres de escritura creativa para estudiantes de secundaria, un concurso de microcuento, intervenciones en espacio público y un libro objeto.  
            </p>
            <Sections setSelectedPage={setSelectedPage}/>
        </>
    )
}

export default Main;