import React from 'react'
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { PersonnesType } from '../Typages/PersonnesType';


export type Props={
  personne:PersonnesType
}
const DisplayProfileCare = (props:Props) => {
  return (
<>
    {props.personne &&
        <IonCard>
          <IonCardHeader>
          <IonCardSubtitle>{props.personne.titre}</IonCardSubtitle>
            <IonCardTitle>{props.personne.prenom} {props.personne.nom}</IonCardTitle>
          </IonCardHeader>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <IonCardContent>
           {props.personne.description}
          </IonCardContent>
        </IonCard>
    }
    </>

  );
}
export default DisplayProfileCare;