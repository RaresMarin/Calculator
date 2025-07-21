const input = document.getElementById('input');
function Pune(n)
{
    input.value += n;
}
function Calculeaza(){
    try{
    input.value = eval(input.value).toFixed(2);
    }
    catch(erori)
    {
        input.value="Eroare";
    }
}
function Sterge(){
    input.value = "";
}
function ghici(){
let minim=10;
let maxim=100;
let numar = Math.floor(Math.random()*(maxim-minim)+minim);
let incercari = 0;
let corect = true;
while(corect == true)
{
    let ghicire = Number(window.prompt("Ghiceste numarul intre 10 și 100" ,));
    if(ghicire>maxim || ghicire<minim)
        alert(`Numarul trebuie sa fie intre ${minim} si ${maxim}`)
    else if(ghicire>numar){
        alert("Numarul este mai mic decat incercarea ta")}
    else if(ghicire<numar){
        alert("Numarul este mai mare decat incercarea ta")}
    else if(ghicire==numar)
    {
        alert("Ai ghicit numarul")
        corect=false;
        alert(`Ti a luat ${incercari} incercari sa gasesti numarul ${numar}`)
    }
        incercari++;
}
}

const alegereJucator = document.getElementById('span');
const alegereCalculator = document.getElementById('span1');
const imagineJucator = document.getElementById('Jucator');
const imagineCalculator = document.getElementById('Calculator');
const rezultat = document.getElementById('rezultat');
const imaginii = ["🪨" , "📃" , "✂️"];
const alegeri = ["piatra" , "hartie" , "foarfeca"];
let index=0;
function phf(alegere)
{
    const random = Math.floor(Math.random()*3);
    imagineCalculator.textContent = imaginii[random];
    let calculator = alegeri[random];
    alegereCalculator.textContent = calculator;
    alegereJucator.textContent = alegere;
    switch(alegere)
    {
        case "piatra":
        imagineJucator.textContent = imaginii[0];
        break;
        case "hartie":
        imagineJucator.textContent = imaginii[1];
        break;
        case "foarfeca":
        imagineJucator.textContent = imaginii[2];
        break;
    }
    if(alegere==calculator)
        rezultat.textContent = "Avem egalitate";
    else
    switch(alegere)
    {
        case "piatra":
        rezultat.textContent = (calculator == "hartie") ? "Ai pierdut" : "Ai castigat"
        break;
        case "hartie":
        rezultat.textContent = (calculator == "foarfeca") ? "Ai pierdut" : "Ai castigat"
        break;
        case "foarfeca":
        rezultat.textContent = (calculator == "piatra") ? "Ai pierdut" : "Ai castigat"
        break;
    }
   if (rezultat.textContent == "Ai castigat")
   {
    rezultat.style.color="green";
    index++;
   }
   else if(rezultat.textContent == "Ai pierdut")
   {
    rezultat.style.color="red";
    index--;
   }
   else
   {
    rezultat.style.color="black";
   }
    rezultat.textContent += ` ${index}`;
}
const poze = document.getElementsByClassName('diapozitiv');
let spanu = document.getElementById('spanu');
let vector = ["Functia arcsinus" , "Functia sinus" , "Functia exponentiala" , "Functia logaritmica"];
let bici = document.getElementById('Bici');
let Bici = [
    "Functia arcsinus este inversa functiei sinus si este definita pe intervalul -1,1 => multimea numerelor reale." , 
    "Functia sinus este o functie trigonometrica definita pe multimea numerelor reale => -1,1.",
    "Functia exponentiala este definita pe multimea numerelor reale => (0,infinit) ." ,
    "Functia logaritmica este definita pe intervalul (0,1) reunit cu (1,infinit) => multimea numerelor reale ."
]
let imagineIndex = 1;


Arata(imagineIndex);

let interval = setInterval(() => inainte(1), 5000);

function inainte(n){
    imagineIndex += n;
    Arata(imagineIndex);
    if(n<0)
    {
    clearInterval(interval);
    }
}

