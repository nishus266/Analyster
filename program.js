var x=20;
var y=x+10;
var z= (2<3)&&(3<4);
alert("hii my name is nishant sharma"+"  "+x+"\n\t"+y+"\n"+z);  /* this is comment   */
function check(){
var usr1=prompt("enter your password");
var pass=1234;
if(usr1==pass)
alert("pass is correct");
else
{
alert("pass is wrong \n \t try again");
check();
}
}
check();
var i;
for(i=0;i<=5;i++)
document.write(i+"<br />");
function math(a,b)
{
  /*var a=2;
  var b=3;*/
  var g=a+b;
  document.write(g);
}
math(x,y);
