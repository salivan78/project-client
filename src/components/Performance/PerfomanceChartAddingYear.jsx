import React, {useState} from 'react';
import {useParams} from "react-router";
import {useDispatch} from "react-redux";
import pc from "./PerformanceChart.module.css";
import {createYearPerformChart} from "../../action/dataChart";
import moment from "moment";

const PerfomanceChartAddingYear = () => {

    const dispatch = useDispatch()
    const [date, setDate] = useState('')
    const yearAdding = moment(date, 'YYYY-MM', true).format('YYYY')
    const isValid = moment(date, 'YYYY-MM').isValid()
    const {name} = useParams()

    const dateChange = e => {
        setDate(e.target.value)
    }

    function createHandler(e) {
        if (isValid == true) {
            dispatch(createYearPerformChart(
                name,
                yearAdding
            ))
        } else {
            e.preventDefault()
            e.stopPropagation()
            alert('Введите дату')
        }
    }

    return (
        <div className={pc.area_button_add}>
            <div>
                <input type='month' onChange={dateChange} value={date}/>
            </div>
            <div>
                <button onClick={(e) => createHandler(e)}>Добавить год</button>
            </div>
        </div>
    )
};

export default PerfomanceChartAddingYear;