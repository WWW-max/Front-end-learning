import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 组件的通信
 * props
 */
//1.函数组件props写法
const Hello = (props) => {
  return (
    <div>
      <h1>name{props.name}</h1>
      <h1>age{props.age}</h1>
    </div>
  )
}

ReactDOM.render(<Hello name="张三" age={19}/>,document.getElementById('root'))