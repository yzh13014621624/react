import React from 'react';
import { Link } from 'react-router-dom';
import './hom'
import PropTypes from 'prop-types'

const List = ({list}) => {
  return (
    <ul className = 'movieList'>
      {
        list.map((item, index) => {
          return (
            <Link key = { item.id } to = { '/detail/' + item.id }>
              <div className = 'movieImg'>
                <img src = { item.images.small } alt = { item.alt } />
                <h3>{ item.title }</h3>
                <p>上映时间:{ item.year }年</p>
              </div>
            </Link>
          )
        })
      }
    </ul>
  )
}

List.propTypes = {
  list: PropTypes.array
}

export default List