import React from "react";


export default function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

const students = [
    {
        id: 1,
        name: "김씨",
    },
    {
        id: 2,
        name: "박씨",
    },
    {
        id: 3,
        name: "이씨",
    },
    {
        id: 4,
        name: "샌즈",
    },
];


