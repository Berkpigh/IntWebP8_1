import React from 'react'
import { useState } from 'react'
import Dropdown from '../Dropdown'

function Collapse({ title, texto }) {
  const [isOpen, openClose] = useState(true)
  function setisOpen(s) {
    console.log('before ', s)
    if (s === true) {
      console.log('middle1 ', s)
      openClose(false)
    } else {
      console.log('middle2 ', s)
      openClose(true)
    }
    console.log('after ', isOpen)
  }
  return isOpen ? (
    <div className="collaps">
      <div onClick={() => setisOpen({ isOpen })}>
        <Dropdown desc={texto} />
      </div>
    </div>
  ) : (
    <div className="collaps">
      <div className="collaps-rect">
        <p className="collaps-rect__p">{title}</p>
        <button
          type="button"
          onClick={() => setisOpen({ isOpen })}
          className="collaps-rect__svg"
        >
          open
          {/*           <svg
            className="collaps-rect__svg"
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z"
              fill="white"
            />
          </svg> */}
        </button>
      </div>
    </div>
  )
}
export default Collapse
