/*
 * @Date: 2022-07-01 17:15:46
 * @LastEditors: 刘国亮
 * @LastEditTime: 2022-07-01 17:19:40
 * @FilePath: \react-project\src\utils\index.js
 * @Description: 
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  formatTimeYYMMdd:  (data) => {
    const date = new Date(data)
    console.log(date)
    if (date == 'Invalid Date') {
      return data
    }
    let y = date.getFullYear()
    let mon = date.getMonth() + 1
    let d = date.getDate()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    y = y < 10 ? '0' + y : y
    mon = mon < 10 ? '0' + mon : mon
    d = d < 10 ? '0' + d : d
    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s
  
    return `${y}-${mon}-${d} ${h}:${m}:${s}`
  }
}
