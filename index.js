let target = document.getElementById("target"); 
let array = ["développeur", "passionné","déterminé", "inspiré", "créatif"];
let wordIndex = 0; // creation de l'index des mots.
let letterIndex = 0; // creation de l'index des lettres

// Creation automatique des lettres
const createLetter = () => {
    // Creation de span 
    const letter = document.createElement("span");
    // Dire target tu as un enfant letter 
    target.appendChild(letter);

    // On injecte dans le span la lettre
    letter.textContent = array[wordIndex][letterIndex];

    // Paramettre pour que les lettres disparaissent pendant un certain temps
    setTimeout(() => {
        letter.remove()
    }, 2800)
}

// On cree une fonction recursive c'est à dire qui s'appelle d'elle meme.
const loop = () => {
    // on va demarrer par creer des lettres
    setTimeout(() => {
        // si l'index du mot est inferieur à la longueur du mot
        if(wordIndex >= array.length) {
            wordIndex = 0;
            letterIndex = 0;
            loop();
        // Sinon si l'index de la lettre est inferieur ou egal à la longueur du mot
        } else if(letterIndex < array[wordIndex].length) {
            createLetter(); // on cree la lettre
            letterIndex++; // et on passe à la lettre suivante
            loop(); // ensuite on appel la boucle
        } else {
            wordIndex++
            letterIndex = 0;
            setTimeout(() => {
                loop()
            }, 2800);
        }
    }, 60)
};
loop();