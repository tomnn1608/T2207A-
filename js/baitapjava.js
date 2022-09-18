
var m = 10,s=0;
function timer() {
    var min= document.getElementById("min");
    var sec= document.getElementById("sec");
    min.innerText = m;
    sec.innerText = s;
    s--;
    if(s<0){
        s=59;
        m--;
    }if(m<0){
        clearInterval(si);
    }
}
var si;
function startTimer(){
    if(m>0) {
        si = setInterval(timer, 10);
    }
    }
