import React from 'react'
import s from './Info.module.css'
import store from '../redux/store'


const Info = () => {
  let zalupa = Object.entries(store.getState().colors).map((key, val) => {
    return <div
      style={{ backgroundColor: `${key[1]}` }}
      className={s.item}
    >
      {key[0]}
    </div >
  })

  return (
    <div className={s.main}>
      {zalupa}
    </div>
  )
}

export default Info