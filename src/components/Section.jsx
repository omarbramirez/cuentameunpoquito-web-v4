// eslint-disable-next-line react/prop-types, no-unused-vars
function Section ({sectionName,setSelectedPage}){

    return(
        <>
        <li className={`section-container`}>
            <div 
            id={sectionName}
            className={`section`}
            onClick={()=>{setSelectedPage(sectionName)}}
            >
            </div>
            <a
                    href="#"
                    className={`link link-section`}
                    onClick={()=>{setSelectedPage(sectionName)}}
                >
                   {sectionName}
                </a>
        </li>
        </>
    )
}

export default Section;