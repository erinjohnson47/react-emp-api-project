import React from 'react';

const Employees = ({employees}) => {
    console.log(employees, '<-props in employeelist')
    const employeeList = employees.map((employee) => {
        return (
            <div key={employee._id}>
                <span>Name: {employee.name}</span><br/>
                <span>Position: {employee.position}</span><br/>
                <span>DOB: {employee.birthDate}</span><br/>
                <span>Department: {employee.department}</span><br/>
                <span>Salary: {employee.annualSalary}</span><br/>
                <button>Edit Employee Information</button>
                <button>Delete Employee</button><br/>
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