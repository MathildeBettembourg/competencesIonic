import {IonList, IonPage, IonContent, IonToolbar, IonHeader, IonTitle, IonButton, IonItem, IonLabel, IonInput} from '@ionic/react'
import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {servicePersonne} from "../services/ServicePersonne";
import {serviceNiveauCompetences} from "../services/ServiceNiveauCompetence";
import {CompNiveauType} from "../Typages/CompNiveauType";
import {CompetencesType} from "../Typages/CompetencesType";
import InputGeneric from "../components/generic/InputGeneric";
import {PersonnesType} from "../Typages/PersonnesType";

const EditionProfil = () => {
    let {id} = useParams() as { id: string }
    const [toUpdate, setToUpdate] = useState<PersonnesType>(new PersonnesType("","","","","", []);
    useEffect(() => {
       servicePersonne.getPersonneById(id).then((res) => setToUpdate({...toUpdate, ...res}))
    }, [id])

    const handleChangeNom = (event:any) => {
        setToUpdate({...toUpdate,nom:event.target.value})
    }
    const handleChangePrenom = (event:any) => {
        setToUpdate({...toUpdate,prenom:event.target.value})
    }
    const handleChangeDescription = (event:any) => {
        setToUpdate({...toUpdate,description:event.target.value})
    }
    // const handleChangeNom = (event:any) => {
    //     setToUpdate({...toUpdate,nom:event.target.value})
    // }


    const handleClick = () => {
        console.log(toUpdate)
    }
    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Modifier le profil</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>

                    <IonList>
                        <IonItem>
                            <IonLabel>Nom</IonLabel>
                            <IonInput placeholder={toUpdate.nom} defaultValue={toUpdate.nom} onIonChange={handleChangeNom}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Prenom</IonLabel>
                            <IonInput placeholder={toUpdate.prenom} defaultValue={toUpdate.prenom} onIonChange={handleChangePrenom}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Description</IonLabel>
                            <IonInput placeholder={toUpdate.description} defaultValue={toUpdate.description} onIonChange={handleChangeDescription}></IonInput>
                        </IonItem>

                    </IonList>
                    <IonButton onClick={handleClick}> Valider </IonButton>
                </IonContent>
            </IonPage>
        </>
// composent generique
    )
}

export default EditionProfil