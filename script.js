const events = [
{
name:"Web Development Workshop",
date:"2025-12-20",
description:"Learn modern web development."
},
{
name:"Tech Conference",
date:"2025-11-15",
description:"Technology networking event."
}
];

const eventContainer =
document.getElementById("eventContainer");

const eventForm =
document.getElementById("eventForm");

const warning =
document.getElementById("warning");

const searchInput =
document.getElementById("searchInput");

function renderEvents(){

eventContainer.innerHTML="";

events.sort((a,b)=>
new Date(a.date)-new Date(b.date)
);

events.forEach((event,index)=>{

const card =
document.createElement("div");

card.classList.add("card");

if(new Date(event.date)
<
new Date())
{
card.classList.add("past");
}

card.innerHTML=`

<h3>${event.name}</h3>

<p><strong>Date:</strong>
${event.date}
</p>

<p>${event.description}</p>

<button
class="delete-btn"
onclick="deleteEvent(${index})">

Delete

</button>

`;

eventContainer.appendChild(card);

});
}

function deleteEvent(index){

events.splice(index,1);

renderEvents();
}

eventForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const name =
document.getElementById("eventName").value;

const date =
document.getElementById("eventDate").value;

const description =
document.getElementById(
"eventDescription"
).value;

if(
!name ||
!date ||
!description
)
{
warning.textContent =
"All fields are required!";
return;
}

warning.textContent="";

events.push({
name,
date,
description
});

eventForm.reset();

renderEvents();

});

searchInput.addEventListener(
"input",
function(){

const keyword =
this.value.toLowerCase();

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

card.style.display =
card.innerText
.toLowerCase()
.includes(keyword)
?
"block"
:
"none";

});

});

renderEvents();