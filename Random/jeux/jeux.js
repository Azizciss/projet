let randomNumber = Math.floor(Math.random()*100) + 1;
const nombre = document.querySelector('.nombre');
const lastResult = document.querySelector('.lastResult');
const consigne = document.querySelector('.consigne');
const entrer = document.querySelector('.entrer');
const envoyer = document.querySelector('.envoyer');
let nbreCount = 1;


function Tester(){
    let userNbre = Number(entrer.value);
    if (nbreCount === 1){
        nombre.textContent = 'Tentatives  précédentes : ';
    }
    nombre.textContent += userNbre +  ' ';

    if (userNbre === randomNumber){
        lastResult.textContent = 'Bravo vous avez trouver';
        lastResult.style.backgroundColor = 'green';
        consigne.textContent = ' ';
    } 
    else if (nbreCount === 3){
        lastResult.textContent = 'Faux vous avez rater le teste';
        lastResult.style.backgroundColor = 'red';
        consigne.textContent = ' ';
    } else{
        lastResult.textContent = 'Faux vous avez rater le teste';
        lastResult.style.backgroundColor = 'red';
          if (userNbre > randomNumber){
            consigne.textContent = 'La dernière estimation était trop elevé!' ;
          } else if (userNbre < randomNumber){
            consigne.textContent = 'La dernière estimation était trop faible!' ;
          }
    }
     nbreCount++;
     entrer.value = ' ';
     entrer.focus();
}

 envoyer.addEventListener('click', Tester);

