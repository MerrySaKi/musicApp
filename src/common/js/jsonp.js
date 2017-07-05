import orginJSONP from 'jsonp'

export default function JSONP (url, data, option) {
  // 添加url 地址参数
  url += (url.indexOf('?') < 0 ? '?' : '&') + Param(data)
  return new Promise((resolve, reject) => {
    orginJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
// 获取url参数
function Param (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
