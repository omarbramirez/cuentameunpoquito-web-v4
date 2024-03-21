import Logo from '../bases/Logo';
import Background from '../assets/Background.mp4'

function Home () {
    return(
        <>
         <div id={`Home`}>
         <div id={`overlay`}></div>
            <video
                id={`background`}
                autoPlay={true}
                loop={true}
                controls={false}
                playsInline
                muted
                src={Background}
                type="video/mp4"
            />
            <div id={`content`}>
            <Logo/>
            </div>
        </div>
        </>
    )
}

export default Home