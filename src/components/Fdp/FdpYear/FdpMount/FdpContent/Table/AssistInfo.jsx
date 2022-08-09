import ft from './DataForTable.module.css'
import {useHistory, useParams} from "react-router";

const AssistInfo = (props) => {

    let param = useParams();
    let history = useHistory();

    return (
        <div>
            <h2>ОБРАЩЕНИЕ В ФОНД ВЗАИМОПОМОЩИ {param.idMount} {param.yearId}</h2>
            <div>
                <textarea>Обращение</textarea>
                <input value={'Сумма'}/>
            </div>
            <div>
                Голосовалка
            </div>
            <div>
                Решение
            </div>
            <div>
                <button onClick={history.goBack}>Назад</button>
            {/*<NavLink to='/fdp/summary/2021/06'>Назад</NavLink>*/}
            </div>
        </div>
    )
}

export default AssistInfo;