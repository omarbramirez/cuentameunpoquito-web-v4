import Section from './Section'

// eslint-disable-next-line react/prop-types
function Sections ({setSelectedPage, setIsOpenMenu}){
    return(
        <>
        <div id={`sections`}>
            <ul>
                <Section sectionName={'Concurso'}   setSelectedPage={setSelectedPage} setIsOpenMenu={setIsOpenMenu}/>
                <Section sectionName={'Talleres'}  setSelectedPage={setSelectedPage} setIsOpenMenu={setIsOpenMenu}/>
                <Section sectionName={'Murales'}  setSelectedPage={setSelectedPage} setIsOpenMenu={setIsOpenMenu}/>
                <Section sectionName={'Libro'}  setSelectedPage={setSelectedPage} setIsOpenMenu={setIsOpenMenu}/>
            </ul>
        </div>
        </>
    )
}

export default Sections;