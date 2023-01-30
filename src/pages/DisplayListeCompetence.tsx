import React from 'react'
import DisplayCompetencePetitComponent from '../components/Profils/DisplayCompetencePetitComponent'
import { CompetencesType } from '../Typages/CompetencesType'
import { CompNiveauType } from '../Typages/CompNiveauType'
import { PersonnesType } from '../Typages/PersonnesType'

export type Props = {
    personne:PersonnesType
}
const DisplayListeCompetence = (props: Props) => {
    return (
        <>
            {props.personne.competence &&
                props.personne.competence.map((competence:CompNiveauType, index) => {
                    return (<DisplayCompetencePetitComponent competence={competence} key={index}/>)
                })

            }
        </>
    )
}

export default DisplayListeCompetence