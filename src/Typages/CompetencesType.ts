export class CompetencesType{
nom:string;
description:string;
id:string;
personnesIds:string[]

constructor(nom:string, description:string, id:string, personnesIds:string[]){
this.nom=nom;
this.description=description;
this.id=id;
this.personnesIds=personnesIds
}


}