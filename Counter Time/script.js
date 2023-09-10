const newYears = '1 jan 2024';

const daysE1=document.getElementById("days")
const hoursE1=document.getElementById("hours")
const minE1=document.getElementById("min")
const secondsE1=document.getElementById("seconds")

function countdown(){
  const newYearsDate=new Date(newYears);
  const currentDate=new Date();

  const totalSeconds = (newYearsDate-currentDate)/1000;

  const days=Math.floor(totalSeconds/3600/24);
  const hours=Math.floor(totalSeconds/3600)%24;
  const min=Math.floor(totalSeconds/60)%60;
  const seconds=Math.floor(totalSeconds)%60;
   

  daysE1.innerHTML= days;
  hoursE1.innerHTML= hours;
  minE1.innerHTML= min;
  secondsE1.innerHTML=  seconds;
}

countdown();
setInterval(countdown,1000);