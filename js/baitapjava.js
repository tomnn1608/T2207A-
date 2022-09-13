
    var mins = 10;
    var sec = 59;
    var thoigianchay = setInterval(function(){
    if(sec < 0 ){
    if(mins <=0){
    clearInterval(thoigianchay);
    document.getElementById("demnguoc").innerHTML = "Finished";
}
    mins -=1;
    sec = 59;
} else {
    document.getElementById("demnguoc").innerHTML = mins + "m "+ sec+"s";
    sec -= 1;
}
}, 1000);

