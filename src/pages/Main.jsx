import City from '../assets/images/City.png'
import Sections from '../components/Sections'

// eslint-disable-next-line react/prop-types
function Main({setSelectedPage}) {
    return (
        <>
            <img
                src={City}
                alt={`city`}
            />
            <p>
                Cuéntame un PoQuito es un proyecto integral y sostenible que funge como
                referente cultural en el Distrito Metropolitano de Quito al fortalecer
                la conexión entre la literatura y la comunidad.
            </p>
            <Sections setSelectedPage={setSelectedPage}/>
        </>
    )
}

export default Main;