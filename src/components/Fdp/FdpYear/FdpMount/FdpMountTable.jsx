import f from './FdpMount.module.css'
import TableQualityCertificate from "./FdpContent/Table/TableQualityCertificate";
import TableInfoHead from "./FdpContent/Table/TableInfoHead";
import TableMaxExpense from "./FdpContent/Table/TableMaxExpense";
import TableProductionDefect from "./FdpContent/Table/TableProductionDefect";
import TableWeightDifferences from "./FdpContent/Table/TableWeightDifferences";
import TableProductionLosses from "./FdpContent/Table/TableProductionLosses";
import TableSpicesLoss from "./FdpContent/Table/TableSpicesLoss";
import TableShortage from "./FdpContent/Table/TableShortage";
import TablePenalties from "./FdpContent/Table/TablePenalties";
import TableWarehousesLosses from "./FdpContent/Table/TableWarehousesLosses";
import {useHistory, useLocation, useParams, useRouteMatch} from "react-router";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const FdpMountTable = (props) => {

    let {url} = useRouteMatch();
    const isAuth = useSelector(state => state.user.isAuth)
    const mounts = useSelector(state => state.listsCertificatePage.mounts)

    let param = useParams();
    console.log(param);
    let match = useRouteMatch();
    console.log(match);
    let history = useHistory();
    console.log(history);
    let location = useLocation();
    console.log(location);
    console.log(props.state.calendar.mounts);


    return (
        <div>
            {/*{props.state.calendar.mounts.map((m) => (*/}
            <div className={f.table}>
                {isAuth &&
                    <div className={f.datalink}>
                    <NavLink to={`${url}/dataTable`}>Свод данных</NavLink>
                </div>
                }
                <div className={f.datalink}>
                    <NavLink to={`${url}/assist`}>Обращение в ФВП</NavLink>
                </div>
                <div>
                    <h2>Результат по ФДП за {param.idMount} {param.yearId} г.</h2>
                </div>
                {/*<Table state={props.state}/>*/}
                <TableInfoHead/>
                <TableQualityCertificate state={props.state}/>
                <TableMaxExpense state={props.state}/>
                <TableProductionDefect state={props.state}/>
                <TableWeightDifferences state={props.state}/>
                <TableProductionLosses state={props.state}/>
                <TableSpicesLoss state={props.state}/>
                <TableShortage state={props.state}/>
                <TablePenalties state={props.state}/>
                <TableWarehousesLosses state={props.state}/>
                {/*<QualityCertificate state={props.state}/>*/}
                <div>
                    ИТОГО ФОНД ДОПОЛНИТЕЛЬНОГО ПРЕМИРОВАНИЯ К РАСПРЕДЕЛЕНИЮ
                </div>
                <div>
                    ИТОГО % К ФОТ ДЛЯ ПРОПОРЦИОНАЛЬНОГО РАСПРЕДЕЛЕНИЯ СУММЫ СОГЛАСНО ФАКТИЧЕСКИ ОТРАБОТАННОМУ ВРЕМЕНИ
                    16% ФАКТИЧЕСКИЙ ФДП
                </div>
            </div>
            {/*))}*/}
        </div>
    )
}

export default FdpMountTable;