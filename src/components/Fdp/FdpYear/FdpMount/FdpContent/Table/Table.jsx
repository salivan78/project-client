import ft from "./Table.module.css"

const Table = (props) => {

    /*let fdpBlocks = props.state.fdpBlock
        .map((m) => (<th>{m.name}</th>));

    return (
        <div>
            {fdpBlocks}
        </div>
    )*/
    return (
        <div>
            <h2>Результат по ФДП за + ${props.mount} + ИЮНЬ 2021 г.</h2>
            <div>Выручка</div>
            <div>Сколько могли бы получить ФДП (1,3% от Выручки), руб.</div>
            <div>Фонд оплаты труда без учета отпускных, рац. предложений и ФСС, ДОУ, аренды (вкл. НДФЛ)</div>
            <div>Сколько могли бы получить ФДП (1,3% от Выручки), %</div>
            <div>Фактическая сумма ФДП за минусом потерь, руб.</div>
            <div>Фактический процент ФДП за минусом потерь,%</div>
            <div>Фактические потери за месяц+ фонд взаимопомощи, руб.</div>
            <div>Фонд взаимопомощи</div>
            <table className={ft.table}>
                <tr>
                    <th colspan='4'>В том числе</th>
                    <th>% от итого потери</th>
                    <th>Причины потерь, рекомендации</th>
                    <th>Корректирующие мероприятия</th>
                    <th>Ответственный за выполнение корректирующих мероприятий по снижению потерь</th>
                </tr>
                <tr>
                    <td className={ft.one}>Производство</td>
                    <td className={ft.two}>Нарушение технологической дисциплины</td>
                    <td className={ft.three}>Отделение</td>
                    <td className={ft.four}>1000</td>
                    <td className={ft.five}>10%</td>
                    <td className={ft.six}>Причина</td>
                    <td className={ft.seven}>Корректирующие мероприятия</td>
                    <td className={ft.eight}>ФИО</td>
                </tr>
            </table>
        </div>
    )
}

export default Table;