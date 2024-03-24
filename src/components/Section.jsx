// eslint-disable-next-line react/prop-types, no-unused-vars
function Section ({sectionName,setSelectedPage, setIsOpenMenu}){

    return(
        <>
        <li className={`section-container`}>
            <div 
            id={sectionName}
            className={`section`}
            onClick={()=>{setSelectedPage(sectionName),setIsOpenMenu(false)}}
            >
            </div>
            <a
                     
                    className={`link link-section`}
                    onClick={()=>{setSelectedPage(sectionName),setIsOpenMenu(false) }}
                >
                   {sectionName}
                </a>
        </li>
        </>
    )
}

export default Section;