/*
 * @Date: 2022-07-01 15:42:52
 * @LastEditors: 刘国亮
 * @LastEditTime: 2022-07-01 17:30:36
 * @FilePath: \react-project\src\components\Header\Index.jsx
 * @Description: 
 */
import './Index.less'
import React,{ Component } from 'react'
export default class Header extends Component {
  state = {
    value:''
  }
  render() {
    return (
      <div className='header'>
        <input type="text" onKeyUp={this.onActions} />
      </div>
    )
  }
  componentDidMount() {
    console.log('Header props',this.props)
    console.log('$utils',React.$utils)
  }
  onActions = (e)=> {
    console.log(e.keyCode)
    if(e.keyCode!==13) return false
    if(!e.target.value) return alert('不许用脑电波交流')
    const time = React.$utils.formatTimeYYMMdd(new Date())
    const newItem = {
      time,
      text:e.target.value
    }
    this.props.changeList('add',newItem)
    e.target.value = ''
  }
}