import { IonCard } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { serviceCompetences } from "../../services/ServiceCompetences";
import { CompetencesType } from "../../Typages/CompetencesType";
import DisplayCompetence from "./DisplayCompetence";

export const DisplayListeComponent = () => {

    const [listeCompetences, setListeCompetences] = useState<CompetencesType[]>([])

    const affichage=()=>{
        serviceCompetences.getCompetences().then((res) => setListeCompetences(res))
    }
    useEffect(() => {
        affichage()
    }, [])

    const deleteById=(valeur:string)=>{
    serviceCompetences.deleteCompetenceById(valeur).then(affichage)
    }
    return (
        <>
            {listeCompetences &&
                listeCompetences.map((competenceUnit, index) => {
                    return (
                        <IonCard key={index}>
                            <DisplayCompetence deleteById={deleteById} key={index} competenceUnit={competenceUnit} />
                        </IonCard>)

                })}
        </>
    )

}
export default DisplayListeComponent;