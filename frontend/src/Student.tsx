import {StudentType} from './StudentType';

import React, {Component} from 'react';

type StudentProps ={
    student: StudentType,
    deleteThatStudent(id: string): void
}


export default function Student(props: StudentProps){

function deleteThatStudent(){
    props.student.id
}

        return (
            <section>
                {props.student.name}<br />
                {props.student.id}
                <button onClick={deleteThatStudent}>Delete</button>
            </section>
        );

}

