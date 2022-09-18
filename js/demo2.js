var obj = {
    name: 'tom',
    age: 18,
    mark: 8,
    girlFriends: ['A','B','C','D'],
    eat: function (){
        console.log(this.name+"tom dang an...");
    }
};
console.log(obj.name);
obj.name = 'nhim';
console.log(obj.name);
for(var i=0 ; i < obj.girlFriends.length ; i++){
    console.log(obj.girlFriends[i]);
}
obj.eat();

var f = 0;
function demo1() {
    var x = document.getElementById("abc");
    //x.innerText = "T2207A";
    //x.innerHTML += '<i>Hello world!</>';
    //.style.color = "red";
    //x.style.fontSize = f + 'px';
    x.style.transform ='rotate('+f+'deg)';
    f += 1 ;
}
function quayTron() {
    setInterval(demo1, 10);
}
var j = 0;
function demo2() {
    var x = document.getElementById("abc");
    x.style.transform ='rotate('+j+'deg)';
    j += 5 ;
}
function quayTron2() {
    setInterval(demo2, 1);
}
 var   k= 0;
function demo3  () {
    var x = document.getElementById("abc");
    x.style.transform ='rotate('+k+'deg)';
    k += 7 ;
}
function quayTron3() {
    setInterval(demo3, 0,11);
}