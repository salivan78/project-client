import React, {useEffect, useState} from "react";
import 'chart.js/auto';
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from "chart.js";
import {Bar} from 'react-chartjs-2';
import {useDispatch, useSelector} from "react-redux";
import {getDepartment} from "../../action/dataChart";
import {useHistory, useLocation, useParams, useRouteMatch} from "react-router";
import DataChartAddForm from "./DataChartAddForm";
import pc from './PerformanceChart.module.css'
import l
    from "../Fdp/FdpYear/FdpMount/FdpContent/QualitySertificate/QualityCertificateTest/QualityCertificateList.module.css";
import moment from "moment";
import d from "../disk/Disk.module.css";
import Loader from "../utils/Loader";
import {getChartUSO} from "../../action/chartUSO";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const PerformChartUSO = () => {

    const dispatch = useDispatch()
    const loader = useSelector(state => state.app.loader)
    const departments = useSelector(state => state.dataChart.departments)
    const currentYear = moment().year()
    const [prevYear, setPrevYear] = useState(currentYear - 1)
    const [curYear, setCurYear] = useState(currentYear)
    const years = useSelector(state => state.dataChart.years)
    const prevVolumeData = useSelector(state => state.dataChart.prevData.volumes)
    const prevHourData = useSelector(state => state.dataChart.prevData.hours)
    const curVolumeData = useSelector(state => state.dataChart.curData.volumes)
    const curHourData = useSelector(state => state.dataChart.curData.hours)

    useEffect(() => {
        dispatch(getChartUSO(prevYear, curYear))
    }, [prevYear, curYear])

    if (loader) {
        return (
            <div className={d.loader}>
                <Loader/>
            </div>
        )
    }

    if (!prevHourData) {
        return <div className={l.not_found}>Нет данных для {prevYear} года</div>
    }
    if (!curHourData) {
        return <div className={l.not_found}>Нет данных для {curYear} года</div>
    }

    const prevYearJan = Math.ceil(prevVolumeData.volJan / prevHourData.hourJan) || 0
    const prevYearFeb = Math.ceil(prevVolumeData.volFeb / prevHourData.hourFeb) || 0
    const prevYearMar = Math.ceil(prevVolumeData.volMar / prevHourData.hourMar) || 0
    const prevYearApr = Math.ceil(prevVolumeData.volApr / prevHourData.hourApr) || 0
    const prevYearMay = Math.ceil(prevVolumeData.volMay / prevHourData.hourMay) || 0
    const prevYearJun = Math.ceil(prevVolumeData.volJun / prevHourData.hourJun) || 0
    const prevYearJul = Math.ceil(prevVolumeData.volJul / prevHourData.hourJul) || 0
    const prevYearAug = Math.ceil(prevVolumeData.volAug / prevHourData.hourAug) || 0
    const prevYearSep = Math.ceil(prevVolumeData.volSep / prevHourData.hourSep) || 0
    const prevYearOct = Math.ceil(prevVolumeData.volOct / prevHourData.hourOct) || 0
    const prevYearNov = Math.ceil(prevVolumeData.volNov / prevHourData.hourNov) || 0
    const prevYearDec = Math.ceil(prevVolumeData.volDec / prevHourData.hourDec) || 0

    const curYearJan = Math.ceil(curVolumeData.volJan / curHourData.hourJan) || 0
    const curYearFeb = Math.ceil(curVolumeData.volFeb / curHourData.hourFeb) || 0
    const curYearMar = Math.ceil(curVolumeData.volMar / curHourData.hourMar) || 0
    const curYearApr = Math.ceil(curVolumeData.volApr / curHourData.hourApr) || 0
    const curYearMay = Math.ceil(curVolumeData.volMay / curHourData.hourMay) || 0
    const curYearJun = Math.ceil(curVolumeData.volJun / curHourData.hourJun) || 0
    const curYearJul = Math.ceil(curVolumeData.volJul / curHourData.hourJul) || 0
    const curYearAug = Math.ceil(curVolumeData.volAug / curHourData.hourAug) || 0
    const curYearSep = Math.ceil(curVolumeData.volSep / curHourData.hourSep) || 0
    const curYearOct = Math.ceil(curVolumeData.volOct / curHourData.hourOct) || 0
    const curYearNov = Math.ceil(curVolumeData.volNov / curHourData.hourNov) || 0
    const curYearDec = Math.ceil(curVolumeData.volDec / curHourData.hourDec) || 0

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
            'rgba(0, 128, 0, 0.5)'
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
            'rgba(244, 196, 48, 0.5)'
            // backgroundColors.blue
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
            <h2>{departments}</h2>
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
                <DataChartAddForm prevYearData={prevYearData.data}
                                  currentYearData={currentYearData.data}/>
            </div>
        </div>
    )
}

export default PerformChartUSO;