import React from 'react';
import locationList from '../../data/vingtannonces.json'
import homeimg from '../../assets/home.png'
import LocationItem from '../../components/LocationItem'

function Home() {
    return (
        <React.Fragment>
        <div className='home-main'>
            <img src={homeimg} alt="home" className="home-image" />
            <p className="home-p">Chez vous, partout et ailleurs</p>
            <div className='div-loc'>
                <ul className='home-loc__list'>
                    {locationList.map(({id, title}) =>
                        (<div key={id}>
                            <LocationItem title={title} />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
        </React.Fragment>
    )
}
export default Home