import homeimg from '../../assets/home.png'

function Home() {
    return (
        <div className='home-main'>
            <div className="home-title">
                <div className="home-image">
                <img src={homeimg} alt="home" />
                </div>
                <div className="home-p">
                <p>Chez vous, partout et ailleurs</p>
                </div>
            </div>
        </div>
    )
}
export default Home