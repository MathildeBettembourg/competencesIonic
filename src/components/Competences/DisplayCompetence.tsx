import React from 'react';
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import '../dComp.css';
import {CompetencesType} from '../../Typages/CompetencesType';
import {Link} from 'react-router-dom';


export type props = {
    competenceUnit: CompetencesType
    deleteById:Function
}

export const DisplayCompetence = (props: props) => {

    const handleDelete=()=>{
        props.deleteById(props.competenceUnit.id)
    }
    return (
        <>
            <IonCardHeader>
                <IonCardTitle>{props.competenceUnit.nom}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="inCol">
                {props.competenceUnit.description}
                <div>
                <IonButton routerLink={`/CompetenceDetail/${props.competenceUnit.id as string}`}>Voir
                    plus...
                </IonButton>
                    <IonButton onClick={handleDelete}> Supprimer</IonButton>
                </div>
            </IonCardContent>

        </>


    );
}
export default DisplayCompetence;