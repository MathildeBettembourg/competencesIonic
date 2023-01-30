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
    newComp:CompNiveauType[]
    setNewComp:Function
    handleChangeCompetence:Function
}
export const SelectComponent = (props: Props) => {
    const uid = uuid()
    const [listCompetence, setListCompetence]=useState<string[]>([])
    // const newComp:CompNiveauType[]=[]
    const listNouvelleCompObject=()=>{
        console.log("test")
        listCompetence.forEach(idComp => props.setNewComp(props.newComp.push(new CompNiveauType("", idComp, uid))))
        console.log(props.newComp)
        return props.newComp
        // listCompetence.map((i, index)=> {
        //     console.log(i)
        //     return props.setNewComp([...props.newComp,new CompNiveauType("", i, uid) ])
        }

        // ))
        //
        //
        // }

    useEffect(()=>{
        listNouvelleCompObject()
    }, [listCompetence])
    const handleChange = (ev: any) => {
        setListCompetence(ev.target.value);
    }

const handleClick=()=>{
        props.handleChangeCompetence(props.newComp)
}

    return (
        <IonList>
            <IonItem>
                <IonSelect onIonChange={handleChange} placeholder="Select all fruits that apply" multiple={true}>
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
