import React, { Component } from 'react';

class CreateEmployee extends Component {
    state = {
        name: '',
        position: '',
        birthDate: '',
        department: '',
        annualSalary: '',
    }
    render() {
        return (
            <form>
                <label htmlFor=''>Employee Name:
                <input type="text" name="name" required onChange={this.addEmployee} value={this.state.name}/>
                </label><br/>
                <label htmlFor=''>Employee Position:
                <input type="text" name="position"  onChange={this.addEmployee} value={this.state.position}/>
                </label><br/>
                <label htmlFor=''>Employee DOB:
                <input type="date" name="birthDate" required onChange={this.addEmployee} value={this.state.birthDate}/>
                </label><br/>
                <label htmlFor=''>Employee Department:
                <input type="text" name="department"  onChange={this.addEmployee} value={this.state.department}/>
                </label><br/>
                <label htmlFor=''>Employee Salary:
                <input type="number" name="annualSalary" required onChange={this.addEmployee} value={this.state.annualSalary}/>
                </label><br/>
                <button type='submit'>
                    Add Employee
                </button>
            </form>
        )
    }
}

export default CreateEmployee;