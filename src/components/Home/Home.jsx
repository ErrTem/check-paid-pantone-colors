import React from 'react';
import s from './Home.module.css';
import HomeItems from './HomeItems';

const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
const link =
  'https://www.theverge.com/2022/11/1/23434305/adobe-pantone-subscription-announcement-photoshop-illustrator';

let Home = ({ addUrl, websiteURL, getStylesheetUrl, wasAsked, isAnswer, intersections }) => {
  const textInput = (e) => {
    addUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (websiteURL.match(regexp)) {
      getStylesheetUrl();
    } else {
      alert('please write correct site address');
    }
  };

  return (
    <div className={s.home}>
      <div className={s.text}>
        Hello there! <br />
        Due to the new rules of pantone license{' '}
        <a href={link}>now you have to pay to use Pantone colors in Adobe products.</a> Who knows
        what corporations come up with next?
        <br />
        You can check the website for paid pantone colors by the form below
      </div>

      <div className={s.elem}>
        <input id="input" type="text" placeholder="Write site adress" onChange={textInput} />
      </div>
      <div className={s.elem}>
        <button onClick={handleSubmit}>Check it now !</button>
      </div>

      <div>
        {wasAsked ? (
          isAnswer ? (
            <div className={s.main}>
              <HomeItems intersections={intersections} />
            </div>
          ) : (
            <div>Not found</div>
          )
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Home;
