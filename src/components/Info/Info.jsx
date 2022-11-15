import React from 'react'
import s from './Info.module.css'
import store from '../redux/store'
import { colors } from '../colors'


const Info = () => {
  let items = Object.entries(colors).map((item, index) => {
    return (
      <div
        style={{ backgroundColor: `${item[1]}` }}
        className={s.item}
        key={index}
      >
        {item[0]}
      </div >
    )
  })

  return (
    <div className={s.main}>
      {items}
    </div>
  )
}

export default Info