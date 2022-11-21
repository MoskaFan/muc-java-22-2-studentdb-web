import {StudentType} from './StudentType';
import './Student.css'

import React, {Component} from 'react';

type StudentProps ={
    student: StudentType,
    deleteThatStudent(id: string): void
}


export default function Student(props: StudentProps){

function deleteThatStudent(){
    props.deleteThatStudent(props.student.id!)
}

        return (
            <section className={"todo-description"}>
                {props.student.name}<br />
                {props.student.id}
                <button onClick={deleteThatStudent}>Delete</button>
            </section>
        );

}

