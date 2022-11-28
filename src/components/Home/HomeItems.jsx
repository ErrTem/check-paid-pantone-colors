import React from 'react'
import s from './Home.module.css'

const HomeItems = ({ intersections }) => {
    const items = intersections.map((item) => {
        return (
            <div
                style={{ backgroundColor: `${item[1]}` }}
                className={s.item}
                key={item[0]}
            >
                {item[0]}
            </div >
        )
    })
    return (
        <div  className={s.main}>
            {items}
        </div>
    )
}

export default HomeItems