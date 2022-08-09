import {NavLink} from "react-router-dom";
const FullYear = (props) => {

    return (
        <div>
            <div>
                {props.state.calendar.years.map((y) => (
                    <li key={y.id}>
                        <NavLink to={`/fdp/summary/${y.yearId}`}>{y.yearId}</NavLink>
                    </li>
                ))}
            </div>
            <div>Контент год</div>
        </div>
    )
}

export default FullYear;