var person={
  name: "john", age: 31 ,height: 183
};
var v=person.age;
function detail(name,age)
{
this.name=name;
this.age=age;
this.yearofbirth=bornyear;
}
function bornyear(){
  return 2017-this.age;
}
var p= new detail("johny",31);
document.write(p.yearofbirth());
var book= new Array(12,23,34);
var i;
var n=book.length;
for(i=0;i<n;i++)
document.write("<br />"+book[i]);
/*var book1= new Array(45,56,78);
var gh= book.concat(book1);
for(i=0;i<gh.lenght;i++)
document.write("<br />"+gh[i]);*/
function set(){
  alert("hii");
}
setInterval(set,9000);
/*function date(){
var d  = new Date();
var sec=d.getSeconds();
document.write(d+" "+sec);
}
setInterval(date,1000);*/
