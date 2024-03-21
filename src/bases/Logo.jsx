import Bird from '../assets/visual-components/Bird'
import Imagotype from '../assets/images/logo.png'

function Logo () {
    return (
        <>
        <div id={`header`}>
        <div id={`logo`}>
            <Bird
            fill={`#fff`}
            width={`3.2em`}
            height={`3.2em`}
            />
            <img 
            src={Imagotype}
            className={`logo-components`}
            alt={`imagotype`}
            />
        </div>
        <h4 id={`slogan`}>
            Historias que caben en la palma de la mano, relatos que duran lo que el canto de un gorrión, cuentos breves en menos de 150 palabras.
        </h4>
        <a
        href="#" 
        className={`link`}
        >
            Ir al sitio
        </a>
            </div>
        </>
    )
}
export default Logo