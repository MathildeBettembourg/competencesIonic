import React, { useRef } from 'react';
import {
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonPage,
    IonList,
    IonItem,
    IonLabel,
    IonAvatar,
    IonImg,
    IonSearchbar,
} from '@ionic/react';
import InputGeneric from "./InputGeneric";
import SelectComponent from "../SelectComponent";

export const ModaleGeneric=()=> {


    const modal = useRef(null);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Competences</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">

                <IonButton id="open-modal" expand="block">
                    Open Sheet Modal
                </IonButton>

                <IonModal ref={modal} trigger="open-modal" initialBreakpoint={0.25} breakpoints={[0, 0.25, 0.5, 0.75]}>
                    <IonContent className="ion-padding">
                        <IonSearchbar onClick={() => modal.current?.setCurrentBreakpoint(0.75)} placeholder="Search"></IonSearchbar>
                        <IonList>
                            <SelectComponent></SelectComponent>
                            <IonItem>
                                <InputGeneric/>
                            </IonItem>

                        </IonList>
                    </IonContent>
                </IonModal>

            </IonContent>

        </IonPage>
    );
}

export default ModaleGeneric;