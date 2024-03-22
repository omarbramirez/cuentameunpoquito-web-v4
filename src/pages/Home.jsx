import Welcome from '../bases/Welcome';
import Background from '../assets/Background.mp4'

// eslint-disable-next-line react/prop-types
function Home({setIndex}) {
    return (
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
                <div id={`welcome`}>
                    <Welcome setIndex={setIndex}/>
                </div>
            </div>
        </>
    )
}

export default Home