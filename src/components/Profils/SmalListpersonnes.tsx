import {IonButton, IonItem, IonLabel, IonThumbnail} from '@ionic/react'
import React from 'react'
import {Link} from 'react-router-dom'
import {PersonnesType} from '../../Typages/PersonnesType'
import {servicePersonne} from "../../services/ServicePersonne";

export type Props = {
    utilisateur: PersonnesType
}
const SmalListpersonnes = (props: Props) => {
    const handleClickDelete=()=>{
        servicePersonne.deletePersonneById(props.utilisateur.id)
    }
    return (
        <IonItem>
            <IonThumbnail slot="start">
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg"/>
            </IonThumbnail>
            <div className='inCol'>
                <p>{props.utilisateur.titre}</p>
                <IonLabel>{props.utilisateur.nom} {props.utilisateur.prenom}</IonLabel>
            </div>
            <div className="inCol">
                <IonButton routerLink={`/Tab2/${props.utilisateur.id}`}>+</IonButton>
                <IonButton onClick={handleClickDelete} color="danger">-</IonButton>
            </div>


        </IonItem>
    )
}

export default SmalListpersonnes