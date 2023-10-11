import homeimg from '../../assets/home.png'


function Banner() {
    return (
        <div className='banner'>
            <img src={homeimg} alt="home" className="banner-image" />
            <p className="banner-p">Chez vous, partout et ailleurs</p>
        </div>
    )
}
export default Banner