import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            styles: {border: `1px solid #CED4DA`},
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
        if(this.state.name.length < 3 || !this.state.salary){
            this.setState({
                name: '',
                salary: '',
                styles: {
                    border: `2px solid red`,
                    boxShadow: `0px 0px 3px red`,
                },
                holderName: 'Мінімум 3 символи ?',
                holderSalary: 'Зарплата не може дорівнювати 0'
            })
        }else{
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: '',
                styles: {border: `1px solid #CED4DA`},
                holderName: 'Як його звати ?',
                holderSalary: "З/П в $?"
            })
        }
    }

    render() {
        const {name, salary, holderName, holderSalary, styles} = this.state;
        
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
                        onChange={this.onValueChange}
                        style={styles}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder={holderSalary}
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}
                        style={styles}/>
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={this.onSubmit}>Додати</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;