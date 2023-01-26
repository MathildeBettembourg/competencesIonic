import React, { useState, useRef, useEffect } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
import InputCompetences from './InputCompetences';
import { serviceCompetences } from '../services/ServiceCompetences';
import { CompetencesType } from '../Typages/CompetencesType';
import uuid from 'react-uuid';
import DisplayListeComponent from './DisplayListeCompenent';


export const ModaleCompetenceComponent = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

useEffect(()=>{
  serviceCompetences.getCompetences()
}, [])

  const [nouvelleCompetence, setNouvelleCompetence] = useState<CompetencesType>(new CompetencesType("", "", "", []))
  

  /**
   * Confirm permet de dissmiss la modale et permet de faire un 
   * get pour recuperer les competences 
   *
   */
  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
    serviceCompetences.getCompetences()
  }



  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Compétence</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonButton id="open-modal" expand="block">
            Ajouter une Compétence
          </IonButton>
          <IonModal ref={modal} trigger="open-modal" >
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonButton onClick={() => modal.current?.dismiss()}>Annuler</IonButton>
                </IonButtons>
                <IonTitle>Compétence à ajouter</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
              <InputCompetences nouvelleCompetence={nouvelleCompetence} setNouvelleCompetence={setNouvelleCompetence} confirm={confirm} />
            </IonContent>
          </IonModal>
          <DisplayListeComponent />
        </IonContent>
      </IonPage>
    </>
  );
}

export default ModaleCompetenceComponent;