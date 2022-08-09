import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Field, Form, Formik} from "formik";
import pc from './PerformanceChart.module.css'
import {updateCurDataChart, updatePrevDataChart} from "../../action/dataChart";
import dct from "./DataChartTable.module.css";
import PerformChartPrint from "./PerformanceChartPrint";
import PerfomanceChartAddingYear from "./PerfomanceChartAddingYear";
import {setPopupDisplay} from "../../redux/fileReducer";
import CommentPopup from "./CommentPopup";
import {getCurrentComment} from "../../action/comment";
import * as Yup from 'yup';

const DataChartAddForm = ({prevYearData, currentYearData}) => {
    const dispatch = useDispatch()
    const prevData = useSelector(state => state.dataChart.prevData)
    const curData = useSelector(state => state.dataChart.curData)
    const chartId = useSelector(state => state.dataChart.curData._id)
    const year = useSelector(state => state.dataChart.curData.year)
    const prevVolumeData = useSelector(state => state.dataChart.prevData.volumes)
    const prevHourData = useSelector(state => state.dataChart.prevData.hours)
    const curVolumeData = useSelector(state => state.dataChart.curData.volumes)
    const curHourData = useSelector(state => state.dataChart.curData.hours)
    const comment = useSelector(state => state.dataChart.comment)
    const [edit, setEdit] = useState(false)
    const role = useSelector(state => state.user.userRole)
    /*const validationSchema = Yup.object().shape({
        password: Yup.string().typeError('Должно быть строкой').required('Поле не может быть пустым'),
        email: Yup.string().email('Некорректный Email').required('Поле не может быть пустым')
    })*/

    useEffect(() => {
        dispatch(getCurrentComment(chartId, year, 'Jan'))
    }, [])

    const [prevYearJan, prevYearFeb, prevYearMar, prevYearApr, prevYearMay, prevYearJun, prevYearJul, prevYearAug, prevYearSep, prevYearOct, prevYearNov, prevYearDec] = prevYearData
    const [curYearJan, curYearFeb, curYearMar, curYearApr, curYearMay, curYearJun, curYearJul, curYearAug, curYearSep, curYearOct, curYearNov, curYearDec] = currentYearData

    function commentDisplay(e) {
        const month = e.target.id
        if (month !== 'title') {
            dispatch(getCurrentComment(chartId, year, month))
        }
    }

    function showCreateDirHandler(e) {
        const month = e.target.id
        if (month !== 'title') {
            dispatch(setPopupDisplay('flex'))
        }
    }

    return (
        <div>
            <div className={pc.area_vol_input}>
                {role == 'admin' &&
                <div className={pc.area_button}>
                    <button onClick={() => setEdit(true)}>Ред</button>
                </div>
                }
                <Formik
                    initialValues={{
                        prevVolJan: prevVolumeData.volJan,
                        prevVolFeb: prevVolumeData.volFeb,
                        prevVolMar: prevVolumeData.volMar,
                        prevVolApr: prevVolumeData.volApr,
                        prevVolMay: prevVolumeData.volMay,
                        prevVolJun: prevVolumeData.volJun,
                        prevVolJul: prevVolumeData.volJul,
                        prevVolAug: prevVolumeData.volAug,
                        prevVolSep: prevVolumeData.volSep,
                        prevVolOct: prevVolumeData.volOct,
                        prevVolNov: prevVolumeData.volNov,
                        prevVolDec: prevVolumeData.volDec,
                        prevHourJan: prevHourData.hourJan,
                        prevHourFeb: prevHourData.hourFeb,
                        prevHourMar: prevHourData.hourMar,
                        prevHourApr: prevHourData.hourApr,
                        prevHourMay: prevHourData.hourMay,
                        prevHourJun: prevHourData.hourJun,
                        prevHourJul: prevHourData.hourJul,
                        prevHourAug: prevHourData.hourAug,
                        prevHourSep: prevHourData.hourSep,
                        prevHourOct: prevHourData.hourOct,
                        prevHourNov: prevHourData.hourNov,
                        prevHourDec: prevHourData.hourDec,
                        curVolJan: curVolumeData.volJan,
                        curVolFeb: curVolumeData.volFeb,
                        curVolMar: curVolumeData.volMar,
                        curVolApr: curVolumeData.volApr,
                        curVolMay: curVolumeData.volMay,
                        curVolJun: curVolumeData.volJun,
                        curVolJul: curVolumeData.volJul,
                        curVolAug: curVolumeData.volAug,
                        curVolSep: curVolumeData.volSep,
                        curVolOct: curVolumeData.volOct,
                        curVolNov: curVolumeData.volNov,
                        curVolDec: curVolumeData.volDec,
                        curHourJan: curHourData.hourJan,
                        curHourFeb: curHourData.hourFeb,
                        curHourMar: curHourData.hourMar,
                        curHourApr: curHourData.hourApr,
                        curHourMay: curHourData.hourMay,
                        curHourJun: curHourData.hourJun,
                        curHourJul: curHourData.hourJul,
                        curHourAug: curHourData.hourAug,
                        curHourSep: curHourData.hourSep,
                        curHourOct: curHourData.hourOct,
                        curHourNov: curHourData.hourNov,
                        curHourDec: curHourData.hourDec,
                    }}
                    enableReinitialize
                    validateOnBlur
                    onSubmit={async (values, actions) => {
                        await setTimeout(() => {
                            dispatch(updatePrevDataChart(
                                prevData._id,
                                values.prevVolJan,
                                values.prevHourJan,
                                values.prevVolFeb,
                                values.prevHourFeb,
                                values.prevVolMar,
                                values.prevHourMar,
                                values.prevVolApr,
                                values.prevHourApr,
                                values.prevVolMay,
                                values.prevHourMay,
                                values.prevVolJun,
                                values.prevHourJun,
                                values.prevVolJul,
                                values.prevHourJul,
                                values.prevVolAug,
                                values.prevHourAug,
                                values.prevVolSep,
                                values.prevHourSep,
                                values.prevVolOct,
                                values.prevHourOct,
                                values.prevVolNov,
                                values.prevHourNov,
                                values.prevVolDec,
                                values.prevHourDec,
                            ))
                            dispatch(updateCurDataChart(
                                curData._id,
                                values.curVolJan,
                                values.curHourJan,
                                values.curVolFeb,
                                values.curHourFeb,
                                values.curVolMar,
                                values.curHourMar,
                                values.curVolApr,
                                values.curHourApr,
                                values.curVolMay,
                                values.curHourMay,
                                values.curVolJun,
                                values.curHourJun,
                                values.curVolJul,
                                values.curHourJul,
                                values.curVolAug,
                                values.curHourAug,
                                values.curVolSep,
                                values.curHourSep,
                                values.curVolOct,
                                values.curHourOct,
                                values.curVolNov,
                                values.curHourNov,
                                values.curVolDec,
                                values.curHourDec,
                            ))
                            actions.setSubmitting(false);
                            setEdit(false)
                        })
                    }}
                    //validationSchema={validationSchema}
                >
                    {({
                          values,
                          handleSubmit,
                          isSubmitting,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          isValid,
                          validateForm,
                          dirty
                      }) => (
                        <Form>
                            <div>
                                <table className={dct.table}>
                                    <tr>
                                        <th>Месяц</th>
                                        <th>Январь</th>
                                        <th>Февраль</th>
                                        <th>Март</th>
                                        <th>Апрель</th>
                                        <th>Май</th>
                                        <th>Июнь</th>
                                        <th>Июль</th>
                                        <th>Август</th>
                                        <th>Сентябрь</th>
                                        <th>Октябрь</th>
                                        <th>Ноябрь</th>
                                        <th>Декабрь</th>
                                    </tr>
                                    {/*volume prev year*/}
                                    <tr>
                                        <td>кг</td>
                                        <td>
                                            {!edit
                                                ? <div>{prevVolumeData.volJan}</div>
                                                : <div>
                                                    <Field id='prevVolJan' name={'prevVolJan'} type='number'
                                                           component='input' value={values.prevVolJan}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevVolumeData.volFeb}</div>
                                                : <div>
                                                    <Field id='prevVolFeb' name={'prevVolFeb'} type='number'
                                                           component='input' value={values.prevVolFeb}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevVolumeData.volMar}</div>
                                                : <div>
                                                    <Field id='prevVolMar' name={'prevVolMar'} type='number'
                                                           component='input' value={values.prevVolMar}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevVolumeData.volApr}</div>
                                                : <div>
                                                    <Field id='prevVolApr' name={'prevVolApr'} type='number'
                                                           component='input' value={values.prevVolApr}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevVolumeData.volMay}</div>
                                                : <div>
                                                    <Field id='prevVolMay' name={'prevVolMay'} type='number'
                                                           component='input' value={values.prevVolMay}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevVolumeData.volJun}</div>
                                                : <div>
                                                    <Field id='prevVolJun' name={'prevVolJun'} type='number'
                                                           component='input' value={values.prevVolJun}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevVolumeData.volJul}</div>
                                                : <div>
                                                    <Field id='prevVolJul' name={'prevVolJul'} type='number'
                                                           component='input' value={values.prevVolJul}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevVolumeData.volAug}</div>
                                                : <div>
                                                    <Field id='prevVolAug' name={'prevVolAug'} type='number'
                                                           component='input' value={values.prevVolAug}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevVolumeData.volSep}</div>
                                                : <div>
                                                    <Field id='prevVolSep' name={'prevVolSep'} type='number'
                                                           component='input' value={values.prevVolSep}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevVolumeData.volOct}</div>
                                                : <div>
                                                    <Field id='prevVolOct' name={'prevVolOct'} type='number'
                                                           component='input' value={values.prevVolOct}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevVolumeData.volNov}</div>
                                                : <div>
                                                    <Field id='prevVolNov' name={'prevVolNov'} type='number'
                                                           component='input' value={values.prevVolNov}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevVolumeData.volDec}</div>
                                                : <div>
                                                    <Field id='prevVolDec' name={'prevVolDec'} type='number'
                                                           component='input' value={values.prevVolDec}/>
                                                </div>
                                            }
                                        </td>
                                    </tr>
                                    {/*hours prev year*/}
                                    <tr>
                                        <td className={dct.one}>часов</td>
                                        <td>
                                            {!edit
                                                ? <div>{prevHourData.hourJan}</div>
                                                : <div>
                                                    <Field id='prevHourJan' name={'prevHourJan'} type='number'
                                                           component='input' value={values.prevHourJan}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevHourData.hourFeb}</div>
                                                : <div>
                                                    <Field id='prevHourFeb' name={'prevHourFeb'} type='number'
                                                           component='input' value={values.prevHourFeb}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevHourData.hourMar}</div>
                                                : <div>
                                                    <Field id='prevHourMar' name={'prevHourMar'} type='number'
                                                           component='input' value={values.prevHourMar}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevHourData.hourApr}</div>
                                                : <div>
                                                    <Field id='prevHourApr' name={'prevHourApr'} type='number'
                                                           component='input' value={values.prevHourApr}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevHourData.hourMay}</div>
                                                : <div>
                                                    <Field id='prevHourMay' name={'prevHourMay'} type='number'
                                                           component='input' value={values.prevHourMay}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevHourData.hourJun}</div>
                                                : <div>
                                                    <Field id='prevHourJun' name={'prevHourJun'} type='number'
                                                           component='input' value={values.prevHourJun}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevHourData.hourJul}</div>
                                                : <div>
                                                    <Field id='prevHourJul' name={'prevHourJul'} type='number'
                                                           component='input' value={values.prevHourJul}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevHourData.hourAug}</div>
                                                : <div>
                                                    <Field id='prevHourAug' name={'prevHourAug'} type='number'
                                                           component='input' value={values.prevHourAug}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevHourData.hourSep}</div>
                                                : <div>
                                                    <Field id='prevHourSep' name={'prevHourSep'} type='number'
                                                           component='input' value={values.prevHourSep}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevHourData.hourOct}</div>
                                                : <div>
                                                    <Field id='prevHourOct' name={'prevHourOct'} type='number'
                                                           component='input' value={values.prevHourOct}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevHourData.hourNov}</div>
                                                : <div>
                                                    <Field id='prevHourNov' name={'prevHourNov'} type='number'
                                                           component='input' value={values.prevHourNov}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{prevHourData.hourDec}</div>
                                                : <div>
                                                    <Field id='prevHourDec' name={'prevHourDec'} type='number'
                                                           component='input' value={values.prevHourDec}/>
                                                </div>
                                            }
                                        </td>
                                    </tr>
                                    {/*perform prev year*/}
                                    <tr className={dct.prev_data}>
                                        <td>кг/ч</td>
                                        <td>{prevYearJan}</td>
                                        <td>{prevYearFeb}</td>
                                        <td>{prevYearMar}</td>
                                        <td>{prevYearApr}</td>
                                        <td>{prevYearMay}</td>
                                        <td>{prevYearJun}</td>
                                        <td>{prevYearJul}</td>
                                        <td>{prevYearAug}</td>
                                        <td>{prevYearSep}</td>
                                        <td>{prevYearOct}</td>
                                        <td>{prevYearNov}</td>
                                        <td>{prevYearDec}</td>
                                    </tr>
                                    {/*volume current year*/}
                                    <tr>
                                        <td>кг</td>
                                        <td>
                                            {!edit
                                                ? <div>{curVolumeData.volJan}</div>
                                                : <div>
                                                    <Field id='curVolJan' name={'curVolJan'} type='number'
                                                           component='input'
                                                           value={values.curVolJan}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curVolumeData.volFeb}</div>
                                                : <div>
                                                    <Field id='curVolFeb' name={'curVolFeb'} type='number'
                                                           component='input'
                                                           value={values.curVolFeb}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curVolumeData.volMar}</div>
                                                : <div>
                                                    <Field id='curVolMar' name={'curVolMar'} type='number'
                                                           component='input'
                                                           value={values.curVolMar}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curVolumeData.volApr}</div>
                                                : <div>
                                                    <Field id='curVolApr' name={'curVolApr'} type='number'
                                                           component='input'
                                                           value={values.curVolApr}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curVolumeData.volMay}</div>
                                                : <div>
                                                    <Field id='curVolMay' name={'curVolMay'} type='number'
                                                           component='input'
                                                           value={values.curVolMay}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curVolumeData.volJun}</div>
                                                : <div>
                                                    <Field id='curVolJun' name={'curVolJun'} type='number'
                                                           component='input'
                                                           value={values.curVolJun}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curVolumeData.volJul}</div>
                                                : <div>
                                                    <Field id='curVolJul' name={'curVolJul'} type='number'
                                                           component='input'
                                                           value={values.curVolJul}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curVolumeData.volAug}</div>
                                                : <div>
                                                    <Field id='curVolAug' name={'curVolAug'} type='number'
                                                           component='input' value={values.curVolAug}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curVolumeData.volSep}</div>
                                                : <div>
                                                    <Field id='curVolSep' name={'curVolSep'} type='number'
                                                           component='input' value={values.curVolSep}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curVolumeData.volOct}</div>
                                                : <div>
                                                    <Field id='curVolOct' name={'curVolOct'} type='number'
                                                           component='input' value={values.curVolOct}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curVolumeData.volNov}</div>
                                                : <div>
                                                    <Field id='curVolNov' name={'curVolNov'} type='number'
                                                           component='input' value={values.curVolNov}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curVolumeData.volDec}</div>
                                                : <div>
                                                    <Field id='curVolDec' name={'curVolDec'} type='number'
                                                           component='input' value={values.curVolDec}/>
                                                </div>
                                            }
                                        </td>
                                    </tr>
                                    {/*hours current year*/}
                                    <tr>
                                        <td className={dct.one}>часов</td>
                                        <td>
                                            {!edit
                                                ? <div>{curHourData.hourJan}</div>
                                                : <div>
                                                    <Field id='curHourJan' name={'curHourJan'} type='number'
                                                           component='input' value={values.curHourJan}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curHourData.hourFeb}</div>
                                                : <div>
                                                    <Field id='curHourFeb' name={'curHourFeb'} type='number'
                                                           component='input' value={values.curHourFeb}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curHourData.hourMar}</div>
                                                : <div>
                                                    <Field id='curHourMar' name={'curHourMar'} type='number'
                                                           component='input' value={values.curHourMar}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curHourData.hourApr}</div>
                                                : <div>
                                                    <Field id='curHourApr' name={'curHourApr'} type='number'
                                                           component='input' value={values.curHourApr}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curHourData.hourMay}</div>
                                                : <div>
                                                    <Field id='curHourMay' name={'curHourMay'} type='number'
                                                           component='input' value={values.curHourMay}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curHourData.hourJun}</div>
                                                : <div>
                                                    <Field id='curHourJun' name={'curHourJun'} type='number'
                                                           component='input' value={values.curHourJun}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curHourData.hourJul}</div>
                                                : <div>
                                                    <Field id='curHourJul' name={'curHourJul'} type='number'
                                                           component='input' value={values.curHourJul}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curHourData.hourAug}</div>
                                                : <div>
                                                    <Field id='curHourAug' name={'curHourAug'} type='number'
                                                           component='input' value={values.curHourAug}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curHourData.hourSep}</div>
                                                : <div>
                                                    <Field id='curHourSep' name={'curHourSep'} type='number'
                                                           component='input' value={values.curHourSep}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curHourData.hourOct}</div>
                                                : <div>
                                                    <Field id='curHourOct' name={'curHourOct'} type='number'
                                                           component='input' value={values.curHourOct}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curHourData.hourNov}</div>
                                                : <div>
                                                    <Field id='curHourNov' name={'curHourNov'} type='number'
                                                           component='input' value={values.curHourNov}/>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!edit
                                                ? <div>{curHourData.hourDec}</div>
                                                : <div>
                                                    <Field id='curHourDec' name={'curHourDec'} type='number'
                                                           component='input' value={values.curHourDec}/>
                                                </div>
                                            }
                                        </td>
                                    </tr>
                                    {/*perform current year*/}
                                    <tr className={dct.cur_data} onDoubleClick={(e) => showCreateDirHandler(e)}
                                        onMouseEnter={(e) => commentDisplay(e)} onMouseLeave={e => e.preventDefault()}>
                                        <td id='title' title='Производительность'>кг/ч</td>
                                        <td id='Jan' title={comment.comment}>{curYearJan}</td>
                                        <td id='Feb' title={comment.comment}>{curYearFeb}</td>
                                        <td id='Mar' title={comment.comment}>{curYearMar}</td>
                                        <td id='Apr' title={comment.comment}>{curYearApr}</td>
                                        <td id='May' title={comment.comment}>{curYearMay}</td>
                                        <td id='Jun' title={comment.comment}>{curYearJun}</td>
                                        <td id='Jul' title={comment.comment}>{curYearJul}</td>
                                        <td id='Aug' title={comment.comment}>{curYearAug}</td>
                                        <td id='Sep' title={comment.comment}>{curYearSep}</td>
                                        <td id='Oct' title={comment.comment}>{curYearOct}</td>
                                        <td id='Nov' title={comment.comment}>{curYearNov}</td>
                                        <td id='Dec' title={comment.comment}>{curYearDec}</td>
                                    </tr>
                                </table>
                            </div>
                            <div>
                                <div className={pc.area_button_print}>
                                    <PerformChartPrint/>
                                </div>
                                {role == 'admin' &&
                                <div>
                                    <button type='submit' onClick={handleSubmit}>Ввод</button>
                                </div>
                                }
                            </div>
                        </Form>
                    )}
                </Formik>
                {role == 'admin' &&
                <div className={pc.area_button_add}>
                    <PerfomanceChartAddingYear/>
                </div>
                }
                <div>
                    <CommentPopup/>
                </div>
            </div>
        </div>
    );
};

export default DataChartAddForm;