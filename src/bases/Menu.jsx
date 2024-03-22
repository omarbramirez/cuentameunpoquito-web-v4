import Header from './Header';
import ImagotypeWhite from '../assets/images/logowhite.png'

function Menu (){
    return(
        <>
        <nav>
        <Header styles={'menu'} type={ImagotypeWhite}/>
        <ul>
            <li>
                <a href="#">
                El proyecto
                </a>
                </li>
            <li><a href="#">
                Prensa
            </a>
                </li>
            <li><a href="#">
                Contacto
            </a>
                </li>
        </ul>
        </nav>
        </>
    )
}

export default Menu