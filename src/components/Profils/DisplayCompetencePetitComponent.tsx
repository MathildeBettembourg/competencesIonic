import { IonButton, IonItem, IonLabel, IonThumbnail } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'workbox-routing'
import CompetenceDetail from '../../pages/CompetenceDetail'
import { serviceCompetences } from '../../services/ServiceCompetences'
import { CompetencesType } from '../../Typages/CompetencesType'
import { CompNiveauType } from '../../Typages/CompNiveauType'
import ButtonComponent from '../ButtonComponent'
import CrubFabButton from '../CrubFabButton'
import "../dComp.css";



export type Props = {
    competence: CompNiveauType
}
const DisplayCompetencePetitComponent = (props: Props) => {

    const [competenceLiee, setCompetenceLiee] = useState<CompetencesType>(new CompetencesType("", "", "", []))
    /**
     * HANDLECLICK est une fonction qui va permettre de prendre en charge le click
     * elle va entrainer une redirection vers la page de modification du composant.
     */
    // const handleClick = () => {
    //
    //     return (<Link to={`/NiveauEdition/${competenceLiee.id as string}`} />)
    // }
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
                <IonItem>
                    <IonThumbnail slot="start">
                        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                    </IonThumbnail>
                    <IonLabel>
                        <div className='inline'>
                            <div>
                                <p>{competenceLiee.nom}</p>
                                <p>{props.competence.niveau}</p>
                            </div>
                            <div className='middle'>
                                {/*<Link to={`/NiveauEdition/${competenceLiee.id as string}`}> <ButtonComponent nom='Editer'></ButtonComponent></Link>*/}

                                <IonButton routerLink={`/NiveauEdition/${competenceLiee.id as string}`} color="warning"> Editer</IonButton>
                            </div>
                        </div>
                    </IonLabel>
                </IonItem>

            }
        </>
    )
}

export default DisplayCompetencePetitComponent