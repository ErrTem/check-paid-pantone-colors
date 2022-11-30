import * as api from '../API/api';
import * as colors from '../assets/colors';

const regexp = /#([a-f0-9]{3}){1,2}/gi;

const ADD_WEBSITE_URL = 'ADD_WEBSITE_URL';
const ADD_STYLESHEET_URL = 'ADD_STYLESHEET_URL';
const ADD_CSS_COLORS = 'ADD_CSS_COLORS';
const ADD_HTML_COLORS = 'ADD_HTML_COLORS';
const ADD_INTERSECTIONS = 'ADD_INTERSECTIONS';
const WAS_ASKED = 'WAS_ASKED';

const initialState = {
  wasAsked: false,
  isAnswer: false,
  websiteURL: '',
  styleSheetURL: [],
  colorsFromCss: {},
  colorsFromHtml: {},
  intersections: [],
  colors: colors.colors
};

const homeReducer = (action, state = initialState) => {
  switch (action.type) {
    case ADD_WEBSITE_URL: {
      return {
        ...state,
        websiteURL: action.newWebsiteUrl
      };
    }
    case ADD_STYLESHEET_URL: {
      return {
        ...state,
        styleSheetURL: [action.newStylesheetURL] // do for many css
      };
    }

    case ADD_CSS_COLORS: {
      return {
        ...state,
        colorsFromCss: [...action.colorsCss]
      };
    }
    case ADD_HTML_COLORS: {
      return {
        ...state,
        colorsFromHtml: [...(action.colorsHtml || [])]
      };
    }
    case WAS_ASKED: {
      return {
        ...state,
        wasAsked: true
      };
    }
    case ADD_INTERSECTIONS: {
      const allColors = [...action.payload.colorsFromHtml, ...action.payload.colorsFromCss]; // is not iterable
      const mapColors = Object.entries(colors.colors);
      const result = mapColors.filter((element) => allColors.includes(element[1]));
      let rerender = false;
      if (result.length !== 0) {
        rerender = true;
      }

      return {
        ...state,
        intersections: [...result],
        isAnswer: rerender,
        wasAsked: true
      };
    }
    default:
      return state;
  }
};

export const addWebsiteUrlActionCreator = (newWebsiteUrl) => ({
  type: ADD_WEBSITE_URL,
  newWebsiteUrl
});
export const addStylesheetUrl = (newStylesheetURL) => ({
  type: ADD_STYLESHEET_URL,
  newStylesheetURL
});
export const addCssColors = (colorsCss) => ({
  type: ADD_CSS_COLORS,
  colorsCss
});
export const addHtmlColors = (colorsHtml) => ({
  type: ADD_HTML_COLORS,
  colorsHtml
});
export const addIntersections = (colorsFromHtml, colorsFromCss) => ({
  type: ADD_INTERSECTIONS,
  payload: { colorsFromHtml, colorsFromCss }
});
export const wasAsked = () => ({
  type: WAS_ASKED
});

export const getStylesheetUrl = () => async (dispatch, getState) => {
  dispatch(wasAsked());
  try {
    const websiteUrl = getState().homePage.websiteURL;
    const responseHtml = await api.linkAPI.getHTML(websiteUrl);

    let linkToCss;
    if (responseHtml !== undefined) {
      const start = responseHtml.indexOf(`<link rel="stylesheet" type="text/css"`); // взять и одинарные кавычки
      const end = responseHtml.indexOf(`>`, start);
      const stylesheet = responseHtml.substring(start, end);
      const findHrefStart = stylesheet.indexOf('href="');

      if (findHrefStart !== -1) {
        linkToCss = stylesheet.substring(findHrefStart + 6, stylesheet.length - 1);
        dispatch(addStylesheetUrl(linkToCss));
      }

      const res = responseHtml.match(regexp);
      dispatch(addHtmlColors(res));
    }

    const responseCss = await api.linkAPI.getCSS(websiteUrl, linkToCss);

    if (responseCss !== undefined) {
      dispatch(addCssColors(responseCss.match(regexp)));
    }

    const { colorsFromHtml } = getState().homePage;
    const { colorsFromCss } = getState().homePage;
    dispatch(addIntersections(colorsFromHtml, colorsFromCss));
  } catch (error) {
    console.log(error);
  }
};

export default homeReducer;
