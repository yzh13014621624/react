import React from 'react';
import { Link } from 'react-router-dom';

const Phone = ({ phone }) => {
  // console.log(phone)
  let arr = [];
  if (phone.length > 0) {
    arr.push(phone.map((item) => {
              return (
                <Link key = { item.id } to = { '/detail/' + item.id } >
                  <img src = { item.img } alt = '' />
                  <h3>{ item.name }</h3>
                  <div className = 'info'>
                    <p className = 'p1'>{ item.lable }</p>
                    <p className = 'p2'>{ item.title }</p>
                  </div>
                  <span>￥{ item.price }</span>
                </Link>
              )
            }))
  }
  return (
    <ul className = 'phone'>
      {
        arr
      }
    </ul>
  )
}

export default Phone