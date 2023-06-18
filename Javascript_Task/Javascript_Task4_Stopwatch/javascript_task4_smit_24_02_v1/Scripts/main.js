
var min=00;
var sec=00;
var csec=00;
var hour=00;
var cd;
var hourNum=document.getElementById("hours-num-v");
var minNum=document.getElementById("minutes-num-v");
var secNum=document.getElementById("sec-num-v");
var csecNum=document.getElementById("msec-num-v");
var btnStart=document.getElementById("btn-start");
var anno=document.getElementById("announce");



function startTime(){
    // startCountdown();
    if(btnStart.innerHTML=="RESUME"){
        resumeTime();
    }
    else{
        cd=setInterval(startCountdown,10);
    }         
}
function startCountdown(){
    anno.innerHTML="RUNNING";
    csec++; 
    if(csec < 100){
        if(csec<=9){
            csecNum.innerHTML = "0" + csec;
          }
        else{
            csecNum.innerHTML = csec;
        }
      }
    else{
    sec++;
    secNum.innerHTML = "0" + sec;
    csec = 0;
    csecNum.innerHTML = "0" + 0;
    }
    
   
    if(sec > 9){
      secNum.innerHTML = sec;
    }
    if(sec>59){
        min++;
        minNum.innerHTML = "0" + min;
        sec = 0;
        secNum.innerHTML = "0" + 0;
    }
    if(min>9){
        minNum.innerHTML = min;
    }
    if(min>59){
        hour++;
        hourNum.innerHTML = "0" + hour;
        min = 0;
        minNum.innerHTML = "0" + 0;
    }
    if(hour>9){
        hourNum.innerHTML = hour;
    }


}

function stopTime(){ 
    if(btnStart.innerHTML=="START"){
        clearInterval(cd);
        btnStart.innerHTML="RESUME";
        anno.innerHTML="HIT RESUME..!";
    }
}
function resetTime(){
    
    min=00;
    sec=00;
    csec=00;
    hour=00;
    csecNum.innerHTML = "0" + 0;
    secNum.innerHTML = "0" + 0;
    minNum.innerHTML = "0" + 0;
    hourNum.innerHTML = "0" + 0;
    anno.innerHTML="HIT START..!"
    document.getElementById("clear").style.display="none";
    if(btnStart.innerHTML!="START"){
        btnStart.innerHTML="START";
    }
    clearLap();
    clearInterval(cd); 
}
    
function resumeTime(){
    btnStart.innerHTML = "START";
    cd=setInterval(startCountdown,10);
}
function lapTime(){
    
      var tag = document.createElement("p");
      var text = document.createTextNode("Pause at-"+hourNum.innerHTML+":"+minNum.innerHTML+":"+secNum.innerHTML+":"+csecNum.innerHTML);
      tag.appendChild(text);
      var element = document.getElementById("lap");
      element.appendChild(tag);
      document.getElementById("clear").style.display="block";
}
function clearLap(){
    var element = document.getElementById('lap');
while (element.firstChild) {
    element.removeChild(element.firstChild);
}
}
