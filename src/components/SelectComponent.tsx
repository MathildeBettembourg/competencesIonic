import React, { useState } from 'react';
import { IonItem, IonList, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import { CompetencesType } from '../Typages/CompetencesType';
import { PersonnesType } from '../Typages/PersonnesType';
import { CompNiveauType } from '../Typages/CompNiveauType';
import uuid from 'react-uuid';

export type Props = {
    listeCompetence: CompetencesType[]
    ajoutComp: Function
    nouvellePersonne: PersonnesType
}
export const SelectComponent = (props: Props) => {
    const uid = uuid()
    const handleChange = (ev: any) => {

        // props.ajoutComp({ 
        //     ...props.nouvellePersonne, 
        //     competence:[
        //         ...props.nouvellePersonne.competence,
        //         ...ev.map((id:string)=>{
        //             const newC = new CompNiveauType("", id,uid)
        //             return  newC
        //         })
        //     ] 
        // })
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
            </IonItem>
        </IonList >
    );
}
export default SelectComponent;
