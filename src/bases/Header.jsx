import Bird from '../assets/visual-components/Bird'

// eslint-disable-next-line react/prop-types
function Header({styles, type}){
    return(
        <>
        <div
        id={`logo`}
        className={`${styles}`}
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