function Arata(n){

    if(n > poze.length) imagineIndex = 1;
    if(n < 1) imagineIndex = poze.length;

    for(let i = 0; i < poze.length; i++) {
        poze[i].style.display = "none";
    }

    poze[imagineIndex - 1].style.display = "block";
    if(spanu !== null)
    {
    spanu.textContent = vector[imagineIndex - 1];
    bici.textContent = Bici[imagineIndex-1];
    }
}

function yay(){
let Poze = document.getElementsByClassName('poza');
let carti=0;
for(let i=0;i<Poze.length;i++)
{
    let random = Math.floor(Math.random()*4);
    if(random==3)
    {
        Poze[i].src=`p.jpg`;
        carti++;
    }
    else if(random==4)
    {
        Poze[i].src=`p1.jpg`;
    }
    else{
    Poze[i].src=`p${random+1}.jpg`
    }
}
    document.getElementById('H').textContent =` Numarul de carti galbene este ${carti} `;
}
function fun(){
    const minim = 10;
    const maxim = 100;
    let numar = Math.floor(Math.random()*(maxim-minim)+minim);
    let incercari = 0;
    let corect = false;
    while(corect == false)
    {
        let incercare = Number(prompt(`Introdu un numar intre ${minim} si ${maxim}`));
        if(incercare>maxim || incercare<minim)
            alert(`Numarul trebuie sa fie intre ${minim} si ${maxim}`);
        else if(incercare>numar)
            alert(`Numarul este mai mic decat incercarea ta`);
        else if(incercare<numar)
            alert(`Numarul este mai mare decat incercarea ta`);
        else if(incercare==numar)
        {
            corect=true;
            alert("Ai ghicit")
        }
        incercari++;
    }
    alert(`Ti-a luat ${incercari} incercari pentru a ghici numarul ${numar}`);
}

 function zari(){
const input = document.getElementById('input1');
const span = document.getElementById('span');
const div = document.getElementById('div');
let numere = [];
let imaginii = [];
 for(let i=0;i<input.value;i++){
   let valoare = Math.floor(Math.random()*6+1);
   numere.push(valoare);
   imaginii.push(`<img style="width:19vw;height:30vh;" src="${valoare}.png"/>`);}
 span.innerHTML = numere;
 div.innerHTML=imaginii;}
 function imag(bici){
    const paragraf = document.getElementById('text');
    paragraf.textContent = bici;
    imagine = document.getElementById('Imag');
    imagine.src="poza1.png";
    imagine.style.height="400px";
    
 }

 function imag1(bici){
    const paragraf = document.getElementById('text');
    paragraf.textContent = bici;
    imagine = document.getElementById('Imag');
    imagine.src="matematica.jpg";
 }

 function m(){
    const cutie = document.getElementById('cuti');
    const text = document.getElementById('virbe');
    text.textContent = "Nu o face!😔"
    cutie.style.backgroundColor="yellow";

 }
 function n(){
    const cutie = document.getElementById('cuti');
    const text = document.getElementById('virbe');
    text.textContent = "Yaayyy!😁"
    cutie.style.backgroundColor="#b35edeff";
    
 }
 function p(){
    const cutie = document.getElementById('cuti');
    const text = document.getElementById('virbe');
    text.textContent = "Offf!😠"
    cutie.style.backgroundColor="tomato";
    
 }

function soare(){
const b = document.getElementById('b')
b.checked = !b.checked;
let ceas =  document.getElementById('ceas');
const nav = document.getElementById('nav');
  let linkuri = document.querySelectorAll("li a");
if(b.checked==true)
{ 
  document.body.style.backgroundColor = "#593744";
  document.body.style.color = "#F2DCBD";
  nav.style.backgroundColor = "#F2DCBD";
  linkuri.forEach(link =>{
    link.style.color = "black";
  })
  ceas.style.color = "black";

}else
{  
  document.body.style.color = "#593744";
   document.body.style.backgroundColor = "#F2DCBD";
   nav.style.backgroundColor = "#593744";
     linkuri.forEach(link =>{
    link.style.color = "white";
  })
  ceas.style.color = "white";
}
}
function culi(){
    const culoare = document.getElementById('culi').value;
    document.body.style.backgroundColor = culoare;

}



