import {StudentType} from './StudentType';

import React, {Component, useEffect, useState} from 'react';
import Student from "./Student";
import axios from "axios";
import StudentList from "./StudentList";




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

    return (
        <section>
            <StudentList students={studentList} />
        </section>
    );

}
