import React, { Component } from 'react';

class CreateEmployee extends Component {
    state = {
        name: '',
        position: '',
        birthDate: '',
        department: '',
        annualSalary: '',
    }
    addEmployee = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }
    render() {
        return (
            <form onSubmit={this.props.addEmployee.bind(null, this.state)}>
                <label htmlFor=''>Employee Name:
                <input type="text" name="name"  onChange={this.addEmployee} value={this.state.name} required/>
                </label><br/>
                <label htmlFor=''>Employee Position:
                <input type="text" name="position"  onChange={this.addEmployee} value={this.state.position}/>
                </label><br/>
                <label htmlFor=''>Employee DOB:
                <input type="date" name="birthDate"  onChange={this.addEmployee} value={this.state.birthDate} required/>
                </label><br/>
                <label htmlFor=''>Employee Department:
                <input type="text" name="department"  onChange={this.addEmployee} value={this.state.department}/>
                </label><br/>
                <label htmlFor=''>Employee Salary:
                <input type="number" name="annualSalary" min='0' onChange={this.addEmployee} value={this.state.annualSalary} required/>
                </label><br/>
                <button type='submit'>
                    Add Employee
                </button>
            </form>
        )
    }
}

export default CreateEmployee;