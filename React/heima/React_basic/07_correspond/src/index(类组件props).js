import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 组件的通信
 * props
 */
//1.类组件props写法
class Hello extends React.Component {
  render(){
    return (
      <div>
        <h2>name:{this.props.name}</h2>
        <h2>age:{this.props.age}</h2>
      </div>
    )
  }
}

ReactDOM.render(<Hello name="张三" age={19}/>,document.getElementById('root'))