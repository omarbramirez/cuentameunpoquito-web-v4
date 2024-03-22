import Header from './Header';
import ImagotypeWhite from '../assets/images/logowhite.png'

// eslint-disable-next-line react/prop-types
function Menu({ setSelectedPage }) {
    return (
        <>
            <nav>
                <div style={{padding: '0em 0.6em'}}>
                    <Header styles={'menu'} type={ImagotypeWhite} setSelectedPage={setSelectedPage} />
                    <ul>
                        <li>
                            <a 
                            href="#"
                            onClick={()=>{setSelectedPage('Proyecto')}}
                            >
                                El proyecto
                            </a>
                        </li>
                        <li><a href="https://drive.google.com/drive/folders/1-Ct4mvdKUvZOYwINpmovhIONb6yEePdV?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Prensa
                        </a>
                        </li>
                        <li><a 
                        href="#"
                        onClick={()=>{setSelectedPage('Contacto')}}
                        >
                            Contacto
                        </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Menu