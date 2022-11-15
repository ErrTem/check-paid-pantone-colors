import React from 'react'
import s from './Home.module.css'

let Home = (props) => {

  let textInput = (e) => {
    props.addUrl(e.target.value)
  }

  let handleSubmit = (e) => {
    e.preventDefault()
    if (props.websiteURL.startsWith('https://') || props.websiteURL.startsWith('http://')) {
      props.getStylesheetUrl()
    } else {
      alert('wrong!')
    }

  }

  let items = props.intersections.map((item, index) => {
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
    <div className={s.home}>
      <form >
        <div className={s.elem}>
          <input id='input' type='text' placeholder='Write site adress' onChange={textInput} />
        </div >
        <div className={s.elem}>
          <button onClick={handleSubmit}>Check it now !</button>
        </div>
      </form>

      <div>
        {props.wasAsked
          ? (props.isAnswer
            ? <div className={s.main}>
              {items}
            </div>
            : <div>Not found</div>)
          : (<div></div>)
        }
      </div>

    </div>
  )
}

export default Home