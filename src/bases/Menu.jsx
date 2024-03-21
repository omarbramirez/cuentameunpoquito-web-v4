import Header from './Header';
import ImagotypeWhite from '../assets/images/logowhite.png'

function Menu (){
    return(
        <>
        <nav>
        <Header styles={'menu'} type={ImagotypeWhite}/>
        <ul>
            <li>El proyecto</li>
            <li>Prensa</li>
            <li>Contacto</li>
        </ul>
        </nav>
        </>
    )
}

export default Menu