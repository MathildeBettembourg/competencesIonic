import { IonCard } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { serviceCompetences } from "../services/ServiceCompetences";
import { CompetencesType } from "../Typages/CompetencesType";
import DisplayCompetence from "./DisplayCompetence";

export const DisplayListeComponent = () => {

    const [listeCompetences, setListeCompetences] = useState<CompetencesType[]>([])

    useEffect(() => {
        serviceCompetences.getCompetences().then((res) => setListeCompetences(res))
    }, [])
    return (
        <>
            {listeCompetences &&
                listeCompetences.map((competenceUnit, index) => {
                    return (
                        <IonCard key={index}>
                            <DisplayCompetence key={index} competenceUnit={competenceUnit} />
                        </IonCard>)

                })}
        </>
    )

}
export default DisplayListeComponent;