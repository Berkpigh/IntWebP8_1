import React from 'react'
import { useState } from 'react'

function Collapse({ collnum, title, texto }) {
  const [isOpen0, openClose0] = useState(false)
  const [isOpen1, openClose1] = useState(true)
  const [isOpen2, openClose2] = useState(false)
  const [isOpen3, openClose3] = useState(true)
  var ostat = false
  var cn = { collnum }.collnum
  switch (cn) {
    case 0:
      ostat = isOpen0
      break
    case 1:
      ostat = isOpen1
      break
    case 2:
      ostat = isOpen2
      break
    case 3:
      ostat = isOpen3
  }
  console.log(cn, ostat)
  return ostat ? (
    <div className="collaps">
      <div className="collaps-frame2">
        <p className="collaps-frame2__p">{texto}</p>
      </div>
    </div>
  ) : (
    <div className="collaps">
      <div className="collaps-rect">
        <p className="collaps-rect__p">{title}</p>
        <svg
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
        </svg>
      </div>
    </div>
  )
}
export default Collapse
