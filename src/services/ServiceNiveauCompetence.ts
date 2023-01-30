import { CompetencesType } from './../Typages/CompetencesType';
import {CompNiveauType} from "../Typages/CompNiveauType";
export class ServiceNiveauCompetences {

    /**
     * Get competence fait un appel au json server et recupeere les competences
     * @returns un liste de competences
     */
    getNiveauCompetences = async () => {
        const response = await fetch('http://localhost:3000/niveaux');
        const data = await response.json();
        return data;
    }
    getCompetencesById = async (id: any) => {
        //let ids = id.id
        const response = await fetch(`http://localhost:3000/niveaux/${id}`);
        const data = await response.json();
        return data;
    }

    /**
     * ADDCOMPETENCE permet d'ajouter une nouevlle competence
     * @param competence de type CompetenceType
     * @returns
     */
    async addCompetence(competence: CompNiveauType) {
        return await fetch('http://localhost:3000/niveaux', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(competence)
        })
            .then((res) => (res.json()))
    }
    // async changeCompetence(id:string, competence: CompetencesType) {
    //     return await fetch(`http://localhost:3000/competences/${id}`, {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(competence)
    //     })
    //         .then((res) => (res.json()))
    // }

    /**
     * DELETECOMPETENCE permet de supprimer une competence gràca à son id
     * @param id de type string
     * @returns
     */
    async deleteCompetenceById(id: string) {
        return await fetch(`http://localhost:3000/niveaux/${id}`,
            {method: 'DELETE'})
            .then((res) => ((res.json())));
    }

    async updatePut(id: string, competence:CompNiveauType) {
        fetch(`http://localhost:3000/niveaux/${id}`,
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(competence)
            })
            .then(response => response.json())
    }

}
export const serviceNiveauCompetences = Object.freeze(new ServiceNiveauCompetences())
