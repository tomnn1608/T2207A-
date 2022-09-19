//var obj = {
    //name: 'tom',
    //age: 18,
    //mark: 8,
    //girlFriends: ['A','B','C','D'],
    //eat: function (){
        //console.log(this.name+"tom dang an...");
    //}
//};
//console.log(obj.name);
//obj.name = 'nhim';
//console.log(obj.name);
//for(var i=0 ; i < obj.girlFriends.length ; i++){
    //console.log(obj.girlFriends[i]);
//}
//obj.eat();

//function demo1() {
    //var x = document.getElementById("abc");
    //x.innerText = "T2207A";
    //x.innerHTML += '<i>Hello world!</>';
    //.style.color = "red";
    //x.style.fontSize = f + 'px';
    //x.style.transform ='rotate('+f+'deg)';
    //f += 1 ;
//}
//function quayTron() {
    //setInterval(demo1, 10);
//}
var f = false;
var v = 0;
var a = 0;
function quaycanhquat() {
    if (f == true) {
        var canhquat = document.getElementById("canhquat");
        canhquat.style.transform = "rotate(" + v + "+deg)";
        v += a;
        console.log(v)
    }
}
setInterval(quaycanhquat, 10);
function off() {
    f= false;
    v=0;
    a=0;
}
function f1() {
    if (f == false){
        f=true;
    }
    v=2;
    a=3;
}
function f2(){
    if (f==false){
        f=true;
    }
    v=3;
    a=4;
}
function f3(){
    if (f==false){
        f=true;
    }
    v=5;
    a=6;
}