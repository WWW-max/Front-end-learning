import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 父组件传给子组件的通信
 * props
 */
//父组件
class Parent extends React.Component {
  render(){
    return (
      <div>
        <Child name="王"/>
      </div>
    )
  }
}
// 子组件
function Child (props){
   return (
     <div>我是子组件接到了父组件传来的：{props.name}</div>
   )
}

ReactDOM.render(<Child/>,document.getElementById('root'))