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
 function imag(){
    imagine = document.getElementById('Imag');
    imagine.src="poza1.png";
    imagine.style.height="400px";
    
 }

 function imag1(){
    imagine = document.getElementById('Imag');
    imagine.src="poza2.png";
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
           const traducere = {
            "Română": {
                titlu: "Descoperă Matematica prin Joc și Distracție❗",
                paragraf: "Aici nu e un site obișnuit — e un loc plin de aventuri matematice, jocuri haioase și imagini colorate, unde copiii ca tine vin să se joace, să învețe și să râdă cu poftă!",
                calculator: "Super calculator de mate",
                calculator_desc: "care știe să adune, să scadă, să înmulțească și chiar să împartă fără să se încurce!",
                calculator_example: "Dacă ai teme sau doar vrei să verifici cât face 34 + 35... ZAP! Calculatorul nostru îți spune pe loc!",
                joc1: "Piatră, hârtie, foarfecă",
                joc1_desc: "Intră în lupta amuzantă cu „Piatră, hârtie, foarfecă”👊✋✌️ și vezi dacă poți învinge computerul! Fiecare rundă e rapidă și plină de suspans! 🔢🎯",
                joc2: "Ghicirea numerelor",
                joc2_desc: "Încearcă jocul „Ghicirea numerelor” – unde un număr misterios s-a ascuns, iar tu trebuie să-l găsești! Primești indicii și totul e ca o vânătoare de comori cu cifre!",
                acasa: "Acasa" ,
                poze: "Poze",
                galerie: "Galerie" ,
                jocuri: "Jocuri",
                calculator: "Calculator",
                apasa: "Apasa pe o poza",
                culegere: "Culegere",
                cutie: "Cutie miscătoare",
                num:"Ghiceste Numarul" ,
                mod: "Joc de modificat numere",
                but: "Apasa butonul pentru a incepe jocul" ,
                scri: "Scrie ceva si calculatorul spune pentru tine",
                schin: "Schimba fundalul",
                put: "Schimba fundalul",
                j: "Joc cu zaruri",
                zar: "Număr de zaruri",

            },
            "English": {
                titlu: "Learn Mathematics with games and fun❗",
                paragraf: "This is not a simple site - it's a place with math adventures, fun games and colorful images, where kids come to play, learn and laugh.",
                calculator: "Super math calculator",
                calculator_desc: "that can add, subtract, multiply and even divide without getting confused!",
                calculator_example: "If you have homework or just want to check what 34 + 35 equals... ZAP! Our calculator tells you right away!",
                joc1: "Rock, Paper, Scissors",
                joc1_desc: "Join the fun battle with „Rock, Paper, Scissors”👊✋✌️ and see if you can beat the computer! Each round is quick and full of suspense! 🔢🎯",
                joc2: "Number Guessing",
                joc2_desc: "Try the „Number Guessing” game – where a mysterious number has hidden, and you need to find it! You get clues and it's like a treasure hunt with numbers!",
                acasa: "Home" ,
                poze: "Pictures",
                galerie: "Galery" ,
                jocuri: "Games",
                apasa: "Press on a picture",
                culegere: "Collection",
                cutie: "Moving Box",
                num: "Guess the number" ,
                mod: "Modify the numbers" ,
                but: "Press the button to start the game",
                scri: "Write something and the calculator says it out loud",
                schin: "Change background",
                put: "Change background",
                j: "Dice game",
                zar: "Number of dice"
            },
            "Français": {
                titlu: "Découvre les mathématiques en t'amusant❗",
                paragraf: "Ici, ce n'est pas un site ordinaire — c'est un lieu plein d'aventures mathématiques, de jeux rigolos et d'images colorées, où les enfants comme toi viennent pour jouer, apprendre et rire aux éclats !",
                calculator: "Super calculateur de maths",
                calculator_desc: "qui sait additionner, soustraire, multiplier et même diviser sans se tromper !",
                calculator_example: "Si tu as des devoirs ou si tu veux simplement vérifier ce que fait 34 + 35... ZAP! Notre calculateur te le dit immédiatement !",
                joc1: "Pierre, papier, ciseaux",
                joc1_desc: "Rejoins le combat amusant avec „Pierre, papier, ciseaux”👊✋✌️ et vois si tu peux battre l'ordinateur ! Chaque manche est rapide et pleine de suspense ! 🔢🎯",
                joc2: "Devine le nombre",
                joc2_desc: "Essaie le jeu „Devine le nombre” – où un nombre mystérieux s'est caché, et tu dois le trouver ! Tu obtiens des indices et c'est comme une chasse au trésor avec des chiffres !",
                acasa: "Maison" ,
                poze: "Phoos",
                galerie: "Galerie" ,
                jocuri: "Jeux",
                apasa: "Clique sur une image",
                culegere: "Collection",
                cutie: "Boîte mobile",
                num: "Devine le nombre",
                mod: "Modifie les nombres",
                but: "Appuie sur le bouton pour commencer le jeu",
                scri: "Écris quelque chose et la calculatrice le dit à haute voix",
                schin: "Changer le fond",
                put: "Changer le fond",
                j: "Jeu de dés",
                zar: "Nombre de dés"
            }
        };
  function schimbaLimba() {
            const limbaAleasa = document.getElementById('limba').value;
            const Data = traducere[limbaAleasa];
            
            if (Data) {
                // Update title
                const yay = document.getElementById('yay');
                if(yay!=null)
                {
                yay.textContent = Data.titlu;
                }
                const h1 = document.getElementById('H');
                if(h1!=null)
                {
                    h1.textContent = Data.apasa;
                }
                const h2 = document.getElementById('h2');
                if(h2!=null)
                {
                    h2.textContent = Data.cutie;
                }
                const dam = document.getElementById('dam');
                if(dam!=null)
                {
                    dam.textContent = Data.culegere;
                }
                const cal = document.getElementById('Cal')
                {
                    if(cal!=null)
                        cal.textContent = Data.calculator;
                }
                document.getElementById('Acasa').textContent = Data.acasa;
                document.getElementById('Poze').textContent = Data.poze;
                document.getElementById('Galerie').textContent = Data.galerie;
                document.getElementById('Joc').textContent = Data.jocuri;
                const num =document.getElementById('num');
                if(num!=null)
                {
                num.textContent = Data.num;
                }
                const but = document.getElementById('but');
                if(but!=null)
                {
                but.textContent = Data.but;
                }
                const mod = document.getElementById('mod');
                if(mod!=null)
                {
                mod.textContent = Data.mod;
                }
                const scri =document.getElementById('scri');
                if(scri!=null)
                {
                scri.textContent = Data.scri;
                }
                const schin =document.getElementById('schin');
                if(schin!=null)
                {
                schin.textContent = Data.schin;
                }
                const put =document.getElementById('put');
                if(put!=null)
                {
                put.textContent = Data.put;
                }
                const j =document.getElementById('j');
                if(j!=null)
                {
                j.textContent = Data.j;
                }
                const zar =document.getElementById('zar');
                if(zar!=null)
                {
                zar.textContent = Data.zar;
                }
                // Update main paragraph
                const indexDiv = document.getElementById('index');
                if(indexDiv!=null)
                {
                indexDiv.innerHTML = `
                    <p>${Data.paragraf}</p>
                    <p><strong>${Data.calculator}</strong> ${Data.calculator_desc}</p>
                    <p>${Data.calculator_example}</p>
                    <p><strong>${Data.joc1}</strong> ${Data.joc1_desc}</p>
                    <p><strong>${Data.joc2}</strong> ${Data.joc2_desc}</p>
                `;
            }
        }
    }
        schimbaLimba();

        document.getElementById('limba').addEventListener("change", schimbaLimba);
        
function ceas(){
  let data = new Date();
  let ore = data.getHours().toString().padStart(2,0);
  let minute = data.getMinutes().toString().padStart(2,0);
  let secunde = data.getSeconds().toString().padStart(2,0);
  let text = `${ore}:${minute}:${secunde}`;
  document.getElementById('ceas').innerHTML = text;
}
ceas();
setInterval(ceas, 1000);

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
      const pozaCurenta = poze[imagineIndex - 1];
    if (pozaCurenta) {
        pozaCurenta.style.display = "block";
    }

    if(spanu !== null)
    {
    spanu.textContent = vector[imagineIndex - 1];
    bici.textContent = Bici[imagineIndex-1];
    }
}
