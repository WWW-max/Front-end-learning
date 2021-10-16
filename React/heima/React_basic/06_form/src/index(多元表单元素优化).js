import React from "react";
import  ReactDOM  from "react-dom";

// 受控组件，其值收到React控制的表单元素
class Hello extends React.Component{
  state ={
    txt:'文本框',
    content:'富文本框',
    city:'北京',
    isChecked:false,
  }
  // 多表单元素优化
  // 处理函数
  handleChangeForm= e =>{
    // 获取当前DOM对象
    const target = e.target;

    // 根据类型获取值
    const value =target.type ==='checkbox' ? target.checked : target.value

    // 获取name
    const name = target.name
      this.setState({
        [name]:value
      })
  }
  
  render(){
    return (
    <div>
      {/* 文本框 */}
      <input type="text" name="txt" value={this.state.txt} onChange={this.handleChangeForm}></input><br/>
      {/* 富文本框 */}
      <textarea name="content" value={this.state.content} onChange={this.handleChangeForm}></textarea><br/>
      {/* 下拉列表 */}
      <select name="city" value={this.state.city} onChange={this.handleChangeForm}>
        <option>北京</option>
        <option>上海</option>
        <option>深圳</option>
      </select><br/>
      <input type='checkbox'  name="isChecked" checked={this.isChecked} onChange={this.handleChangeForm}></input>
      
   </div>
      )

  }
}

ReactDOM.render(<Hello/>,document.getElementById('root'));