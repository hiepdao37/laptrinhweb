let cards = [
{q:"What is CPU?",a:"Central Processing Unit"},
{q:"Capital of Vietnam?",a:"Hanoi"},
{q:"2 + 2 ?",a:"4"}
];

let index = 0;

function flipCard(){
let q=document.getElementById("question");
let a=document.getElementById("answer");

if(a.style.display==="none"){
a.style.display="block";
q.style.display="none";
}else{
a.style.display="none";
q.style.display="block";
}
}

function nextCard(){
index=(index+1)%cards.length;

document.getElementById("question").innerText=cards[index].q;
document.getElementById("answer").innerText=cards[index].a;

document.getElementById("question").style.display="block";
document.getElementById("answer").style.display="none";
}
fetch("backend/get_flashcards.php")
.then(response => response.json())
.then(data => {
    console.log(data);
});
