import EmployeesListItem from "../eployees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete , }) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}/> //! Можна і так name={item.name} salary={item.salary} Можна і так
        );
    }); 

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;