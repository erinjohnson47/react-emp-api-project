import React, { Component } from 'react';
import EmployeeList from '../EmployeeList'
import CreateEmployee from '../CreateEmployee';

class EmployeeContainer extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
        this.getEmployees();
    }

    createEmployee = async (employee, e) => {
        e.preventDefault();
        // try {
        //     const createEmployee = await fetch('http://localhost:9000/api/v1/employees', {
        //         method: 'POST',
        //         body: JSON.stringify(employee),
        //         headers: {
        //             'Content-Type' : 'application/json'
        //         }
        //     })
        //     console.log(createEmployee, '<-createEmployee fetch');

        // } catch (err) {
        //     console.log(err, "err in addEmployee")
        //     return err
        // }
    }
    getEmployees = async () => {
        try {
            const resGetEmployees = await fetch('http://localhost:3000/api/v1/employees', {
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
        return (
            <div>
                <EmployeeList />
                <CreateEmployee />
            </div>
        )
    }
}

export default EmployeeContainer;

