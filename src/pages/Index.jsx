import Menu from '../bases/Menu';
import Content from '../bases/Content';
import Footer from '../bases/Footer';

function Index () {
    return(
        <>
        <div id={`index`}>
            <Menu/>
            <Content/>
            <Footer/>
        </div>
        </>
    )
}

export default Index