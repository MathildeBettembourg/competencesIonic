import React from "react";

import { IonInput, IonItem, IonLabel, IonList } from '@ionic/react';

export type Props={
    titre:string;
    handleChange:Function
    placeholder:string

}
export const InputGeneric=(props:Props)=>{
    return (
        <IonList>

            <IonItem>
                <IonLabel>{props.titre}</IonLabel>
                <IonInput placeholder="Enter company name"></IonInput>
            </IonItem>

        </IonList>
    );
}
export default InputGeneric;