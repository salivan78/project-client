import React, {useEffect, useState} from "react";
import 'chart.js/auto';
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from "chart.js";
import {Bar} from 'react-chartjs-2';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import pc from './PerformanceChart.module.css'
import moment from "moment";
import d from "../disk/Disk.module.css";
import Loader from "../utils/Loader";
import DataChartAddFormTest from "./DataChartAddFormTest";
import {getDepartmenttest} from "../../action/dataCharttest";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const PerformChartTest = () => {

    const dispatch = useDispatch()
    const {name} = useParams()
    const loader = useSelector(state => state.app.loader)
    // //const departments = useSelector(state => state.dataChart.departments)
    const currentYear = moment().year()
    const [prevYear, setPrevYear] = useState(currentYear - 1)
    const [curYear, setCurYear] = useState(currentYear)
    const years = useSelector(state => state.dataChartTest.years)
    const prevVolumeData = useSelector(state => state.dataChartTest.prevData.volumes)
    const prevHourData = useSelector(state => state.dataChartTest.prevData.hours)
    const curVolumeData = useSelector(state => state.dataChartTest.curData.volumes)
    const curHourData = useSelector(state => state.dataChartTest.curData.hours)

    useEffect(() => {
        dispatch(getDepartmenttest(name, prevYear, curYear))
    }, [name, prevYear, curYear])

    if (loader) {
        return (
            <div className={d.loader}>
                <Loader/>
            </div>
        )
    }

    const prevYearJan = Math.ceil(prevVolumeData.volJan / prevHourData.hourJan)
    const prevYearFeb = Math.ceil(prevVolumeData.volFeb / prevHourData.hourFeb)
    const prevYearMar = Math.ceil(prevVolumeData.volMar / prevHourData.hourMar)
    const prevYearApr = Math.ceil(prevVolumeData.volApr / prevHourData.hourApr)
    const prevYearMay = Math.ceil(prevVolumeData.volMay / prevHourData.hourMay)
    const prevYearJun = Math.ceil(prevVolumeData.volJun / prevHourData.hourJun)
    const prevYearJul = Math.ceil(prevVolumeData.volJul / prevHourData.hourJul)
    const prevYearAug = Math.ceil(prevVolumeData.volAug / prevHourData.hourAug)
    const prevYearSep = Math.ceil(prevVolumeData.volSep / prevHourData.hourSep)
    const prevYearOct = Math.ceil(prevVolumeData.volOct / prevHourData.hourOct)
    const prevYearNov = Math.ceil(prevVolumeData.volNov / prevHourData.hourNov)
    const prevYearDec = Math.ceil(prevVolumeData.volDec / prevHourData.hourDec)

    const curYearJan = Math.ceil(curVolumeData.volJan / curHourData.hourJan)
    const curYearFeb = Math.ceil(curVolumeData.volFeb / curHourData.hourFeb)
    const curYearMar = Math.ceil(curVolumeData.volMar / curHourData.hourMar)
    const curYearApr = Math.ceil(curVolumeData.volApr / curHourData.hourApr)
    const curYearMay = Math.ceil(curVolumeData.volMay / curHourData.hourMay)
    const curYearJun = Math.ceil(curVolumeData.volJun / curHourData.hourJun)
    const curYearJul = Math.ceil(curVolumeData.volJul / curHourData.hourJul)
    const curYearAug = Math.ceil(curVolumeData.volAug / curHourData.hourAug)
    const curYearSep = Math.ceil(curVolumeData.volSep / curHourData.hourSep)
    const curYearOct = Math.ceil(curVolumeData.volOct / curHourData.hourOct)
    const curYearNov = Math.ceil(curVolumeData.volNov / curHourData.hourNov)
    const curYearDec = Math.ceil(curVolumeData.volDec / curHourData.hourDec)

    const prevYearData = {
        label: `Производительность ${prevYear} года, кг/ч`,
        data: [prevYearJan,
            prevYearFeb,
            prevYearMar,
            prevYearApr,
            prevYearMay,
            prevYearJun,
            prevYearJul,
            prevYearAug,
            prevYearSep,
            prevYearOct,
            prevYearNov,
            prevYearDec
        ],
        backgroundColor: [
            'rgba(0, 255, 0, 0.8)'
        ],
        borderColor: [
            'rgba(0, 128, 0, 1)'
        ],
        borderWidth: 2,
        borderSkipped: 'start'
    }

    const currentYearData = {
        label: `Производительность ${curYear} года, кг/ч`,
        data: [curYearJan,
            curYearFeb,
            curYearMar,
            curYearApr,
            curYearMay,
            curYearJun,
            curYearJul,
            curYearAug,
            curYearSep,
            curYearOct,
            curYearNov,
            curYearDec
        ],
        backgroundColor: [
            'rgba(255, 255, 0, 0.9)'
        ],
        borderColor: [
            'rgba(244, 196, 48, 1)'
        ],
        borderWidth: 2
    }

    const performData = {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        datasets: [prevYearData, currentYearData]
    }

    const options = {
        maintainAspectRatio: false,
        barPercentage: 1,
        categoryPercentage: 0.95,
        plugins: {
            legend: {
                labels: {
                    boxWidth: 20
                }
            }
        },
        scales: {
            y: [{
                beginAtZero: true
            }],
        }
    }

    return (
        <div className={pc.chart}>
            <h2>{name}</h2>
             <div>
                 <Bar
                    data={performData}
                    options={options}
                    height={300}
                    width={1200}
                />
            </div>
            <div className={pc.chart_select}>
                <select className={pc.chart_prev_select} value={prevYear} onChange={(e) => setPrevYear(e.target.value)}>
                    {years.map((y) => (<option key={y._id} value={y.year}>{y.year}</option>))}
                </select>
                <select className={pc.chart_cur_select} value={curYear} onChange={(e) => setCurYear(e.target.value)}>
                    {years.map((y) => (<option key={y._id} value={y.year}>{y.year}</option>))}
                </select>
            </div>
            <div>
                <DataChartAddFormTest prevYearData={prevYearData.data}
                                  currentYearData={currentYearData.data}/>
            </div>
        </div>
    )
}

export default PerformChartTest;