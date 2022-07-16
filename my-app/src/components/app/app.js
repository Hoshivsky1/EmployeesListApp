import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'Maryan I.' , salary: 1500, increase: false, like: false, id: 1},
        {name: 'Miha H.' , salary: 1900, increase: false, like: false, id: 2},
        {name: 'Maxim H.' , salary: 2900, increase: false, like: false, id: 3},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/> 
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;