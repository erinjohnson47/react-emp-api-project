import React, { Component } from 'react';
import CreateEmployee from '../CreateEmployee';
import EmployeeList from '../EmployeeList'
import EditEmployee from '../EditEmployee'


class EmployeeContainer extends Component {
    state = {
        employees: [],
        showEditModal: false,
        employeeToEdit: {
            _id: null,
            name: '',
            position: '',
            birthDate: '',
            department: '',
            annualSalary: ''
        }
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
    editEmployeeAndCloseModal = async (e) => {
        e.preventDefault();
        try {
            const editRequest = await fetch(`http://localhost:9000/api/v1/employees/${this.state.employeeToEdit._id}`, {
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify(this.state.movieToEdit),
                headers: {
                'Content-Type': 'application/json'
                }
            })

        } catch (err) {
            console.log(err, '<-err in catch closeAndEdit')
            return err
        }

    }
    handleFormChange = (e) => {
        console.log(e, '<-e in handleFormChange')
        this.setState({
            employeeToEdit: {
                ...this.state.employeeToEdit,
                [e.target.name]: e.target.value
            }
        })
    }
    showModal = (employee) => {
        console.log(employee, '<-empId in show modal')
        this.setState({
            showEditModal: !this.state.showEditModal,
            employeeToEdit: employee
        })
    }

    render() {
        console.log(this.state, '<-this.state in render')
        return (
            <div>
            <CreateEmployee addEmployee={this.createEmployee}/>
            <EmployeeList employees={this.state.employees} showModal={this.showModal}/>
            {this.state.showEditModal 
            ? <EditEmployee employeeToEdit={this.state.employeeToEdit} handleFormChange={this.handleFormChange}/>
            : null
            } 
            </div>
        )
    }
}

export default EmployeeContainer;

