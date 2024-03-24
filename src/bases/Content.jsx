import Main from '../pages/Main'


// eslint-disable-next-line react/prop-types
function Content ({setSelectedPage, setIsOpenMenu, isOpenMenu}){
    return (
        <>
        
        <div id={`content`}>
        <Main setSelectedPage={setSelectedPage} setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu}/>
        </div>
        </>
    )
}

export default Content;