
<!DOCTYPE html> <!--Vom folosi limbajul html-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link href="stil.css" rel="stylesheet">
    <link href="icon.jpg" type="image/jpg" rel="icon">
</head>
<body style="background-image: url('poza.png');">
     <nav>
        <li><a href="#" style="color:<?php
         echo $_POST["Culoare"] ?>"><?php
 echo $_POST["Pseudo"];
?></a></li>
    <div class="meniu">
<li><a>Setari</a></li>
<div class="submeniu">
<li><a id="email" onclick="document.getElementById('email').textContent='<?php echo $_POST['Email'] ?>'">Email</a></li>
<li><a id="parola" onclick="document.getElementById('parola').textContent='<?php echo $_POST['Parola'] ?>'">Parola</a></li>
</div>
</div>
        <li><a href="index.html">Acasa</a></li>
    <div class="meniu">
    <li><a href="poze.html">Poze</a></li>
    <div class="submeniu">
         <li><a href="slider.html">Slider</a></li>
         <li><a href="galerie.html">Galerie</a></li>
    </div>
    </div>
    <li><a href="calculator.html">Calculator</a></li>
    <div class="meniu">
    <li><a href="joc.html">Jocuri</a></li>
    <div class="submeniu">
    <li><a href="ghici.html">Ghiceste Numarul</a></li>
    <li><a href="zar.html">Zaruri</a></li>
    <li><a href="phf.html">Piatra hartie</a></li>
    </div>
    </div>
    <li><a href="contact.html">Contact</a></li>
    <li><a><spna id="ceas" style="color:white;">00:00:00</spna></a></li>
    </nav>
    <script>
function ceas(){
  let data = new Date();
  let ore = data.getHours().toString().padStart(2,0);
  let minute = data.getMinutes().toString().padStart(2,0);
  let secunde = data.getSeconds().toString().padStart(2,0);
  let text = `${ore}:${minute}:${secunde}`;
  document.getElementById('ceas').innerHTML = text;
}
ceas();
setInterval(ceas, 1000)
    </script>
    <br/>
    <br/>

    <h1 id="yay">Descoperă Matematica prin Joc și Distracție!❗</h1>
    <div style="display:flex">
    <div id="index">
    <p>Aici nu e un site obișnuit — e un loc plin de aventuri matematice, jocuri haioase și imagini colorate, unde copiii ca tine vin să se joace, să învețe și să râdă cu poftă!,</p><p> Ai la dispoziție un super calculator de mate, care știe să adune, să scadă, să înmulțească și chiar să împartă fără să se încurce! Dacă ai teme sau doar vrei să verifici cât face 34 + 35... ZAP! Calculatorul nostru îți spune pe loc!
</p>
<p>Intră în lupta amuzantă cu „Piatră, hârtie, foarfecă”👊✋✌️ și vezi dacă poți învinge computerul! Fiecare rundă e rapidă și plină de suspans!
🔢🎯</p>
<p>Sau încearcă jocul „Ghicirea numerelor” – unde un număr misterios s-a ascuns, iar tu trebuie să-l găsești! Primești indicii și totul e ca o vânătoare de comori cu cifre!
</p>
</div>
<div id="index2">
    <img src="matematica.jpg" id="Imag" onmouseout="imag1('')" onmouseover="imag('Hai să începem aventura')" style="width:30vw;" alt="Imagine"/>
    <p id="text" style="position:absolute;right:210px"></p>
</div>
</div>
<img src="matematica.jpg"  id="Imag1" alt="Imagine"/>
    <script src="script.js"></script>
    </body>
    </html>