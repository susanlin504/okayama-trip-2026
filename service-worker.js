const CACHE_NAME = "okayama-trip-v1";


const filesToCache = [

"./",

"./index.html",

"./style.css",

"./app.js",

"./itinerary.js",

"./schedule.js",

"./maps.js",

"./transport.js",

"./budget.js",

"./checklist.js",

"./manifest.json"

];





self.addEventListener(

"install",

event=>{


event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>{


return cache.addAll(
filesToCache
);


})


);


});






self.addEventListener(

"fetch",

event=>{


event.respondWith(

caches.match(

event.request

)

.then(response=>{


return response ||

fetch(event.request);


})


);


});
