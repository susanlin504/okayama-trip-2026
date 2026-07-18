/* ===================================
   岡山瀨戶內慢旅
   Transport System
   起點：備前三門站
=================================== */


const transportData = {


day1: {

title:"Day 1｜抵達岡山",

routes:[

{
time:"16:30",
route:"岡山桃太郎機場 → 岡山市區",
method:"機場巴士",
duration:"約30分鐘",
cost:"約780円",
note:"抵達後前往備前三門 Airbnb"
}

]

},



day2: {

title:"Day 2｜尾道",

routes:[

{
time:"08:26",
route:"備前三門 → 岡山",
method:"JR吉備線",
duration:"約10分鐘",
cost:"約200円"
},

{
time:"08:40",
route:"岡山 → 尾道",
method:"JR山陽本線",
duration:"約78分鐘",
cost:"約1,340円",
note:"抵達尾道站"
},

{
time:"09:55",
route:"尾道站前 → 長江口",
method:"公車",
duration:"約10分鐘",
cost:"約150円"
},

{
time:"16:00",
route:"尾道 → 岡山",
method:"JR山陽本線",
duration:"約78分鐘",
cost:"約1,340円"
},

{
time:"晚上",
route:"岡山 → 備前三門",
method:"JR吉備線",
duration:"約10分鐘",
cost:"約200円"
}

]

},



day3: {

title:"Day 3｜吉備路自行車＋岡山購物",

routes:[

{
time:"08:40",
route:"備前三門 → 備前一宮",
method:"JR吉備線",
duration:"約10分鐘",
cost:"約200円",
note:"租借腳踏車"
},


{
time:"下午",
route:"總社 → 岡山",
method:"JR吉備線",
duration:"約30分鐘",
cost:"約420円"
},


{
time:"下午",
route:"岡山站 → AEON Mall岡山",
method:"步行",
duration:"約5分鐘",
cost:"免費"
},


{
time:"晚上",
route:"岡山 → 備前三門",
method:"JR吉備線",
duration:"約10分鐘",
cost:"約200円"
}

]

},




day4: {

title:"Day 4｜倉敷美觀地區",

routes:[


{
time:"上午",
route:"備前三門 → 岡山",

method:"JR吉備線",

duration:"約10分鐘",

cost:"約200円"

},


{
time:"接續",
route:"岡山 → 倉敷",

method:"JR山陽本線",

duration:"約17分鐘",

cost:"約330円"

},


{
time:"晚上",
route:"倉敷 → 備前三門",

method:"JR",

duration:"約30分鐘",

cost:"約530円"

}


]

},




day5: {

title:"Day 5｜蒜山高原",

routes:[

{
time:"上午",
route:"備前三門 → 岡山",

method:"JR",

duration:"約10分鐘",

cost:"約200円"

},


{
time:"上午",
route:"岡山 → 勝山",

method:"JR津山線＋轉乘",

duration:"約2小時",

cost:"約1,500円左右",

note:"前往蒜山方向"
},


{
time:"下午",
route:"勝山 → 蒜山高原",

method:"巴士",

duration:"約50分鐘",

cost:"依班次"
},


{
time:"晚上",
route:"蒜山 → 岡山",

method:"返回交通",

duration:"約2～3小時",

cost:"約1,500円左右"

}

]

},





day6: {

title:"Day 6｜岡山市區＋返程",

routes:[


{
time:"上午",
route:"備前三門 → 岡山",

method:"JR",

duration:"約10分鐘",

cost:"約200円"

},


{
time:"下午",
route:"岡山站 → 岡山桃太郎機場",

method:"機場巴士",

duration:"約30分鐘",

cost:"約780円"

},


{
time:"17:55",
route:"岡山 → 高雄",

method:"虎航 IT263",

duration:"約2小時20分鐘",

cost:"已含機票"

}


]

}


};





/*
 顯示交通資訊
*/


function renderTransport(){


const area=

document.getElementById(
"transport-area"
);



if(!area){

return;

}



let html="";



Object.values(transportData)

.forEach(day=>{


html+=`

<div class="day">

<h3>${day.title}</h3>

`;



day.routes.forEach(route=>{


html+=`

<p>

🕒 ${route.time}

<br>

🚆 ${route.route}

<br>

方式：${route.method}

<br>

時間：${route.duration}

<br>

費用：${route.cost}

${route.note ? "<br>"+route.note:""}

</p>

<hr>

`;

});


html+="</div>";


});



area.innerHTML=html;


}




window.addEventListener(

"load",

()=>{

renderTransport();

}

);
