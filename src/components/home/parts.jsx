import React from 'react';
import './hom';
import { Link } from 'react-router-dom';

const Parts = ({ parts }) => {
  // console.log(parts)
  let arr = [];
  if (parts.length > 0) {
    arr.push(parts.map((item) => {
              return (
                <Link key = { item.id } to = { '/detail/' + item.id }>
                  <img src = { item.img } alt = '' />
                  <h3>{ item.name }</h3>
                  <p>{ item.title }</p>
                  <span className = 'price'>￥{ item.price }</span>
                </Link>
              )
            }))
  }
  return (
    <ul className = 'parts'>
      {
        arr
      }
    </ul>
  )
}

export default Parts
