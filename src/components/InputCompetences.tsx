import React, { HtmlHTMLAttributes, useState } from "react";
import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { CompetencesType } from "../Typages/CompetencesType";
import uuid from 'react-uuid';
import { serviceCompetences } from "../services/ServiceCompetences";

export type props={
    nouvelleCompetence:CompetencesType,
    setNouvelleCompetence:Function,
    confirm:Function
}
export const InputCompetences = (props:props) => {
const [nouvelleCompetence, setNouvelleCompetence] = useState<CompetencesType>(new CompetencesType("", "", "", []))

/**
 * HANDLEDESCRIPTIONCHANGE permet d'implementer la description d'une competence
 * l'id est defini au même moment
 */
const handleDescriptionChange=(event:any)=>{
    const ids=uuid()
    setNouvelleCompetence({...nouvelleCompetence,description:event.target.value, id:ids })
}

/**
 * HANDLENOMCHANGE permet d'editer le nom de l'objet competence
 */
const handleNomChange=(event:any)=>{
    setNouvelleCompetence({...nouvelleCompetence,nom:event.target.value})
}

/**
 * HANDLECLICKAJOUT permet d'ajouter une nouvelle competence au click, 
 * en même temps elle ferme la modale
 */
const handleClickAjout =()=>{
    props.confirm()
    serviceCompetences.addCompetence(nouvelleCompetence).then(props.confirm())
}



    return (
        <IonList>
            <IonItem>
                <IonLabel>Nom : </IonLabel>
                <IonInput placeholder="Nom de la compétence" onIonChange={handleNomChange} required={true}></IonInput>
            </IonItem>

            <IonItem>
                <IonLabel>Description :</IonLabel>
                <IonInput type="text" placeholder="Description de la compétence" onIonChange={handleDescriptionChange} required={true}></IonInput>
            </IonItem>
            <IonButton onClick={handleClickAjout}>Créer</IonButton>
        </IonList>
    )

}
export default InputCompetences;