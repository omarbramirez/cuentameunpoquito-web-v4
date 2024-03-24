import Header from './Header';
import ImagotypeWhite from '../assets/images/logowhite.png'
import Arrow from '../assets/icons/Arrow.svg';
import Close from '../assets/icons/Close.svg';

// eslint-disable-next-line react/prop-types
function Menu({ setSelectedPage, setIsOpenMenu, isOpenMenu }) {
    const toggleMenu = () => {
        setIsOpenMenu((open) => !open);
    };

    return (
        <>
            <nav>
                <ul>
                    <div style={{ padding: '0em 0.6em' }}>
                        <li>
                            <Header styles={'menu'} type={ImagotypeWhite} setSelectedPage={setSelectedPage} setIsOpenMenu={setIsOpenMenu}/>
                        </li>
                        <li className={`menu dvs-header-menuItems-trigger link ${isOpenMenu ? 'is-open' : ''}`} onClick={toggleMenu}>
                            {isOpenMenu ? <img className="icons" src={Close} alt="Menu" /> : <img className="icons" src={Arrow} alt="Menu" />}
                        </li>
                        <li className={`dvs-header-menuItems ${isOpenMenu ? 'is-open' : ''}`}>


                            <ul>
                                <li>
                                    <a
                                        onClick={() => { setSelectedPage('Proyecto'),setIsOpenMenu(false)}}
                                    >
                                        El proyecto
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() => { setSelectedPage('Concurso'),setIsOpenMenu(false) }}
                                    >
                                        Concurso
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() => { setSelectedPage('Talleres'),setIsOpenMenu(false) }}
                                    >
                                        Talleres
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() => { setSelectedPage('Murales'),setIsOpenMenu(false) }}
                                    >
                                        Murales
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() => { setSelectedPage('Libro'),setIsOpenMenu(false) }}
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

                                    onClick={() => { setSelectedPage('Contacto'),setIsOpenMenu(false) }}
                                >
                                    Contacto
                                </a>
                                </li>
                            </ul>
                        </li>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Menu