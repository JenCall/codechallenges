//Launchbase Bootcamp - Exercises:

// 1) IMC - L’indice de masse corporelle (IMC) permet d’évaluer votre corpulence. 
//Calculez rapidement votre IMC et découvrez dans quelle catégorie vous vous situez.

const name = "Jolie"
const poids = 53;
const taille = 1.64;

const imc = poids / (taille * taille);

let message = "";

if (imc >= 30) {
    message = `${name} tu es en surpoids!.`
} else {
    message = `${name} tu n'es pas en surpoids!.`
}

console.log(message);
