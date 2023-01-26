import { PersonnesType } from '../Typages/PersonnesType';
import { CompetencesType } from './../Typages/CompetencesType';
export class ServicePersonne {

    /**
     * GetPERSONNE fait un appel au json server et recupeere les personnes
     * @returns un liste de personnes
     */
    getPersonne =async ()=>{
           const response = await fetch('http://localhost:3000/personnes');
           const data = await response.json();
           return data;
   }
   /**
    * GETPERSONNEBYID permet de recuperer des personnes par leur id
    * @param id de la personne
    * @returns l'objet correspondant à la personne
    */
   getPersonneById =async (id:any)=>{
    //let ids = id.id
    const response = await fetch(`http://localhost:3000/personnes/${id}`);
    const data = await response.json();
    return data;
}
   /**
    * ADDPERSONNE permet d'ajouter une nouevlle personnes
    * @param personne de type PersonnesType
    * @returns 
    */
   async addPersonne(personne:PersonnesType) {
       return await fetch('http://localhost:3000/personnes', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(personne)
       })
           .then((res) => (res.json()))
   }
   /**
    * DELETEPERSONNEBYID permet de supprimer une personnes gràca à son id
    * @param id de type string
    * @returns 
    */
   async deletePersonneById(id:string) {
       return await fetch(`http://localhost:3000/personnes/${id}`, 
       { method: 'DELETE' })
       .then((res) => ((res.json())));
   }
   }
   export const servicePersonne = Object.freeze(new ServicePersonne())
   