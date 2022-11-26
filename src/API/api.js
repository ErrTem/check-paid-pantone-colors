import axios from "axios";

export const linkAPI = {
    getHTML(url) {
        return axios.get(`${url}`).then(response => response.data)
    },
    getCSS(url, cssURL) { // check if url ends on slash

        return axios.get(`${url + cssURL}`).then(response => response.data).catch((error) => { console.warn('not good css')})
    }
}
