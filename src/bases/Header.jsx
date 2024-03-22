import Bird from '../assets/visual-components/Bird'

// eslint-disable-next-line react/prop-types
function Header({styles, type, setSelectedPage}){
    return(
        <>
        <div
        id={`logo`}
        className={`${styles}`}
        onClick={()=>{setSelectedPage('Index')}}
        >
            <Bird
            fill={`#fff`}
            width={`3.2em`}
            height={`3.2em`}
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