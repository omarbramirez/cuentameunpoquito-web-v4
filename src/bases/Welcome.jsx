import Header from './Header';
import Imagotype from '../assets/images/logo.png'

// eslint-disable-next-line react/prop-types
function Welcome({setIndex}) {
    return (
        <>
            <div id={`welcome`}>
                <Header type={Imagotype}/>
                <p id={`slogan`}>
                    Historias que caben en la palma de la mano, relatos que duran lo que el canto de un gorrión, cuentos breves en menos de 150 palabras.
                </p>
                <a
                    href="#"
                    className={`link`}
                    onClick={()=>{setIndex(true)}}
                >
                    Ir al sitio
                </a>
            </div>
        </>
    )
}
export default Welcome