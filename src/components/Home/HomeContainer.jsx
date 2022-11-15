import { connect } from 'react-redux'
import { colors } from '../colors'
import { addWebsiteUrlActionCreator, getStylesheetUrl, setAnswer } from '../redux/home-reducer'
import Home from './Home'

let mapStateToProps = (store) => {
    return {
        colors: colors,
        websiteURL: store.homePage.websiteURL,
        styleSheetURL: store.homePage.styleSheetURL,
        colorsFromCss: store.homePage.colorsFromCss,
        colorsFromHtml: store.homePage.colorsFromHtml,
        intersections: store.homePage.intersections,
        isAnswer: store.homePage.isAnswer,
        wasAsked: store.homePage.wasAsked,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addUrl: (newWebsiteUrl) => {
            dispatch(addWebsiteUrlActionCreator(newWebsiteUrl))
        },
        getStylesheetUrl: () => {
            dispatch(getStylesheetUrl())
        },
    }
}
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
export default HomeContainer