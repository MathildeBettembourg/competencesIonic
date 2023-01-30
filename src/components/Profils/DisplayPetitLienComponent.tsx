import { IonButton, IonItem, IonLabel, IonThumbnail } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import CompetenceDetail from '../../pages/CompetenceDetail'
import { serviceCompetences } from '../../services/ServiceCompetences'
import { CompetencesType } from '../../Typages/CompetencesType'
import { CompNiveauType } from '../../Typages/CompNiveauType'
import "../dComp.css";


export type Props = {
    competence: CompNiveauType
}
const DisplayCompetencePetitComponent = (props: Props) => {
    const [competenceLiee, setCompetenceLiee] = useState<CompetencesType>(new CompetencesType("", "", "", []))
    /**
     * UseEffect pour aller chercher les informations liées à uene compétence
     *  en particulier qui est renseignées sous forme d'id afin d'eviter des boucle
     */
    useEffect(() => {
        serviceCompetences.getCompetencesById(props.competence.idCompetence).then((res) => setCompetenceLiee({ ...competenceLiee, ...res }))
    }, [props.competence.id])
    return (
        <>
            {props.competence && competenceLiee.description != "" &&
                <IonItem class='middle'>
                    <IonThumbnail slot="start">
                        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                    </IonThumbnail>
                    <IonLabel>
                        <div className='inline'>
                            <div>
                                <p>{competenceLiee.nom}</p>
                                <p>{props.competence.niveau}</p>
                            </div>
                            <IonButton>Editer</IonButton>
                        </div>
                    </IonLabel>
                </IonItem>

            }
        </>
    )
}

export default DisplayCompetencePetitComponent