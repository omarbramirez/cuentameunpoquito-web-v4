import Section from './Section'

function Sections (){
    return(
        <>
        <div id={`sections`}>
            <ul>
                <Section sectionName={'Concurso'}/>
                <Section sectionName={'Talleres'}/>
                <Section sectionName={'Murales'}/>
                <Section sectionName={'Libro'}/>
            </ul>
        </div>
        </>
    )
}

export default Sections;