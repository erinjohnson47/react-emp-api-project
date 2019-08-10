import React, { Component } from 'react';
import CreateEmployee from '../CreateEmployee';
import EmployeeList from '../EmployeeList'


class EmployeeContainer extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
        this.getEmployees();
    }

    createEmployee = async (employee, e) => {
        e.preventDefault();
        console.log(employee, e, '<-inside of addEmp')
        try {
            const createEmployee = await fetch('http://localhost:9000/api/v1/employees', {
                method: 'POST',
                body: JSON.stringify(employee),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            if(createEmployee.status !==200) {
                throw Error('resource not found')
            }
            console.log(createEmployee, '<-createEmployee fetch');

            const createEmployeeRes = await createEmployee.json();
            console.log(createEmployeeRes.data, '<-createdEmpsRes')

            this.setState({
                employees: [...this.state.employees, createEmployeeRes.data]
            });

        } catch (err) {
            console.log(err, "err in createEmployee")
            return err
        }
    }
    getEmployees = async () => {
        try {
            const resGetEmployees = await fetch('http://localhost:9000/api/v1/employees', {
                method: 'GET'
            })
            console.log(resGetEmployees, '<-resGetEmps')
            if (resGetEmployees.status !== 200) {
                throw Error('404 - not found')
            }
            const employeesResJSON = await resGetEmployees.json();
            console.log(employeesResJSON, '<-employeesResJSON')
            this.setState({
                employees: [...employeesResJSON.data]
            })
        } catch (err) {
            console.log(err, 'getEmps error')
            return err
        }
    }

    render() {
        console.log(this.state, '<-this.state in render')
        return (
            <div>
            <CreateEmployee addEmployee={this.createEmployee}/>
            <EmployeeList employees={this.state.employees}/> 
            </div>
        )
    }
}

export default EmployeeContainer;

