/*
 * @Date: 2022-06-30 14:13:48
 * @LastEditors: 刘国亮
 * @LastEditTime: 2022-07-01 17:12:29
 * @FilePath: \react-project\src\App.js
 * @Description: 
 */
import React from 'react';
import './App.css';
import Header from './components/Header/Index'

export default class App extends React.Component {
  state = {
    list:[]
  }
  changeList = (type,newOrIdx)=>{
    console.log(type,newOrIdx)
    const {list} = this.state
    if(type==='add') {
       list.unshift(newOrIdx)
    }else if(type==='del') {
      list.splice(newOrIdx,1)
    }
    this.setState({list})
  }
  render() {
    return (
      <div className="App">
        <Header changeList={this.changeList}></Header>
      </div>
    )
  }
  
}
