// DOM
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calcul(valeur)

})

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                ecran.textContent = "";
                break
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            defaut:
                const indexKeycode = listekeycode.index0f(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
   
        }
    } 
} 
 window.addEventListener('error', (e) => {
     alert('Une erreur est survenu dans votre calcul : ' + e.message)
 })