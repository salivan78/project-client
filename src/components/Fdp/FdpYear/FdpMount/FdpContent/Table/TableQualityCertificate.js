import React from 'react';
import ft from "./Table.module.css";

const TableQualityCertificate = (props) => {

    return (
        <table className={ft.table}>
            <thead>
            {/*<tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-mail</th>
            <th>Phone</th>
        </tr>*/}

            <tr>
                {/*<td className={ft.one}>Производство</td>*/}
                <th colSpan='6' className={ft.hsubtable}>НАРУШЕНИЕ ТЕХНОЛОГИЧЕСКОЙ ДИСЦИПЛИНЫ</th>
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
            {/*{ props.data.map(item =>(
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
            </tr>
        ))}*/}
            {/*<tr>
                <td>item.id</td>
                <td>item.firstName</td>
                <td>item.lastName</td>
                <td>item.email</td>
                <td>item.phone</td>
            </tr>*/}

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

export default TableQualityCertificate;