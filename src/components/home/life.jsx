import React from 'react';
import { Link } from 'react-router-dom';

const Life = ({ life }) => {
  return (
    <ul className = 'life'>
      {
        life.map((item) => {
          return (
            <Link key = { item.id } to = {'/detail/' + item.id}>
              <img src = { item.img } alt = '' />
              <h3>{ item.name }</h3>
              <p>{ item.title }</p>
              <span className = 'price'>￥{ item.price }</span>
            </Link>
          )
        })
      }
    </ul>
  )
}

export default Life