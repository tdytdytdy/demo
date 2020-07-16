import axios from 'axios'
import { Message } from 'element-ui'
import query from 'querystringify'
const service = axios.create({
    baseURL: process.env.VUE_APP_BASEURL,
    timeout: 8000
})
service.interceptors.response.use(
    response => {

        let {data} = response;
        if (data.code || data.status !== undefined) {
            if (data.code === '200' || data.status === 0) {
                return data.data
            }
        }
    },
    error => {
        if (error.code !== 'ECONNABORTED') {
            Message({
                message: error.message,
                type: 'error',
                duration: 5 * 1000
            })
        }
        return Promise.reject(error)
    })
const post = (url) => (data) => {
    return service({
        url,
        method: 'POST',
        data
    })
}
const postbystring = (url) => (data) => {
    return service({
        url,
        method: 'POST',
        data: query.stringify(data)
    })
}

const getbystring = (url) => (params) => {
    return service({
        url,
        params: query.stringify(params),
        method: 'GET'
    })
}
const get = (url) => (params) => {
    return service({
        url,
        params,
        method: 'GET'
    })
}
export {
    post,
    postbystring,
    get,
    getbystring
}