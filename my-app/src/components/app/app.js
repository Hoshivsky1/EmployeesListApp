import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Maryan I.' , salary: 1500, id: 1},
                {name: 'Miha H.' , salary: 1900, id: 2},
                {name: 'Maxim H.' , salary: 2900, id: 3},
                {name: 'Lubomir H.', salary: 1500, id: 4},
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            //! 1 Cпосіб ===========================================
            // const index = data.findIndex(elem => elem.id === id)
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr =[...before, ...after];
            //!=====================================================

            return {
                data: data.filter(item => item.id !== id) //!2 Спобіб
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/> 
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;