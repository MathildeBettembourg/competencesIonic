import React, { useEffect } from "react";
import { IonAvatar, IonItem, IonLabel, IonThumbnail } from '@ionic/react';
import BlocAvatar from "./BlocAvatar";

export type Props = {
  listePersonne: string[]
}
const DisplayPersonnePetitLienCompetence = (props: Props) => {


  return (
    <>
      {props.listePersonne && props.listePersonne.length != 0 &&
        props.listePersonne.map((id: string, index) => {
          return <BlocAvatar id={id} key={index} />
        })


      }
    </>
  );

}

export default DisplayPersonnePetitLienCompetence
