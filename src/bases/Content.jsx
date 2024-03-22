import Main from '../pages/Main'


// eslint-disable-next-line react/prop-types
function Content ({setSelectedPage}){
    return (
        <>
        
        <div id={`content`}>
        <Main setSelectedPage={setSelectedPage}/>
        </div>
        </>
    )
}

export default Content;