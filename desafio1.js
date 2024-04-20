// Variaveis
let nameHero = "Bruno BalaTensa"
let xp = 9999

// Objetivo
let levelHero

if (xp < 1000) {
  levelHero = "Ferro"
}
else if (xp >= 1001 && xp <= 2000) {
  levelHero = "Bronze"
}
else if (xp >= 2001 && xp <= 3000) {
  levelHero = "Prata"
}
else if (xp >= 3001 && xp <= 4000) {
  levelHero = "Ouro"
}
else if (xp >= 4001 && xp <= 6000) {
  levelHero = "Platina"
}
else if (xp >= 6001 && xp <= 8000) {
  levelHero = "Ascendente"
}
else if (xp >= 8001 && xp <= 10000) {
  levelHero = "Imortal"
}
else if (xp >= 10001) {
  levelHero = "Radiante"
}

//Saida
console.log("O Herói de nome " + nameHero + " está no nível " + levelHero)