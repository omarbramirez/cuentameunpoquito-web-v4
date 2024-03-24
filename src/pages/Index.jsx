import Menu from '../bases/Menu';
import Content from '../bases/Content';
import Footer from '../bases/Footer';
import { useState } from 'react';
import Concurso from './Concurso';
import Talleres from './Talleres';
import Murales from './Murales';
import Libro from './Libro';
import Proyecto from './Proyecto';
import Contacto from './Contacto';
import NotFound from '../bases/NotFound';

function Index () {
    const[selectedPage, setSelectedPage] =useState('Talleres')
    return(
        <>
        <div id={`index`}>
            <Menu setSelectedPage={setSelectedPage}/>
            <div id={`container`}>

            {selectedPage === 'Concurso' ? <Concurso/>:
            selectedPage === 'Talleres' ? <Talleres/>:
            selectedPage === 'Murales' ? <Murales/>:
            selectedPage === 'Libro' ? <Libro/>:
            selectedPage === 'Proyecto' ? <Proyecto/>:
            selectedPage === 'Contacto' ? <Contacto/>:
            selectedPage === 'Index' ? <Content setSelectedPage={setSelectedPage}/>
            : <NotFound/>
        }
        </div>
            <Footer/>
        </div>
        </>
    )
}

export default Index