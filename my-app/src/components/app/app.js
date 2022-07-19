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
                {name: 'Maryan I.' , salary: 500, increase: false, like:true, id: 1},
                {name: 'Miha H.' , salary: 900, increase: false, like:false, id: 2},
                {name: 'Maxim H.' , salary: 2900, increase: true, like:false, id: 3},
                {name: 'Lubomir H.', salary: 1500, increase: false, like:false, id: 4},
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 5;
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
        if(name.value === "" && salary.value === "") {
            name.placeholder = "Мін. символів 3"
        } else {
            const newItem = {
                name, 
                salary,
                increase: false,
                rise: false,
                id: this.maxId++
            }
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            });
        } 
    }
    
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map  (item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item; 
            })
        }))
    }

    searchEmp = (items, term) => {
        if(term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    //! filter
    filterPost = (items, filter) => {
        switch(filter) {
            case 'rise':
                return items.filter(item => item.like === true);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            case 'increase':
                return items.filter(item => item.increase === true);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo employees={employees} increases={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/> 
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;