import {StudentType} from './StudentType';

import React, {ChangeEvent, Component, useState} from 'react';
import Student from "./Student";

type StudentListProps ={
    students: StudentType [],
    deleteThatStudent(id: string): void,

}


export default function StudentList(props: StudentListProps){

    //searchText Variabeln klein schreiben
    const [SearchText, setSearchText] = useState<string>("");
    const filteredStudents: StudentType[] = props.students.filter(student => student.name.toLowerCase()
        .includes(SearchText.toLowerCase()))

    function onSearchChange(event: ChangeEvent<HTMLInputElement>){
        setSearchText(event.target.value)
    }

    //unbenutzen Code entfernen
    function mapStudents(){

    }
    return (
        <section>
            <input onChange={onSearchChange}/><br />
            //hier würde ich besonders auf die Formatierung achten
            {filteredStudents.length>0 
                ? filteredStudents.map(student=><Student student={student} key={student.id} deleteThatStudent={props.deleteThatStudent}/>)
                : <p>Es wurde kein Student mit diesem Namen gefunden</p>}

        </section>
    )

}
