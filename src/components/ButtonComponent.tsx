import React from 'react';
import { IonButton } from '@ionic/react';


export type Props={
    nom:string,
    fonction?:Function | undefined
}
export const ButtonComponent =(props:Props)=> {

    return (
    <>
      <IonButton>{props.nom}</IonButton>
    </>
  );
}
export default ButtonComponent;