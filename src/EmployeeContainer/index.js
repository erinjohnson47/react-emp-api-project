import React, { Component } from 'react';

class EmployeeContainer extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
        this.getEmps();
    }

    getEmps = async () => {
        try {
            const resGetEmps = await fetch('http://localhost:3000/api/v1/employees', {
                method: 'GET'
            })
            console.log(resGetEmps, '<-resGetEmps')
            const empsResJSON = await resGetEmps.json();
            console.log(empsResJSON)
        } catch (err) {
            console.log(err, 'getEmps error')
            return err
        }
    }
    render() {
        return <h1>hello</h1>
    }
}

export default EmployeeContainer;

