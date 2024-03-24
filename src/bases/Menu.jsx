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
                            onClick={()=>{setSelectedPage('Proyecto')}}
                            >
                                El proyecto
                            </a>
                        </li>
                        <li>
                            <a 
                            onClick={()=>{setSelectedPage('Concurso')}}
                            >
                                Concurso
                            </a>
                        </li>
                        <li>
                            <a 
                            onClick={()=>{setSelectedPage('Talleres')}}
                            >
                                Talleres
                            </a>
                        </li>
                        <li>
                            <a 
                            onClick={()=>{setSelectedPage('Murales')}}
                            >
                                Murales
                            </a>
                        </li>
                        <li>
                            <a 
                            onClick={()=>{setSelectedPage('Libro')}}
                            >
                                Libro
                            </a>
                        </li>
                        <li><a href="https://drive.google.com/drive/folders/11AVHoCcuu15WAG40nor7yG8b1uty_kjb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Prensa
                        </a>
                        </li>
                        <li><a 
                         
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