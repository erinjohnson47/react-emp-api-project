import React, { Component } from 'react';

const EditEmployee = (props) => {
    return (
        <div>
            <form onSubmit={props.editEmployeeAndCloseModal}>
                <label htmlFor=''>Employee Name:
                <input type="text" name="name"  onChange={props.handleFormChange} value={props.employeeToEdit.name}/>
                </label><br/>
                <label htmlFor=''>Employee Position:
                <input type="text" name="position"  onChange={props.handleFormChange} value={props.employeeToEdit.position}/>
                </label><br/>
                <label htmlFor=''>Employee DOB:
                <input type="text" name="birthDate"  onChange={props.handleFormChange} value={props.employeeToEdit.birthDate}/>
                </label><br/>
                <label htmlFor=''>Employee Department:
                <input type="text" name="department"  onChange={props.handleFormChange} value={props.employeeToEdit.department}/>
                </label><br/>
                <label htmlFor=''>Employee Salary:
                <input type="number" name="annualSalary" min='0' onChange={props.handleFormChange} value={props.employeeToEdit.annualSalary} required/>
                </label><br/>
                <button type='submit'>
                    Update Employee
                </button>
            </form> 
        </div>
    )
}

export default EditEmployee;