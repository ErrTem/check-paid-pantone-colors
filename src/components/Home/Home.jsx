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
      alert('please write correct site address')
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
      <div className={s.text}>
        Hello there! <br />
        Due to the new rules of pantone license <a href='https://www.theverge.com/2022/11/1/23434305/adobe-pantone-subscription-announcement-photoshop-illustrator'>
          now you have to pay to use Pantone colors in Adobe products.
        </a> Who knows what corporations come up with next?<br />
        You can check the website for paid pantone colors by the form below
      </div>

      <div className={s.elem}>
        <input id='input' type='text' placeholder='Write site adress' onChange={textInput} />
      </div >
      <div className={s.elem}>
        <button onClick={handleSubmit}>Check it now !</button>
      </div>


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