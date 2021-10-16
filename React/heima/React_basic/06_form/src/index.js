import React from "react";
import  ReactDOM  from "react-dom";

// 受控组件，其值收到React控制的表单元素
class Hello extends React.Component{
  state ={
    txt:'文本框',
    content:'富文本框',
    city:'北京',
    isChecked:true,
  }
  // 处理文本框的变化
  onChangeHandle= e =>{
      this.setState({
        txt:e.target.value
      })
  }
  // 处理富文本框的变化
  handleContent= e =>{
      this.setState({
        content:e.target.value
      })
  }
  // 处理下拉列表的变化
  handleCity = e =>{
    this.setState({
      city:e.target.value
    })
  }
  // 处理复选框的变化
  handleChecked = e =>{
    this.setState({
      isChecked :e.target.checked
    })
  }
  render(){
    return (
    <div>
      {/* 文本框 */}
      <input type="text" value={this.state.txt} onChange={this.onChangeHandle}></input><br/>
      {/* 富文本框 */}
      <textarea value={this.state.content} onChange={this.handleContent}></textarea><br/>
      {/* 下拉列表 */}
      <select value={this.state.city} onChange={this.handleCity}>
        <option>北京</option>
        <option>上海</option>
        <option>深圳</option>
      </select><br/>
      <input type='checkbox' checked={this.isChecked} onChange={this.handleChecked}></input>
      
   </div>
      )

  }
}

ReactDOM.render(<Hello/>,document.getElementById('root'));