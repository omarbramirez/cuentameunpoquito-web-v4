import Bird from '../assets/visual-components/Bird'

// eslint-disable-next-line react/prop-types
function Header({styles, type, setSelectedPage, setIsOpenMenu}){
    return(
        <>
        <div
        id={`logo`}
        className={`${styles}`}
        onClick={()=>{setSelectedPage('Index'),setIsOpenMenu(false)}}
        >
            <Bird
            fill={`#fff`}
            width={`5rem`}
            height={`5rem`}
            />
            <img 
            src={type}
            className={`logo-components`}
            alt={`imagotype`}
            />
        </div>
        </>
    )
}

export default Header;