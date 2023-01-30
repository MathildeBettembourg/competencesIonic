import React, {useEffect, useState} from 'react';
import {IonItem, IonList, IonLabel, IonSelect, IonSelectOption, IonButton} from '@ionic/react';
import { CompetencesType } from '../Typages/CompetencesType';
import { PersonnesType } from '../Typages/PersonnesType';
import { CompNiveauType } from '../Typages/CompNiveauType';
import uuid from 'react-uuid';
import {log} from "util";

export type Props = {
    listeCompetence: CompetencesType[]
    ajoutComp: Function
    nouvellePersonne: PersonnesType
    newCompetence:CompNiveauType[]
    setNewComp:Function

}
export const SelectComponent = (props: Props) => {
    // const uid = uuid()
    const [listCompetence, setListCompetence]=useState<string[]>([])
    const [listCompObject, setListCompObject]=useState<CompNiveauType[]>([])
    // const newComp:CompNiveauType[]=[]
    const listNouvelleCompObject=()=>{
        listCompetence.forEach(idComp => listCompObject.push(new CompNiveauType("", idComp,  uuid())))
        }


    useEffect(()=>{
        listNouvelleCompObject()
    }, [listCompetence])
    const handleChange = (ev: any) => {
        setListCompetence(ev.target.value);
    }
const [isDisplay, setIsdisplay]=useState<boolean>(true)
const handleClick=()=>{
        setIsdisplay(!isDisplay)
    props.ajoutComp(
        {...props.nouvellePersonne,
            competence:
                listCompObject
        })
        props.setNewComp(listCompObject)

        //props.handleChangeCompetence(props.newCom
    // petence)
}

    return (
        <IonList>
            <IonItem>
                <IonSelect onIonChange={handleChange} placeholder="Select all fruits that apply" multiple={true} disabled={isDisplay}>
                    <IonSelectOption value="oranges">Aucunes</IonSelectOption>
                    {props.listeCompetence && props.listeCompetence.length != 0 &&
                        props.listeCompetence.map((competence: CompetencesType, index) => {
                            return <IonSelectOption value={competence.id} key={index}>{competence.nom}</IonSelectOption>
                        })}
                </IonSelect>
                <IonButton onClick={handleClick}> ok</IonButton>
            </IonItem>
        </IonList >
    )
}
export default SelectComponent;
