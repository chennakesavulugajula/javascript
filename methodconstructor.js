function person(name,age){
    this.name=name;
    this.age=age;
    this.changename=fn;
}
function fn(name,age){
    this.name=name;
    this.age=age;
}
var p1=new person("chenna",20);
console.log("before function call");
console.log(p1.name);
console.log(p1.age)
console.log("after function call");
p1.changename("kalyanbabu",53);
console.log(p1.name);
console.log(p1.age);

