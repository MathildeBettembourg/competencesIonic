import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { personRemove } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DisplayProfileCare from '../components/Profils/DisplayProfileCare';
import ExploreContainer from '../components/ExploreContainer';
import { servicePersonne } from '../services/ServicePersonne';
import { PersonnesType } from '../Typages/PersonnesType';
import DisplayListeCompetence from './DisplayListeCompetence';
import './Tab2.css';

const Tab2= () => {
  let { id } = useParams() as { id: string };
  const[personne, setPersonne]=useState<PersonnesType>(new PersonnesType("", "", "", "", "", []))
  /**
   * UseEffect here to fetch a personne by its id
   */
  useEffect(()=>{
    servicePersonne.getPersonneById(id as string).then((res) => setPersonne(res))
  }, [id])

  
  return (
  
     <>
     <IonPage>
      {personne && personne.id!=""  &&
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        {/*<ExploreContainer name="Tab 2 page" />*/}
        <DisplayProfileCare personne={personne}/>
        <DisplayListeCompetence personne={personne} />
      </IonContent>
}
      </IonPage>

      </>



  );
};

export default Tab2;
