import { IonButton, IonItem, IonLabel, IonThumbnail } from '@ionic/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { PersonnesType } from '../../Typages/PersonnesType'

export type Props = {
  utilisateur: PersonnesType
}
const SmalListpersonnes = (props: Props) => {
  return (
    <IonItem>
      <IonThumbnail slot="start">
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
      </IonThumbnail>
      <div className='inline'>
        <div className='inCol'>
          <p>{props.utilisateur.titre}</p>
          <IonLabel>{props.utilisateur.nom} {props.utilisateur.prenom}</IonLabel>
        </div>
        <Link to={`/Tab2/${props.utilisateur.id}`} > <IonButton> Details</IonButton></Link>
      </div>

    </IonItem>
  )
}

export default SmalListpersonnes