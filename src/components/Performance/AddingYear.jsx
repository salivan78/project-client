import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import pc from "./PerformanceChart.module.css";
import moment from "moment";
import {createHoursWorker} from "../../action/workerHours";

const AddingYear = () => {

    const dispatch = useDispatch()
    const [date, setDate] = useState('')
    const yearAdding = moment(date, 'YYYY-MM', true).format('YYYY')
    const isValid = moment(date, 'YYYY-MM').isValid()

    const dateChange = e => {
        setDate(e.target.value)
    }

    function createHandler(e) {
        if (isValid == true) {
            //history.push('/performance/worker')
            dispatch(createHoursWorker(
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
            <input type='month' onChange={dateChange} value={date}/>
            <button onClick={(e) => createHandler(e)}>Добавить год</button>
        </div>
    )
};

export default AddingYear;