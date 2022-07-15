import EmployeesListItem from "../eployees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        return (
            <EmployeesListItem  {...item}/> //! Можна і так name={item.name} salary={item.salary} Можна і так
        );
    });

    console.log(elements);

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;