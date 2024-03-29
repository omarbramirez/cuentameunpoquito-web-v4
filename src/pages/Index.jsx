import Menu from '../bases/Menu';
import Content from '../bases/Content';
import Footer from '../bases/Footer';
import { useState, useEffect } from 'react';
import Concurso from './Concurso';
import Talleres from './Talleres';
import Murales from './Murales';
import Libro from './Libro';
import Proyecto from './Proyecto';
import Contacto from './Contacto';
import NotFound from '../bases/NotFound';

function Index () {
    const[selectedPage, setSelectedPage] =useState('Index');
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [isOpenMenu]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedPage]);

    return(
        <>
        <div id={`index`}>
            <Menu setSelectedPage={setSelectedPage} setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu}/>
            <div id={`container`} className={`${isOpenMenu ? 'is-open' : ''}`}>

            {selectedPage === 'Concurso' ? <Concurso/>:
            selectedPage === 'Talleres' ? <Talleres/>:
            selectedPage === 'Murales' ? <Murales/>:
            selectedPage === 'Libro' ? <Libro/>:
            selectedPage === 'Proyecto' ? <Proyecto/>:
            selectedPage === 'Contacto' ? <Contacto/>:
            selectedPage === 'Index' ? <Content setSelectedPage={setSelectedPage} setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu}/>
            : <NotFound/>
        }
        </div>
            <Footer/>
        </div>
        </>
    )
}

export default Index