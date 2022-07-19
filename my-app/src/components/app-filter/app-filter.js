import './app-filter.css';


const AppFilter = (props) => {
    const buttonData = [
        {name: 'all', label:'Всі правцівники'},
        {name: 'rise', label:'На повишення'},
        {name: 'moreThen1000', label:'З/П більше 1000$'},
        {name: 'increase', label:'Премія'},
    ];

    const buttons = buttonData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'

        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}

            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;