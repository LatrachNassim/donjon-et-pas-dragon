const combatmodule = require('./combat.js');


let map = [
    ['SOR', 'M', '_', 'C',],
    ['M', 'CM', '_', '_'],
    ['_', '_', 'EP', '_'],
    ['_', '_', '_', 'P']
];
let joueur = {
    x: 3,
    y: 3
}


//[X][Y]

//P commence sur une plaine

/* 
direction = N, NE, NW, E, W, S, SE ou SW
*/
function deplacement(direction) {
    //retourner un message qui décrit le contenu de la case
    switch (direction) {
        case "O":
            if (joueur.x > 0) {
                joueur.x--;
                console.log("Vous vous déplacez vers l'ouest");
            }else{
                console.log('Vous ne pouvez plus avancer dans cette direction');
            }
            break;
        case "N":
            if (joueur.y > 0) {
                joueur.y--;
                console.log("Vous vous déplacez au nord");
            }else{
                console.log('Vous ne pouvez plus avancer dans cette direction');
            }
            break;
        case "E":
            if (joueur.x < map[joueur.y].length - 1) {
                joueur.x++;
                console.log("Vous vous déplacez à l'est");
            }else{
                console.log('Vous ne pouvez plus avancer dans cette direction');
            }
            break;
        case "S":
            if (joueur.y < map.lenght-1) {
                joueur.y++;
                console.log("Vous vous déplacez au sud");
            }else{
                console.log('Vous ne pouvez plus avancer dans cette direction');
            }
            break;
        case "NE":
            if (joueur.y > 0 && joueur.x < map[joueur.y].length - 1) {
                joueur.y--;
                joueur.x++;
                console.log("Vous allez au Nord-Est");
            } else {
                console.log("Vous ne pouvez pas prendre cette direction");
            }
            break;
        case "SE":
            if (joueur.y < map.length - 1 && joueur.x < map[joueur.y].length - 1) {
                joueur.y++;
                joueur.x++;
                console.log("Vous allez au Sud-Est")
            } else {
                console.log("Vous ne pouvez pas prendre cette direction");
            }
            break;
        case "NO":
            if (joueur.y > 0 && joueur.x > 0) {
                joueur.y--;
                joueur.x--;
                console.log("Vous allez au Nord-Ouest");
            } else {
                console.log("Vous ne pouvez pas prendre cette direction");
            }
            break;
        case "SO":
            if (joueur.y < map.length - 1 && joueur.x > 0) {
                joueur.y++;
                joueur.x--;
                console.log("Vous allez au Sud-Ouest");
            } else {
                console.log("Vous ne pouvez pas prendre cette direction");
            }
            break;
        default:
            console.log("Erreur de direction");
    }


    switch (map[joueur.y][joueur.x]) {
        case "_":
            console.log("C'est une plaine");
            break;
        case "C":
            console.log("C'est le château");
            break;
        case "M":
            console.log("Vous arrivez devant un monstres");
            combatmodule.attaque()
            break;
        case "SOR":
            console.log("Bravo! Tu as atteint la sortie - Fin");
            break;
        case "EP":
            console.log("Tu as trouvé une épée");
            break;
        case "CM":
            console.log("Tu as trouvé une cote de maille");
            break;
    }
}
const moduleinventaire = require('./inventaire.js');
const modulelettre_a_lettre = require('./lettre_a_lettre.js');
process.stdin.setEncoding('utf8');

//A chaque entrée dans la console, on appellera la fonction fléchée, rep sera la réponse tapée dans la console
//Ici on déclare ce que l'on fera lorsqu'on recevra une donnée
process.stdin.on('data', (d) => {
    let rep = d.toString().trim()
    if (rep == "N") {
        deplacement('N');
    }

    if(rep == 'S'){
        deplacement('S')
    }
    if(rep == 'O'){
        deplacement('O');
    }
    if(rep == 'E'){
        deplacement('E');
    }
    if(rep == 'NE'){
        deplacement('NE');
    }
    if(rep == 'NO'){
        deplacement('NO');
    }
    if(rep == 'SE'){
        deplacement('SE');
    }
    if(rep == 'SO'){
        deplacement('SO');
    }
    if (rep == "quit") {
        process.exit();
    }
});

function main() {
    console.log("Bienvenue dans le labyrinthe de cuivre");
}
main();
