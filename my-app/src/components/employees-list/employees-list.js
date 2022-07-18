import EmployeesListItem from "../eployees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete , onToggleProp }) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} //! Можна і так name={item.name} salary={item.salary} Можна і так
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        );
    }); 

    return (
        <ul className="app-list list-group">
            {elements}  
        </ul>
    );
}

export default EmployeesList;