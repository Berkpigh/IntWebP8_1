import React from 'react'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import apropimg from '../../assets/Aprop.png'

function Apropos() {
  return (
    <React.Fragment>
      <div>
        <Banner imag={apropimg} />
      </div>
      <div>
        <Collapse />
        {/* <Collapse />
        <Collapse />
        <Collapse /> */}
      </div>
    </React.Fragment>
  )
}
export default Apropos
