var person={name:"chenna",age:"20",favcolor:"red",changename:function fn(name,age){this.name=name ,this.age=age;}}
console.log("before fuction call");
console.log(person.name);
console.log(person.age)
console.log("after function call");
person.changename("kalyanbabu",30);
console.log(person.name);
console.log(person.age)
/*function fn(a){
    this.name=a;
    console.log("my name is "+name);
}
fn("beverse lanja");*/
