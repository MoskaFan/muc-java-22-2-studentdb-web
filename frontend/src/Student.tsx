import {StudentType} from './StudentType';

import React, {Component} from 'react';

type StudentProps ={
    student: StudentType
}


export default function Student(props: StudentProps){


        return (
            <section>
                {props.student.name}<br />
                {props.student.id}
            </section>
        );

}

