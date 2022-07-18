import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            holderName: 'Як його звати?',
            holderSalary: "З/П в $?"
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const root = this.state.name === '' && this.state.salary.length >= 1,
              root1 = this.state.name.length < 3 && this.state.salary === '',
              root2 = this.state.name.length < 3 && this.state.salary === '0',
              root3 = this.state.name === '' && this.state.salary === '0',
              root4 = this.state.salary === '' && this.state.name.length >= 3,
              root5 = this.state.name.length >= 3 && this.state.salary === '0';

        if(root || root1 || root2 || root3 || root4 || root5){
            this.setState({
                name: '',
                salary: '',
                holderName: 'Мінімум 3 символи ?',
                holderSalary: 'Зарплата не може дорівнювати 0'
            })
        }else{
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: '',
                holderName: 'Як його звати ?',
                holderSalary: "З/П в $?"
            })
        }
    }

    render() {
        const {name, salary, holderName, holderSalary} = this.state;
        
        return (
            <div className="app-add-form">
                <h3>Додайте нового працівника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder={holderName}
                        name="name" 
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder={holderSalary}
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={this.onSubmit}>Додати</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;