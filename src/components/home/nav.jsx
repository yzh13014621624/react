import React from 'react';
import './hom'

const Nav = ({ nav }) => {
  // console.log(nav)
  return (
    <ul className = 'nav'>
      <li>
        <img src = 'https://fms.res.meizu.com/dms/2019/03/01/ebb78584-625e-45bf-9ac7-2706657426bf.jpg' alt = '' />
        <span>盲约</span>
      </li>
      <li>
        <img src = 'https://fms.res.meizu.com/dms/2019/02/22/bf882fa4-ca2c-4e52-936f-f373b58cc228.png' alt = '' />
        <span>魅族X8</span>
      </li>
      <li>
        <img src = 'https://fms.res.meizu.com/dms/2018/11/19/bd78ec91-b232-479e-9b8b-3df2cca4c19a.png' alt = '' />
        <span>以旧换新</span>
      </li>
      <li>
        <img src = 'https://openfile.meizu.com/group1/M00/06/C4/Cgbj0Vu8GACARZblAAAUpjA0os8971.png' alt = '' />
        <span>M码通道</span>
      </li>
    </ul>
  )
}

export default Nav