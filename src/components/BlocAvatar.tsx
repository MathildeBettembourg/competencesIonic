import { IonAvatar, IonItem, IonLabel } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { servicePersonne } from '../services/ServicePersonne'
import { PersonnesType } from '../Typages/PersonnesType'

export type Props = {
    id: string
}
const BlocAvatar = (props: Props) => {
    const [personnePossedantCompetence, setPersonnePossedantCompetence] = useState<PersonnesType>(new PersonnesType("", "", "", "", "", []))
    useEffect(() => {
        servicePersonne.getPersonneById(props.id).then((res) => setPersonnePossedantCompetence({ ...personnePossedantCompetence, ...res }))

    }, [props.id])

    return (

        <>
            {personnePossedantCompetence.id != "" &&
                <IonItem>
                    <IonAvatar slot="start">
                        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                    </IonAvatar>
                    <IonLabel>
                        <p>{personnePossedantCompetence.prenom} {personnePossedantCompetence.prenom}</p>
                        <p>{personnePossedantCompetence.titre}</p>

                    </IonLabel>
                </IonItem>
            }
        </>
    )
}

export default BlocAvatar