import React, { useCallback, useEffect, useState } from 'react'
import s from './Home.module.css'
import axios from 'axios'
import store from '../redux/store'
import HomeAnswers from './HomeAnswers/HomeAnswers'

let Home = () => {
  let [input, setInput] = useState()
  let [state, setState] = useState([])
  let [css, setCss] = useState()
  let [docs, setDocs] = useState([])
  let regexp = /#([a-f0-9]{3}){1,2}/gi

  useEffect(() => {
    // console.log(state)
    // console.log(css)
  }, [state, css, docs])

  let doSomething = useCallback(async (e) => {
    e.preventDefault()
    await axios
      .get(`${input}`)
      .then((response) => {
        res(response.data) // await всегда дождётся выполнения res?
        setState([...response.data.match(regexp)])
        // setDocs([...css,...state]) // не могу объеденить два стейта в один, лох!

      })
      .catch((error) => {
        console.log(error)
      })
  }, [input, state, css, docs])

  let res = async (htmlResponce) => {
    let start = htmlResponce.indexOf(`<link rel="stylesheet" type="text/css"`);
    let end = htmlResponce.indexOf(`>`, start)
    let stylesheet = htmlResponce.substring(start, end)
    let findHrefStart = stylesheet.indexOf('href="')
    let result = stylesheet.substring(findHrefStart + 6, stylesheet.length - 1)
    await axios
      .get(`${input + result}`)
      .then((response) => {
        // console.log(typeof response.data)
        setCss([...response.data.match(regexp)])
      })
  }

  let textInput = (e) => {
    setInput(e.target.value)
    console.log(input)
  }

  return (
    <div className={s.home}>
      <form >
        <div className={s.elem}>
          <input id='input' type='text' placeholder='Write site adress' onChange={textInput} />
        </div >
        <div className={s.elem}>
          <button onClick={doSomething}>Check it now !</button>
          {/* <button onClick={searchColors}>Check result</button> */}
        </div>

      </form>

      <div>вторая компонента
        <HomeAnswers store={store} state={state} />
      </div>

    </div>
  )
}

export default Home