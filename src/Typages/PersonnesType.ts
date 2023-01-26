import { CompNiveauType } from './CompNiveauType';
export class PersonnesType{
    nom:string;
    prenom:string;
    description:string;
    titre:string;
    competence:CompNiveauType[];
    id:string; 

    
    constructor(nom:string, prenom:string, id:string, description:string, titre:string, competence:CompNiveauType[]){
    this.nom=nom;
    this.prenom=prenom;
    this.id=id;
    this.competence=competence;
    this.titre=titre;
    this.description=description
    }
    
    
    }