function fun(x){
    return function(y){
        return function(z){
            return x+y+z;
        }
    }
}

console.log(fun(1)(2)(3));