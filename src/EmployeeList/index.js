import React from 'react';
import {Card, Button, Label} from 'semantic-ui-react';


const Employees = (props) => {
    const employeeList = props.employees.map((employee) => {
        return (
            <div key={employee._id}>
                <span>Name: {employee.name}</span><br/>
                <span>Position: {employee.position}</span><br/>
                <span>DOB: {employee.birthDate}</span><br/>
                <span>Department: {employee.department}</span><br/>
                <span>Salary: {employee.annualSalary}</span><br/>
                <button onClick={props.showModal.bind(null, employee)}>Edit Employee Information</button>
                <button onClick={props.deleteEmployee.bind(null, employee._id)}>Delete Employee</button><br/>
            </div>
        )
    })
    return (
        <div>
            <h2>Employees</h2>
                {employeeList}
        </div>
        )
}


export default Employees;