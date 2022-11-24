import {useEffect, useState} from "react";
import {StudentType} from "../App/StudentType";
import axios from "axios";

type UseStudentProps = [StudentType[], (newStudent: StudentType) => void, (id: string) => void]



//hooks schreiben wir typischerweiße am Anfang klein
export default function UseStudents(): UseStudentProps {


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
    return [studentList, addNewStudent, deleteThatStudent]

}