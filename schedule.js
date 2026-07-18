/* ===================================
   岡山瀨戶內慢旅
   Schedule Display System
=================================== */


function renderSchedule(){


const area = document.getElementById(
    "schedule-area"
);



if(!area){

    return;

}



let html="";



Object.values(itinerary)

.forEach(day=>{


html += `

<div class="day">

<h3>

${day.title}

</h3>


<p>

${day.theme}

</p>


`;



day.places.forEach(place=>{


html += `

<div class="schedule-item">


<b>

🕒 ${place.time}

</b>


<br>


📍 ${place.place}


<br>


${place.note}


</div>


`;



});



html += `

</div>

`;



});



area.innerHTML = html;


}




window.addEventListener(

"load",

()=>{

renderSchedule();

}

);
