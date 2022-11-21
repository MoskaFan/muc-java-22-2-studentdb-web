import {StudentType} from './StudentType';

import React, {Component} from 'react';
import Student from "./Student";

type StudentListProps ={
    students: StudentType [],
    deleteThatStudent(id: string): void,

}


export default function StudentList(props: StudentListProps){
    const listOfStudent = props.students.map((student: StudentType)=>{
        return <Student student={student} key = {student.id} deleteThatStudent={props.deleteThatStudent}/>
    })

    return (
        <section>
            {listOfStudent}

        </section>
    );

}
