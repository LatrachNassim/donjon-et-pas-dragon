const modulede =require('./lancer_des.js');

function attaque() {
    let armureMonstre = 0;
    let forceArmePlayer = 15;
    let forceArmeMonstre = 0;
    let armurePlayer = 5;
    let degats = armureMonstre - forceArmePlayer;
    let degats2 = armurePlayer - forceArmeMonstre;
    let pvMonstre = 30;
    let pvPlayer = 30;
    
    modulede.lancerDes(20);

    if (modulede.lancerDes(20) > armureMonstre) {
        console.log('L\'attaque réussite le monstre perd ' + degats + ' PV');
    } else {
        console.log("L'attaque a échoué");
    
    if (modulede.lancerDes(20) > armurePlayer) {
        console.log("L'attaque réussite tu perds " + degats2 + ' PV');
    } else {
        console.log("L'attaque échoue");
        }
    }
    if (pvMonstre <= 0) {
        console.log("Le monstre est mort");

    if (pvPlayer <= 0) {
        console.log("Tu es mort - Game over ");
        }
    }

}

exports.attaque = attaque;