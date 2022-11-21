import {StudentType} from './StudentType';

import React, {Component, useEffect, useState} from 'react';
import Student from "./Student";
import axios from "axios";
import StudentList from "./StudentList";
import './StudentApp.css'
import AddStudent from "./AddStudent";




export default function StudentApp(){

    const [studentList, setStudentList] = useState<StudentType []>([]);

    useEffect(()=>{
        getStudentList()
    },[])

    function getStudentList(){
        axios.get("/student")
            .then((response)=>{
                setStudentList(response.data)})
            .catch(console.error)
    }
    function addNewStudent(newStudent:StudentType){
        axios.post("/student", newStudent)
            .then(savedStudent =>{
                setStudentList((prevState)=>{
                    return [...prevState, savedStudent.data]
                })})
            .catch(console.error)
    }
    function deleteThatStudent(deletedStudentId: string){
        axios.delete("/student/"+deletedStudentId)
            .then(()=>{
                const newList = studentList.filter((student: StudentType) =>
                    student.id!==deletedStudentId)
                    setStudentList(newList)
                })

    }

    return (
        <section className={"todo-form"}>
            <h1>Students List</h1>
            <StudentList students={studentList} deleteThatStudent={deleteThatStudent}/>
            <AddStudent addNewStudent={addNewStudent} />
        </section>
    );

}
