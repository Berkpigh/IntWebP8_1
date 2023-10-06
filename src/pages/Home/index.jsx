import homeimg from '../../assets/home.png'

function Home() {
    return (
        <div className='home-main'>
            <div className="home-title">
                <img src={homeimg} alt="home" className="home-image"/>
                <p className="home-p">Chez vous, partout et ailleurs</p>
            </div>
        </div>
    )
}
export default Home