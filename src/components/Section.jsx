// eslint-disable-next-line react/prop-types
function Section ({sectionName}){
    return(
        <>
        <li>
            <div 
            id={sectionName}
            className={`section`}>
            <a
                    href="#"
                    className={`link link-section`}
                >
                   {sectionName}
                </a>
            </div>
        </li>
        </>
    )
}

export default Section;