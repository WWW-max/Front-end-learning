var arr = readline().split(' ')
var s1 = arr[0], s2 = arr[1], i = s1.length-1, j = s2.length -1
var carry = 0,res = []
while(i >= 0 || j >= 0 || carry){
    let num1 = i >= 0 ? parseInt(s1[i]) : 0
    let num2 = j >= 0 ? parseInt(s2[j]) : 0
    let sum = num1 + num2 + carry
    carry = Math.floor(sum / 10)
    res.push(sum % 10)
    i--
    j--
}
console.log(res.reverse().join(''))