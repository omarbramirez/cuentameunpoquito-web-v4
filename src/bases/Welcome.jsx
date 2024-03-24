import Header from './Header';
import Imagotype from '../assets/images/logo.png'

// eslint-disable-next-line react/prop-types
function Welcome({setIndex}) {
    return (
        <>
            <div id={`welcome`}>
                <Header type={Imagotype}/>
                <p id={`slogan`}>
Celebramos la literatura breve en la ciudad de Quito.
                </p>
                <a
                     
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