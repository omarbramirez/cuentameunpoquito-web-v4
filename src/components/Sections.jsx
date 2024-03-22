import Section from './Section'

// eslint-disable-next-line react/prop-types
function Sections ({setSelectedPage}){
    return(
        <>
        <div id={`sections`}>
            <ul>
                <Section sectionName={'Concurso'}   setSelectedPage={setSelectedPage}/>
                <Section sectionName={'Talleres'}  setSelectedPage={setSelectedPage}/>
                <Section sectionName={'Murales'}  setSelectedPage={setSelectedPage}/>
                <Section sectionName={'Libro'}  setSelectedPage={setSelectedPage}/>
            </ul>
        </div>
        </>
    )
}

export default Sections;