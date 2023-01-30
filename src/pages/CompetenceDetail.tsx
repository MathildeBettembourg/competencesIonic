import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DisplayPersonnePetitLienCompetence from "../components/Competences/DisplayPersonnePetitLienCompetence";
import ExploreContainer from "../components/ExploreContainer";
import { serviceCompetences } from "../services/ServiceCompetences";
import { CompetencesType } from "../Typages/CompetencesType";


export const CompetenceDetail = () => {
    let { id } = useParams() as { id: string };
    const [detailledCompetence, setDetailledCompetence] = useState<CompetencesType>(new CompetencesType("", "", "", [""]))

/**
 * USEEFFECT is est pour aller chercher les informationsliées à une compétence en particulier, 
 * liées à une id car un id est une competence
 */
    useEffect(() => {
        serviceCompetences.getCompetencesById(id as string).then(setDetailledCompetence)
    }, [id])

    return (
        <>
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Compétence</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        {detailledCompetence.id!="" &&
            <IonCard>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                <IonCardHeader>
                    <IonCardTitle> Competence : {detailledCompetence.nom}</IonCardTitle>
                </IonCardHeader>
                    <>
                        <p>Description : {detailledCompetence.description}</p>
                    </>
                <IonCardContent>
                </IonCardContent>
            </IonCard> }
            <DisplayPersonnePetitLienCompetence listePersonne={detailledCompetence.personnesIds}/>
            </IonContent>
            </IonPage>
        </>
    )

}
export default CompetenceDetail