import React from 'react';
import ft from "./Table.module.css";

const TablePenalties = (props) => {

    return (
        <table className={ft.table}>
            <thead>
            <tr>
                <th colSpan='6' className={ft.hsubtable}>ШТРАФЫ, ПЕНИ, СБОРЫ, ПРЕТЕНЗИИ ПОСТАВЩИКОВ, ПОКУПАТЕЛЕЙ</th>
            </tr>
            <tr>
                <th colSpan='2'>В том числе</th>
                <th>% от итого потери</th>
                <th>Причины потерь, рекомендации</th>
                <th>Корректирующие мероприятия</th>
                <th>Ответственный за выполнение корректирующих мероприятий по снижению потерь</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={ft.three}>Отделение</td>
                <td className={ft.four}>1000</td>
                <td className={ft.five}>10%</td>
                <td className={ft.six}>Причина</td>
                <td className={ft.seven}>Корректирующие мероприятия</td>
                <td className={ft.eight}>ФИО</td>
            </tr>
            </tbody>
        </table>
    )
}

export default TablePenalties;