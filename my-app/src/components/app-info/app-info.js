import './app-info.css';   


const AppInfo = ({employees, increases}) => {
    return (
        <div className="app-info">
            <h1>Облік працівників в компанії N</h1>
            <h2>Загальне число працівників: {employees} </h2>
            <h2>Премію отримають: {increases} </h2>
        </div>
    );
}

export default AppInfo;