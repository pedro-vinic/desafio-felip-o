let nomeDoHeroi = "Superman"
let xpDoHeroi = 9000

if (xpDoHeroi <= 1000){
    console.log("Herói: " + nomeDoHeroi,
    "\nXP: " + xpDoHeroi,
    "\nO herói é nível Ferro!")
} else if (xpDoHeroi > 1000 && xpDoHeroi <= 2000){
    console.log("Herói: " + nomeDoHeroi,
    "\nXP: " + xpDoHeroi,
    "\nO herói é nível Bronze!")
} else if (xpDoHeroi > 2000 && xpDoHeroi <= 5000){
    console.log("Herói: " + nomeDoHeroi,
    "\nXP: " + xpDoHeroi,
    "\nO herói é nível Prata!")
} else if (xpDoHeroi > 5000 && xpDoHeroi <= 7000){
    console.log("Herói: " + nomeDoHeroi,
    "\nXP: " + xpDoHeroi,
    "\nO herói é nível Ouro!")
} else if (xpDoHeroi > 7000 && xpDoHeroi <= 8000){
    console.log("Herói: " + nomeDoHeroi,
    "\nXP: " + xpDoHeroi,
    "\nO herói é nível Platina!")
} else if (xpDoHeroi > 8000 && xpDoHeroi <= 9000){
    console.log("Herói: " + nomeDoHeroi,
    "\nXP: " + xpDoHeroi,
    "\nO herói é nível Ascendente!")
} else if (xpDoHeroi > 9000 && xpDoHeroi <= 1000){
    console.log("Herói: " + nomeDoHeroi,
    "\nXP: " + xpDoHeroi,
    "\nO herói é nível Imortal!")
} else{
    console.log("Herói: " + nomeDoHeroi,
    "\nXP: " + xpDoHeroi,
    "\nO herói é nível Radiante!")
}