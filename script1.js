document.addEventListener('DOMContentLoaded', () => {
  const cutie = document.getElementById('cuti');
let miscare = 100;
let x = 0;
let y = 0;
    const culori = ['tomato', 'aqua', 'springgreen', 'yellow', 'hsl(264, 89%, 71%)'];

    // Creăm 5 mingi și le adăugăm în document
    for (let i = 0; i < 69; i++) {
      const minge = document.createElement('div');
      minge.classList.add('minge');
      minge.style.background = culori[i % culori.length];
      minge.style.left = `${Math.floor(Math.random() * 19) * 100}px`;
      minge.style.top = `${Math.floor(Math.random() * 9) * 100}px`;
      document.body.appendChild(minge);
    }
document.addEventListener("keydown" , event =>{
   if(event.key.startsWith("Arrow"))
   { event.preventDefault();
  switch(event.key){
  case "ArrowUp" :
    y -= miscare;
    break;
  case "ArrowDown" :
    y += miscare;
    break;
  case "ArrowLeft" :
    x -= miscare;
    break;
  case "ArrowRight" :
    x += miscare;
    break;}
    if(x==1100)
    x=-1100;
else if(x==-1100)
x=1100;
else
   cutie.style.left=`${x}px`;
if(y==500)
y=-500;
else if(y==-500)
y=500;
else
   cutie.style.top=`${y}px`;
const cutieRect = cutie.getBoundingClientRect();
      const mingi = document.querySelectorAll('.minge');

      mingi.forEach(minge => {
        const mingeRect = minge.getBoundingClientRect();

        const coliziune =
  cutieRect.right <= mingeRect.left ||
  cutieRect.left >= mingeRect.right ||
  cutieRect.bottom <= mingeRect.top ||
  cutieRect.top >= mingeRect.bottom


        if (!coliziune) {
          minge.remove();
          let nr = Math.floor(Math.random()*100);
          if(nr%2==0)
          {
             for (let i = 0; i < 1; i++) {
      const minge = document.createElement('div');
      minge.classList.add('minge');
      let random = Math.floor(Math.random()*6)
      minge.style.background = culori[random];
      minge.style.left = `${Math.floor(Math.random() * 19) * 100}px`;
      minge.style.top = `${Math.floor(Math.random() * 9) * 100}px`;
      document.body.appendChild(minge);
    }
}
        }
      });
    }
  })
  })
