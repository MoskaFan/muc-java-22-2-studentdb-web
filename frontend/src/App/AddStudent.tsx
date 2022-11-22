import {StudentType} from './StudentType';
import './StudentApp.css';

import React, {ChangeEvent, Component, useState} from 'react';

type AddStudentProps ={

    addNewStudent(newStudent: StudentType): void

}


export default function AddStudent(props: AddStudentProps){

    const [newStudentName, setNewStudentName]=useState<string>("");

    const newStudentNameInput = (event: ChangeEvent<HTMLInputElement>)=>{
        setNewStudentName(event.target.value)
    }

function addNewStudent(){
    const initialId = 0;
    const newStudent: StudentType= {

            name: newStudentName
    }
    props.addNewStudent(newStudent)
}
    return (
        <section className={"addTodo-input"}>
            New Student: <input onChange={newStudentNameInput}/>
            <button onClick={addNewStudent}>Add</button>

        </section>
    );

}
