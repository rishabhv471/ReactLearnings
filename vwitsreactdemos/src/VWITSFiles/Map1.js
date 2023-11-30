import React, { Component } from "react";
class AZList extends Component {

    students = [
        { id: 1, name1: "Amal", age1: 25 },
        { id: 2, name1: "Mark", age1: 32 },
        { id: 3, name1: "Sithum", age1: 28 },
        { id: 4, name1: "Tony", age1: 30 }
    ];
    studentList = this.students.map(student => (
        //class component invoking arrow functional component 
        <Student name={student.name1} age={student.age1} />
    ));

    render() {
        return <div>{this.studentList}</div>;

    }
}//class closed

//arrow functional component
const Student = props11 => {
    return (
        <div>
            <h6>
                {props11.name} is {props11.age} years old
            </h6>
        </div>
    );
};

export default AZList;