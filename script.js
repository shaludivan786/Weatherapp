const time1=document.getElementById('time');
const date1=document.getElementById('date');
const currentweatheritems=document.getElementById('current-wrather-item');
const timezone=document.getElementById('time-zone');
const country1=document.getElementById('country');
const weatherforecast=document.getElementById('weather-forecast');
const currenttemp=document.getElementById('current-temp');
const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
setInterval(() =>{
const time =new Date();
const month= time.getMonth();
const year=time.getFullYear();
const date=time.getDate();
const day=time.getDay();
const hour=time.getHours();
const time12hformat= hour>=13 ? hour%12:hour
const minutes=time.getMinutes();
const ampm= hour>=12? 'PM':'AM';
time1.innerHTML=time12hformat+':'+minutes+' '+ampm
date1.innerHTML=days[day]+' , '+date+' '+months[month]+'  '+year
},1000); 