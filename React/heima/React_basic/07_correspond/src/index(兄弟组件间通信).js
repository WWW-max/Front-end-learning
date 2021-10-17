import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 兄弟组件间的通信
 * props
 */
//父组件
class Counter extends React.Component{
  // 提供共享状态
  state ={
    count:0
  }
// 提供修改状态的方法
  onIncrement = ()  =>{
    this.setState({
      count:this.state.count+1//不能用++
    })
  }

  render(){
    return (
      <div className="parent">
            <Child1 count={this.state.count}/>
            <Child2 onIncrement={this.onIncrement}/>
      </div>
    )
  }
}
// 子组件
const Child1 = props =>{
  return(
    <h2>计数器：{props.count}</h2>
  )
}
const Child2 = props =>{
    function handleOnclick(){
     props.onIncrement()
  }
  return (
    <button onClick={handleOnclick}>+1</button>
  )
}

ReactDOM.render(<Counter/>,document.getElementById('root'))
