
let min;
let sec;
let csec;
let hour;
var cd;

let timeIn;
let timeInput=document.getElementById("time");
let hourNum=document.getElementById("hours-num-v");
let minNum=document.getElementById("minutes-num-v");
let secNum=document.getElementById("sec-num-v");
let csecNum=document.getElementById("msec-num-v");
let btnStart=document.getElementById("btn-start");
let anno=document.getElementById("announce");

function start(){
    if(btnStart.innerHTML==="START"){
        startTime();
    }
    else if(btnStart.innerHTML==="RESUME"){
        resumeTime();
    }
    else{
        restartTime();
    }
}
function startTime(){
        clearInterval(cd);
        timeIn= timeInput.value;
        console.log(timeIn);
        if(timeIn>0){
            hour= Math.floor(timeIn/3600);
            if(timeIn%3600==0){
                min=0;
            }
            else{
                min = Math.floor(timeIn/60);
            }
            sec = Math.floor((timeIn%3600)%60);
            csec = 0;
            if(min>60){
                min=min%60;
            }
            if(sec>60){
                sec=sec%60;
            }
            cd=setInterval(startCountdown,10); 
        }
        else{
            alert("Enter the valid number");
        }     
}
function startCountdown(){
    anno.innerHTML="RUNNING";
    if(csec===0 && sec===0 && min===0 && hour===0){
        clearInterval(cd);
    }
    if(csec>9){
        csecNum.innerHTML=csec;
    }
    else{
        csecNum.innerHTML= "0" + csec;
    }

    if(sec>9){
        secNum.innerHTML=sec;
    }
    else{
        secNum.innerHTML= "0" + sec;
    }

    if(min>9){
        minNum.innerHTML=min;
    }
    else{
        minNum.innerHTML= "0" + min;
    }
    if(hour>9){
        minNum.innerHTML=hour;
    }
    else{
        hourNum.innerHTML= "0" + hour;
    }
    
    if(csec>0){
        csec--;
    }
    if(csec==0 && sec>0){
        csec=100;
        sec--;
    }

    if(sec==0 && min>0){
        sec=60;
        min--;
    }
    if(min==0 && hour>0){
        min=60;
        hour--;
    }
}

function stopTime(){ 
    if(timeIn>0){
        if(btnStart.innerHTML=="START"){
            clearInterval(cd);
            btnStart.innerHTML="RESTART";
            anno.innerHTML="HIT RESTART..!";
        }
    } 
}
function pauseTime(){
    if(timeIn>0){
        if(btnStart.innerHTML=="START"){
            clearInterval(cd);
            btnStart.innerHTML="RESUME";
            anno.innerHTML="HIT RESUME..!";
        } 
    }
}
function resetTime(){
    if(timeIn>0){
        csecNum.innerHTML = "0" + 0;
        secNum.innerHTML = "0" + 0;
        minNum.innerHTML = "0" + 0;
        hourNum.innerHTML = "0" + 0;
        anno.innerHTML="HIT START..!"
        timeInput.value="";
        if(btnStart.innerHTML != "START"){
            btnStart.innerHTML = "START";
        }  
        clearInterval(cd);
    }  
} 
function resumeTime(){
    if(timeIn>0){
        btnStart.innerHTML = "START";
    cd=setInterval(startCountdown,10); 
    } 
}
function restartTime(){
    if(timeIn>0){
        btnStart.innerHTML = "START";
        startTime();
    }
    
}

