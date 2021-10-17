import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 兄弟组件间的通信
 * props
 */
//父组件
class Parent extends React.Component{
  state ={
    msg:''
  }
  getChild = data =>{
    console.log('接收到来自子组件的数据：'+data); 
     var str = '接收到来自子组件的数据：'+data
    this.setState({msg:str})
  }
  render(){
    return (
      <div className="parent">
        父组件:{this.state.msg}
        <Child getMsg={this.getChild}/>
      </div>
    )
  }
}
// 子组件
class Child extends React.Component{
  state = {
    msg:'刷抖音'
  }
  handleClick =() =>{
    this.props.getMsg('刷抖音');
  }
  render(){
    return (
    <div className="child">
      子组件：<button onClick={this.handleClick}>点击我给父组件传递数据</button>
    </div>
  )
  }
}

ReactDOM.render(<Parent/>,document.getElementById('root'))