import React from 'react';
import './hom'
import { Link } from 'react-router-dom';

const Sound = ({ sound }) => {
  // console.log(sound)
  let arr = [];
  if (sound.length > 0) {
    arr.push(sound.map((item) => {
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
    <ul className = 'sound'>
      {
        arr
      }
  </ul>
  )
}

export default Sound