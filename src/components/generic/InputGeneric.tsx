import React from "react";

import {IonContent, IonInput, IonItem, IonLabel, IonList, IonPage} from '@ionic/react';
import {CompNiveauType} from "../../Typages/CompNiveauType";

export type Props = {
    titre: string;
    handleChange: Function
    placeholder: string
    inputItem: string
    defaultValue: string

}
export const InputGeneric = (props: Props) => {
    const handleChange = (event:any) => {
        props.handleChange(event.target.value)
    }
    return (


                <IonItem>
                    <IonLabel>{props.titre}</IonLabel>
                    <IonInput placeholder={props.placeholder} defaultValue={props.defaultValue}
                              onIonChange={handleChange}></IonInput>
                </IonItem>



    );
}
export default InputGeneric;