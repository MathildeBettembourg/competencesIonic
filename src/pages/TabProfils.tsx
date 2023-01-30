import React, { useEffect, useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonModal, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { serviceCompetences } from '../services/ServiceCompetences';
import { servicePersonne } from '../services/ServicePersonne';
import { PersonnesType } from '../Typages/PersonnesType';
import SmalListpersonnes from '../components/Profils/SmalListpersonnes';
//import InputPersonnes from '../components/InputPersonnes';
import { CompetencesType } from '../Typages/CompetencesType';
import InputPersonnes from "../components/Profils/InputPersonnes";

export const TabProfils = () => {
    const [listeUtilisateurs, setListeUtilisateurs] = useState<PersonnesType[]>([])
    const[nouvellePersonne, setNouvellePersonne] = useState<PersonnesType>(new PersonnesType("","","","","",[]))
    const[listeTech, setListTech] = useState<CompetencesType[]>([])
    /**
     * useEffect here to get al the people in the Database
     */
    useEffect(() => {
        servicePersonne.getPersonne().then((res) =>
        setListeUtilisateurs(res)
        //console.log(res)
        )
    }, [])

    useEffect(()=>{
serviceCompetences.getCompetences().then((res)=> setListTech(res))
    }, [])

    const handleClick=()=>{
        servicePersonne.addPersonne(nouvellePersonne)
    }
    return (

      
            <IonPage>
              <IonHeader>
                <IonToolbar>
                  <IonTitle>Votre Equipe de dev</IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">
                <IonButton id="open-modal" expand="block">
                  Ajouter une personne
                </IonButton>
                <IonModal
                  trigger="open-modal"
                  initialBreakpoint={0.65}
                  breakpoints={[0, 0.25, 0.5, 0.65, 0.75]}
                  handleBehavior="cycle"
                >
                  <IonContent className="ion-padding">
                    <div className="ion-margin-top">
                      <IonTitle>Nouvelle personne</IonTitle>
                   <InputPersonnes nouvellePersonne={nouvellePersonne} setNouvellePersonne={setNouvellePersonne} handleClick={handleClick} listeTech={listeTech}/>
                    </div>
                  </IonContent>
                </IonModal>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Profiles</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            {listeUtilisateurs && listeUtilisateurs.length != 0 &&
                                listeUtilisateurs.map((user, index) =>
                                    <SmalListpersonnes utilisateur={user} key={index} />
                                )
                            }
                        </IonList>
                    </IonCardContent>
                </IonCard>
              </IonContent>
            </IonPage>
                        )}
export default TabProfils;