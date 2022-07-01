/*
 * @Date: 2022-07-01 17:43:17
 * @LastEditors: 刘国亮
 * @LastEditTime: 2022-07-01 17:51:21
 * @FilePath: \react-project\src\components\Ul\index.jsx
 * @Description: 
 */
import React, { Component } from 'react'

export class Ul extends Component {
  render() {
    return (
      <ul>
        {
          this.props.list.map(item=>(
            <li>{item.text+' '+item.time}</li>
          ))
        }
        
      </ul>
    )
  }
}

export default Ul


