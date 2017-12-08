import axios from 'axios'
function generateFormData (obj) {
  let result = ''
  for (let key in obj) {
    result += `&${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
  }
  if (result.length > 0) {
    result = result.substr(1)
  }
  return result
}
export function get (url) {
  return axios.get(url).then((response) => {
    return Promise.resolve(response.data)
  })
  .catch(reject => {
    alert('噢，看起来你的网络不太好哦')
    return Promise.reject(reject)
  })
}
export function post (url, obj = {}) {
  return axios.post(url, generateFormData(obj)).then((response) => {
    return Promise.resolve(response.data)
  })
  .catch(reject => {
    alert('噢，看起来你的网络不太好哦')
    return Promise.reject(reject)
  })
}
