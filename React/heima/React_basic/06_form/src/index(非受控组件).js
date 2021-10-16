import React from 'react'
import ReactDOM from 'react-dom'

// 非受控组件
// 1.调用React.createRef()方法创建一个ref对象
class Hello extends React.Component{
  constructor(){
    super()
    this.txtRef = React.createRef()
  }
  // 获取文本框的值
  getTxt = () =>{
    console.log('文本框的值为：',this.txtRef.current.value)
  }
  render(){
    return (
      <div>
         {/* 2.将创建好的ref对象添加到文本框中 */}
        <input type="text" ref={this.txtRef}></input>
        <button onClick={this.getTxt}>获取文本框的值</button>
      </div>
          
    )
  }
}
// 将组件渲染到页面挂载点
ReactDOM.render(<Hello/>,document.getElementById('root'))





