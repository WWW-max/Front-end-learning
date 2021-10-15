function forEach(obj){
      if(obj instanceof Array){
          obj.forEach((item)=>{
               console.log(item);
          })
      }else{
          for(item in obj){
              console.log(item+':'+obj[item])
          }
      }
}

var obj ={
    name:'王五',
    age:20
}
var arr =[3,3,2,4];
forEach(obj);
forEach(arr);