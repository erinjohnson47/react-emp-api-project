import React from 'react';
import {Form, Button, Label} from 'semantic-ui-react';

const EditEmployee = (props) => {
    return (
        <div>
            <Form onSubmit={props.editEmployeeAndCloseModal}>
                <Label>Employee Name:
                <Form.Input type="text" name="name"  onChange={props.handleFormChange} value={props.employeeToEdit.name}/>
                </Label>
                <Label>Employee Position:
                <Form.Input type="text" name="position"  onChange={props.handleFormChange} value={props.employeeToEdit.position}/>
                </Label>
                <Label>Employee DOB:
                <Form.Input type="text" name="birthDate"  onChange={props.handleFormChange} value={props.employeeToEdit.birthDate}/>
                </Label>
                <Label>Employee Department:
                <Form.Input type="text" name="department"  onChange={props.handleFormChange} value={props.employeeToEdit.department}/>
                </Label>
                <Label>Employee Salary:
                <Form.Input type="number" name="annualSalary" min='0' onChange={props.handleFormChange} value={props.employeeToEdit.annualSalary} required/>
                </Label>
                <Button type='submit'>
                    Update Employee
                </Button>
            </Form> 
        </div>
    )
}

export default EditEmployee;