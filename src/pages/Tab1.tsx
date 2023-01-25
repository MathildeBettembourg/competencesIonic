import { IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import DisplayListeComponent from '../components/DisplayListeCompenent';
import ExploreContainer from '../components/ExploreContainer';
import ModaleCompetenceComponent from '../components/ModaleCompetenceComponent';

import './Tab1.css';

const Tab1: React.FC = () => {

  const[modaleDisplay, setModaleDisplay]=useState<boolean>(false)
  /**
   * Fonction callModale ajout permet d'ouvrir une modale
   *  d'ajout de compétence
   */
  const callModale=()=>{
   setModaleDisplay(true)
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Competences</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Competences</IonTitle>
          </IonToolbar>
        </IonHeader>
         <ModaleCompetenceComponent/>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
