// -----Stopwatch------

let [seconds,minutes,hours]=[0,0,];
let displayTime=document.getElementById("displayTime");
let timer=null;

function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h=hours<10?"0"+hours : hours;
    let m=minutes<10?"0"+minutes : minutes;
    let s=seconds<10?"0"+seconds : seconds;

    displayTime.innerHTML=h+" : "+m+" : "+s;
}

function watchStart(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000); 
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [seconds,minutes,hours]=[0,0,0];
    displayTime.innerHTML="00 : 00 : 00"
}


// -----------Timer--------


var dest=new Date("sep 17, 2023 04:40:00").getTime();
var x=setInterval(function(){
var now=new Date().getTime();
var diff=dest-now;
console.log(diff);

var days=Math.floor(diff/(1000*60*60*24));
console.log(days);

var hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
console.log(hours);
var minutes=Math.floor((diff%(1000*60*60))/(1000*60));
console.log(minutes);
var seconds=Math.floor((diff%(1000*60))/(1000));
console.log(seconds);
document.getElementById("demo").innerHTML= days +"d, "+hours+"hrs : "+minutes+"m : "+seconds+"s"
}, 1000 );