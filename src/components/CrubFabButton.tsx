import React from 'react';
import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
import { add, colorPalette, createOutline, document, globe } from 'ionicons/icons';

export type Props={
    handleClick:Function
}
export const CrubFabButton=(props:Props)=> {

    const handleClick=()=>{
        props.handleClick()
    }
  return (
    <IonFab slot="fixed" vertical="bottom" horizontal="end" >
    <IonFabButton size="small" color="dark" onClick={handleClick}>
      <IonIcon icon={createOutline}></IonIcon>
    </IonFabButton>
  </IonFab>
  );
}
export default CrubFabButton;