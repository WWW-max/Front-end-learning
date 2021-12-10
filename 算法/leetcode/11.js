const res =(function fun(str){
    if(str.length<2){
        return [];
    }
    let res = [];
    for(let i=0;i<str.length-1;i++){
        if(str[i]==str[i+1]){
            res.push(str.substring(i,i+2));
        }
    }
    return res;
 })('晴川历历汉阳树，芳草萋萋鹦鹉洲');

 console.log(res);