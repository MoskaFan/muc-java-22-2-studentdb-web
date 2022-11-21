import {StudentType} from './StudentType';

import React, {Component} from 'react';
import Student from "./Student";

type StudentListProps ={
    students: StudentType []
}


export default function StudentList(props: StudentListProps){
    const listOfStudent = props.students.map((student: StudentType)=>{
        return <Student student={student} key = {student.id} />
    })

    return (
        <section>
            {listOfStudent}
            <button>Delete</button>
        </section>
    );

}
