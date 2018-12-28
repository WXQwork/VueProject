import axios from 'axios'
//设置能带cookie
//axios.defaults.withCredentials=true
export default ({method, url, params})=>{
    return axios({
        method,
        url,
        params
      })
      .then(result => {
        return result.data
      })
      .catch(error => {
        return error
      })
}