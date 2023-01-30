import React from 'react'
import DisplayCompetencePetitComponent from '../components/Profils/DisplayCompetencePetitComponent'
import { CompetencesType } from '../Typages/CompetencesType'
import { CompNiveauType } from '../Typages/CompNiveauType'
import { PersonnesType } from '../Typages/PersonnesType'

export type Props = {
    personne:PersonnesType
    setPersonne:Function
}
const DisplayListeCompetence = (props: Props) => {
    return (
        <>
            {props.personne.competence &&
                props.personne.competence.map((competence:CompNiveauType, index) => {
                    return (<DisplayCompetencePetitComponent personne={props.personne}  setPersonne={props.setPersonne} competence={competence} key={index}/>)
                })

            }
        </>
    )
}

export default DisplayListeCompetence