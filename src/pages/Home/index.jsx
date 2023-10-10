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
            <div className='gale'>
                <ul  className='gale-ul'>
                {locationList.filter(locL => locL.rating = '2').map(
                    ({id,title}) =>
                    (<div key= {id}>
                        <LocationItem title={title} />
                    </div>)
                )}
                </ul>
            </div>
        </div>
        </React.Fragment>
    )
}
export default Home
/* {locationList.map(({id, title}) =>
(<div key={id}>
    <LocationItem title={title} />
</div>
))} */
{/* <React.Fragment>
<div className='home-main'>
    <img src={homeimg} alt="home" className="home-image" />
    <p className="home-p">Chez vous, partout et ailleurs</p>
    <div className='gale'>
        <ul className='gale-ul'>
            {locationList.map(({id, title}) =>
                (<li key={id} className='gale-ul__li'>
                    <p className='gale-ul__li-p'>{title}</p>
                </li>
            ))}
        </ul>
    </div>
</div>
</React.Fragment> */}