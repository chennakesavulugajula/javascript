function person(name,age,color){
    this.name=name;
    this.age=age;
    this.color=color;
}
var p1=new person("chenna",20,"red");
var p2=new person("kalyan",53,"green");
console.log(p1.name);
console.log(p2.name);
console.log(p2.age);
console.log(p2.color.length)
