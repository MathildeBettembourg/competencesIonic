import React, { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import SelectComponent from './SelectComponent';
import { servicePersonne } from '../services/ServicePersonne';
import uuid from 'react-uuid';
import { PersonnesType } from '../Typages/PersonnesType';
import { CompetencesType } from '../Typages/CompetencesType';

export type Props={
    nouvellePersonne:PersonnesType
    setNouvellePersonne:Function
    handleClick:Function
    listeTech:CompetencesType[]
}
const InputPersonnes = (props:Props) => {

/**
 * HANDLENOMCHANGE est une fonction qui permet de setter l'id et le nom du nouvelle utilisateur
 * @param e de type html input event
 */
    const handleNomChange=(e:any)=>{
        const ids=uuid();
        props.setNouvellePersonne({...props.nouvellePersonne, id:ids, nom:e.target.value})
    }
/**
 * HandlePrenomChange est une fonction utilisée pour setter le prenom du nouevl utilisateur
 * @param e de tyop html input
 */
    const handlePrenomChange=(e:any)=>{
        props.setNouvellePersonne({...props.nouvellePersonne, prenom:e.target.value})
    }
    /**
 * HandlePrenomChange est une fonction utilisée pour setter le prenom du nouevl utilisateur
 * @param e de tyop html input
 */
    const handleTitreChange=(e:any)=>{
        props.setNouvellePersonne({...props.nouvellePersonne, titre:e.target.value})
    }
/**
 * HandledesciptionChange est une fonction qui permet de setter la description de la personne à enregistre
 * @param e 
 */
    const handleDescriptionChange=(e:any)=>{
        props.setNouvellePersonne({...props.nouvellePersonne, description:e.target.value})
    }
    /**
     * Handle click est la fonction pour ajouter une nouvelle personne
     */
    const handleClick=()=>{
        props.handleClick()
    }
    return (
        <IonList>

            <IonItem>
                <IonLabel>Nom </IonLabel>
                <IonInput type='text' placeholder="Nom" onIonChange={handleNomChange}  required={true}></IonInput>
            </IonItem>

            <IonItem>
                <IonLabel> Prenom </IonLabel> 
                <IonInput type='text' placeholder="Prenom" onIonChange={handlePrenomChange}  required={true}></IonInput>
            </IonItem>

            <IonItem>
                <IonLabel>Titre</IonLabel>
                <IonInput type='text' placeholder="Titre" onIonChange={handleTitreChange}  required={true}></IonInput>
            </IonItem>

            <IonItem>
                <IonLabel> Description</IonLabel>
                <IonInput type='text' placeholder="Description" onIonChange={handleDescriptionChange}  required={true}></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel>Competences</IonLabel>
                <SelectComponent ajoutComp={props.setNouvellePersonne} nouvellePersonne={props.nouvellePersonne} listeCompetence={props.listeTech}/>
            </IonItem>
            <IonButton onClick={handleClick}>Ajouter</IonButton>
        </IonList>
    )
}

export default InputPersonnes
