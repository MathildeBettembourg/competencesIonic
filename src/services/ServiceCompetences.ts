import { CompetencesType } from './../Typages/CompetencesType';
export class ServiceCompetences {

    /**
     * Get competence fait un appel au json server et recupeere les competences
     * @returns un liste de competences
     */
    getCompetences =async ()=>{
           const response = await fetch('http://localhost:3000/competences');
           const data = await response.json();
           return data;
   }
   /**
    * ADDCOMPETENCE permet d'ajouter une nouevlle competence
    * @param competence de type CompetenceType
    * @returns 
    */
   async addCompetence(competence:CompetencesType) {
       return await fetch('http://localhost:3000/competences', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(competence)
       })
           .then((res) => (res.json()))
   }
   /**
    * DELETECOMPETENCE permet de supprimer une competence gràca à son id
    * @param id de type string
    * @returns 
    */
   async deleteCompetenceById(id:string) {
       return await fetch(`http://localhost:3000/competences/${id}`, 
       { method: 'DELETE' })
       .then((res) => ((res.json())));
   }
   }
   export const serviceCompetences = Object.freeze(new ServiceCompetences())
   