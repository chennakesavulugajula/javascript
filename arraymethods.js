/*var a=new Array("1","2");
var b=new Array("3","4");
var c=b.concat(a);
console.log("a values are:"+a);
console.log("b values are:"+b);
console.log("c values are:"+c);
console.log(a.length)*/
var a=new Array("1","2",'"3',"4","5","6");

console.log("before pop the eliment: "+a)
a.pop()
console.log("after pop the eliment: "+a)
a.push("hello")
console.log(a);
delete a[0]
console.log(a)