const force = 15;

const poidsRestant = force * 7.5;

let inventaire = [];

let equipement = [];

let poidsInventaireEquipement = 0;

const poidsEpée = 1.5;

const poidsDague = 0.05;

const poidsArmure = 10;

const gourde = 2.5;

const grappin = 2;

const trousseDeSoins = 1.5;

const vetement = 5.5;


function Lister(){
    console.log(inventaire);
}

function ramasser(objet){
    if(poidsInventaireEquipement < poidsRestant){
    inventaire.push(objet);
    poidsRestant -= poidsInventaireEquipement 
    }else{
        console.log("Vous avez plus assez de place pour ramasser cette objet");
    }
}

function jeter(objet){
    inventaire.slice(objet);
    poidsLimiteTotal += poidsInventaireEquipement
}

function utiliser(objet){
    console.log("Vous utilisez " + objet);

}
function Equiper(objet){
    equipement.splice(objet);
}

function Desequiper(objet){
    equipement.push(objet);

}


process.openStdin().addLisener("data", d =>{
    console.log( "you entered: |")
    d.toString().trim() + "]"
});

exports.inventaire = inventaire;







  