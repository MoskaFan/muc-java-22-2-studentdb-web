import {StudentType} from './StudentType';

import React, {ChangeEvent, Component, useEffect, useState} from 'react';
import StudentList from "./StudentList";
import './StudentApp.css'
import AddStudent from "./AddStudent";
import useStudents from '../Hooks/UseStudents';




export default function StudentApp(){

    const [studentList, addNewStudent, deleteThatStudent] = useStudents();



    return (
        <section className={"todo-form"}>
            <h1>Students List</h1>
            <AddStudent addNewStudent={addNewStudent} />
            <StudentList students={studentList} deleteThatStudent={deleteThatStudent}/>

        </section>
    );

}
