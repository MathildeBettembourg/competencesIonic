import React from 'react'
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import {PersonnesType} from '../../Typages/PersonnesType';


export type Props = {
    personne: PersonnesType
}
const DisplayProfileCare = (props: Props) => {
    return (
        <>
            {props.personne &&
                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>{props.personne.titre}</IonCardSubtitle>
                        <IonCardTitle>{props.personne.prenom} {props.personne.nom}</IonCardTitle>
                    </IonCardHeader>
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png"/>
                    <IonCardContent>
                        {props.personne.description}
                        <div className=" inCol">
                            <IonButton color="success"
                                       routerLink={`/EditionProfil/${props.personne.id}`}>Modification</IonButton>
                            <IonButton color="primary">Nouvelle competences</IonButton>
                        </div>
                    </IonCardContent>
                </IonCard>
            }
        </>

    );
}
export default DisplayProfileCare;