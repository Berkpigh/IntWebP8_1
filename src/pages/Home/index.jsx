import React from 'react';
import {useState} from 'react'
import locationList from '../../data/vingtannonces.json'
import homeimg from '../../assets/home.png'
import LeftArrow from '../../components/LeftArrow'
import RightArrow from '../../components/RightArrow'
import LocationItem from '../../components/LocationItem'


function Home() {
    const locLLen = locationList.length
    const [curI, setcurI] = useState(0)
    var curM = 6
    function nextGal(curI) {
        ((curI + 6) < locLLen ) ? setcurI(curI + 6) : curI = 0
        curM = curI + 6
    }
    function prevGal(curI) {
        ((curI - 6) >= 0 ) ? setcurI(curI - 6) : curI = (locLLen - 7)
        curM = curI + 6
    }
    return (
        <React.Fragment>
        <div className='home-main'>
            <img src={homeimg} alt="home" className="home-image" />
            <p className="home-p">Chez vous, partout et ailleurs</p>
            <div className='gale'>
                <div>
                    <LeftArrow/>
                </div>
                <ul  className='gale-ul'>
                {locationList.filter((locL, index) => (index >= curI && index < curM )).map(
                    ({id,title}) =>
                    (<div key= {id}>
                        <LocationItem title={title} />
                    </div>)
                )}
                </ul>
                <div>
                    <RightArrow/>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
export default Home
