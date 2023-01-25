import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './dComp.css';
import { CompetencesType } from '../Typages/CompetencesType';
import { Link } from 'react-router-dom';


export type props = {
    competenceUnit: CompetencesType
}

export const DisplayCompetence = (props: props) => {
    return (
        <>
            <IonCardHeader>
                <IonCardTitle>{props.competenceUnit.nom}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                {props.competenceUnit.description}
             <Link to={`/CompetenceDetail/${props.competenceUnit.id as string}`}>Voir plus...</Link> </IonCardContent>
      
        </>


    );
}
export default DisplayCompetence;