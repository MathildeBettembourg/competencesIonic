import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import { useParams } from "react-router-dom";
import ExploreContainer from "../components/ExploreContainer";

export const CompetenceDetail=()=>{
    let id = useParams();
    return(<IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Details de la compétence</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 2</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer name="Tab 2 page" />
        </IonContent>
      </IonPage>)

}
export default CompetenceDetail