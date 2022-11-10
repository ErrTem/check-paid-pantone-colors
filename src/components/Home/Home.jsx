import React, { useEffect, useState } from 'react'
import s from './Home.module.css'
import axios from 'axios'

let Home = () => {
  let [input, setInput] = useState('')
  let [state, setState] = useState('')
  let [css, setCss] = useState('')
  let [docs, setDocs] = useState([])


  let handleSubmit = async (e) => {
    e.preventDefault()
    await axios
      .get(`${input}`)
      .then(( response) => { // почему не работает с async
        console.log(response.data)
        setState(response.data)
        res()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  let res = async () => {
    let start = state.indexOf(`<link rel="stylesheet" type="text/css"`);
    let end = state.indexOf(`>`, start)
    let stylesheet = state.substring(start, end)
    let findHrefStart = stylesheet.indexOf('href="')
    let result = stylesheet.substring(findHrefStart + 6, stylesheet.length - 1)
    await axios
      .get(`${input + result}`)
      .then((response) => {
        console.log(response.data)
        setCss(response.data)
      })

  }

  let cssRequest = async () => {

  }

  let textInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className={s.home}>
      <form >
        <div className={s.elem}>
          <input id='input' type='text' placeholder='Write site adress' onChange={textInput} />
        </div >
        <div className={s.elem}>
          <button onClick={handleSubmit}>Check it now !</button>
        </div>

        <div>
          {state}
        </div>


      </form>
    </div>
  )
}

export default Home