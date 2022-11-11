import React, { useState } from 'react'
import s from './HomeAnswers'

const HomeAnswers = ({ store, state }) => {
    let [final, setFinal] = useState([])
    let array1 = Object.entries(store.getState().colors)
    array1.filter(element => state.includes(element[1]))
    console.log(array1)

    let drawAnswer = array1.map((key) => {
        return (
            <div
                style={{ backgroundColor: `${key[1]}` }}
                className={s.item}
            >
                {key[0]}
            </div >)
    })

    return (
        <div>
            {drawAnswer}
        </div>
    )
}

export default HomeAnswers