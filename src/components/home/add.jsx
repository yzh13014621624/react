import React from 'react';
import './hom'

const Add = ({ add }) => {
  // console.log(add)
  return (
      <ul className = 'add'>
        <li className = 'ul-l' >
          <img src = 'https://fms.res.meizu.com/dms/2019/03/01/f45fb529-2484-40b5-ae50-d0dbdf9971c8.jpg' alt = '' />
        </li>
        <li className = 'ul-r'>
          <img src = 'https://fms.res.meizu.com/dms/2019/02/18/e03b8b38-8826-4351-9a51-c3a91a07c5f7.jpg' alt = '' />
          <img src = 'https://fms.res.meizu.com/dms/2018/12/20/ae34c0ad-0a55-4357-9ca0-4a57a59b55b4.jpg' alt = '' />
        </li>
      </ul>
      // <ul className = 'add'>
      //   {
      //     add.map((item, index) => {
      //       return (
      //         <li key = { index }>
      //           <a href = { item.href }>
      //             <img src = { item.img } alt = '' />
      //           </a>
      //         </li>
      //       )
      //     })
      //   }
      // </ul>

  )
}

export default Add