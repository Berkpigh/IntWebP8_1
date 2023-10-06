import homeimg from '../../assets/home.png'

function Home() {
    return (
        <div className='home-main'>
            <img src={homeimg} alt="home" className="home-image" />
            <p className="home-p">Chez vous, partout et ailleurs</p>
        </div>
    )
}
export default Home