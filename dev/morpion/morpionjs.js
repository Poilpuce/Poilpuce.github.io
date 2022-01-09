Mescasesdispos = [0, 1, 2, 3, 4, 5, 6, 7, 8]

function Morpion() {
    this.joueur = 1;
    this.grille = new Array(9);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

Morpion.prototype.coupOrdi = function(casesDispo) {
    var idx_casesDispo = getRandomInt(0,casesDispo.length);
    var idx_grille = casesDispo[idx_casesDispo];

    if(this.joueur == 1){
        this.joueur = 2
    }
    else{this.joueur = 1}

    this.grille[idx_grille] = this.joueur;
    
    casesDispo.splice(idx_casesDispo,1);
    fill(idx_grille,this.joueur);
}


Morpion.prototype.nouvellePartie = function() {
    i=0;
    this.coupOrdi(Mescasesdispos);
    while (Mescasesdispos.length !== 0){

        this.coupOrdi(Mescasesdispos);
        if (this.gagne()){
            return document.write("Le joueur "+this.joueur+" a gagné !")
    }

    i++;
    }
if (Mescasesdispos.length == 0 && this.gagne() == false) {
    return document.write("Égalité !")
}

}
//Tant qu'on peux jouer et que la partie n'est pas fini, alors on joue

// retourne true si le joueur courant a gagné, false sinon
Morpion.prototype.gagne = function() {

 if(this.grille[0]==this.grille[1] && this.grille[1] ==this.grille[2] && this.grille[2] !== undefined){
        return true;
    }
    else if(this.grille[3] == this.grille[4] && this.grille[4] == this.grille[5] && this.grille[5] !== undefined){
        return true;  
      }
    else if(this.grille[6] == this.grille[7] && this.grille[7] == this.grille[8] && this.grille[8] !== undefined){
        return true;    
    }
    else if(this.grille[0] == this.grille[3] && this.grille[3] == this.grille[6] && this.grille[6] !== undefined){
        return true;  
      }
    else if(this.grille[1] == this.grille[4] && this.grille[4] == this.grille[7] && this.grille[1] !== undefined){
        return true;   
     }
    else if(this.grille[2] == this.grille[5] && this.grille[5] == this.grille[8] && this.grille[8] !== undefined){
        return true;  
      }
    else if(this.grille[0] == this.grille[4] && this.grille[4] == this.grille[8] && this.grille[8] !== undefined){
        return true;   
     }
    else if(this.grille[2] == this.grille[4] && this.grille[4] == this.grille[6] && this.grille[6] !== undefined){
        return true;
        }
    else{
        return false;
    }
   
}

function fill(vec,val) {
    
var macase = document.getElementById("case" + vec)
    
    if(val==1){
        //on remplit vec avec var 1
        macase.src = "pion1.gif"
    }
    else{
        macase.src = "pion2.gif"
    } 

}