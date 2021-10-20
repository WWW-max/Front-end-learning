/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let len  = s.length;
    // 长度不是偶数显然不对
    if(len%2!=0){
        return false;
    }
    let stack = [];
    for(let i=0;i<len;i++){
    /**
     * 不用Map,只用栈
     * 遇见左括号进栈,同是为左括号匹配相应的右括号进栈
     * 否则，如果栈为空(没有左括号进栈)不匹配，如果栈不为空但是该符号不等于出栈的右括号也返回false
     */
        if(s[i]=='('){
            stack.push(')');
        }else if(s[i]=='['){
            stack.push(']');
        }else if(s[i]=='{'){
            stack.push('}')
        }else if(stack.length==0||s[i]!=stack.pop()){
            return false;
        }
    }
    if(stack.length!=0){
        return false;
    }
    return true;
};