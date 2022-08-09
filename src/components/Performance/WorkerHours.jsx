import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import dct from "./DataChartTable.module.css";
import pc from "./PerformanceChart.module.css";
import {Field, Form, Formik} from "formik";
import AddingYear from "./AddingYear";
import moment from "moment";
import 'moment/locale/ru'
import l
    from "../Fdp/FdpYear/FdpMount/FdpContent/QualitySertificate/QualityCertificateTest/QualityCertificateList.module.css";
import d from "../disk/Disk.module.css";
import Loader from "../utils/Loader";
import {getHoursWorker, updateHoursWorker} from "../../action/workerHours";

const WorkerHours = () => {

    const dispatch = useDispatch()
    const currentYear = moment().year()
    const [year, setYear] = useState(currentYear)
    const loader = useSelector(state => state.app.loader)
    const [edit, setEdit] = useState(false)
    const departments = useSelector(state => state.dataChart.hoursWorker.nameRus)
    const hours = useSelector(state => state.dataChart.hoursWorker)
    const getDataProgress = useSelector(state => state.dataChart.getDataProgress)
    const years = useSelector(state => state.dataChart.yearsWorker)
    const role = useSelector(state => state.user.userRole)

    useEffect(() => {
        dispatch(getHoursWorker(year))
    }, [year])

    if (loader) {
        return (
            <div className={d.loader}>
                <Loader/>
            </div>
        )
    }

    if (!hours) {
        return <div className={l.not_found}>NOT {year} FOUND</div>
    }

    return (
        <div>
            <div className={pc.chart}>
                <h2>{departments}</h2>
            </div>
            <div className={pc.chart_select}>
                <select className={pc.chart_prev_select} value={year}
                        disabled={getDataProgress.some(y => y === hours.year)}
                        onChange={(e) => setYear(e.target.value)}>
                    {years.map((y) => (<option key={y._id} value={y.year}>{y.year}</option>))}
                </select>
            </div>
            <Formik
                initialValues={{
                    jan: hours.hoursWorkerJan,
                    feb: hours.hoursWorkerFeb,
                    mar: hours.hoursWorkerMar,
                    apr: hours.hoursWorkerApr,
                    may: hours.hoursWorkerMay,
                    jun: hours.hoursWorkerJun,
                    jul: hours.hoursWorkerJul,
                    aug: hours.hoursWorkerAug,
                    sep: hours.hoursWorkerSep,
                    oct: hours.hoursWorkerOct,
                    nov: hours.hoursWorkerNov,
                    dec: hours.hoursWorkerDec
                }}
                enableReinitialize
                validateOnBlur
                onSubmit={async (values, actions) => {
                    await setTimeout(() => {
                        dispatch(updateHoursWorker(hours._id,
                            values.jan,
                            values.feb,
                            values.mar,
                            values.apr,
                            values.may,
                            values.jun,
                            values.jul,
                            values.aug,
                            values.sep,
                            values.oct,
                            values.nov,
                            values.dec
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
                        <div className={pc.area_vol_input}>
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
                                <tr>
                                    <th>Часы</th>
                                    <td>
                                        {!edit
                                            ? <div>{hours.hoursWorkerJan}</div>
                                            : <div>
                                                <Field id='jan' name={'jan'} type='number'
                                                       component='input' value={values.jan}/>
                                            </div>
                                        }
                                    </td>
                                    <td>
                                        {!edit
                                            ? <div>{hours.hoursWorkerFeb}</div>
                                            : <div>
                                                <Field id='feb' name={'feb'} type='number'
                                                       component='input' value={values.feb}/>
                                            </div>
                                        }
                                    </td>
                                    <td>
                                        {!edit
                                            ? <div>{hours.hoursWorkerMar}</div>
                                            : <div>
                                                <Field id='mar' name={'mar'} type='number'
                                                       component='input' value={values.mar}/>
                                            </div>
                                        }
                                    </td>
                                    <td>
                                        {!edit
                                            ? <div>{hours.hoursWorkerApr}</div>
                                            : <div>
                                                <Field id='apr' name={'apr'} type='number'
                                                       component='input' value={values.apr}/>
                                            </div>
                                        }
                                    </td>
                                    <td>
                                        {!edit
                                            ? <div>{hours.hoursWorkerMay}</div>
                                            : <div>
                                                <Field id='may' name={'may'} type='number'
                                                       component='input' value={values.may}/>
                                            </div>
                                        }
                                    </td>
                                    <td>
                                        {!edit
                                            ? <div>{hours.hoursWorkerJun}</div>
                                            : <div>
                                                <Field id='jun' name={'jun'} type='number'
                                                       component='input' value={values.jun}/>
                                            </div>
                                        }
                                    </td>
                                    <td>
                                        {!edit
                                            ? <div>{hours.hoursWorkerJul}</div>
                                            : <div>
                                                <Field id='jul' name={'jul'} type='number'
                                                       component='input' value={values.jul}/>
                                            </div>
                                        }
                                    </td>
                                    <td>
                                        {!edit
                                            ? <div>{hours.hoursWorkerAug}</div>
                                            : <div>
                                                <Field id='aug' name={'aug'} type='number'
                                                       component='input' value={values.aug}/>
                                            </div>
                                        }
                                    </td>
                                    <td>
                                        {!edit
                                            ? <div>{hours.hoursWorkerSep}</div>
                                            : <div>
                                                <Field id='sep' name={'sep'} type='number'
                                                       component='input' value={values.sep}/>
                                            </div>
                                        }
                                    </td>
                                    <td>
                                        {!edit
                                            ? <div>{hours.hoursWorkerOct}</div>
                                            : <div>
                                                <Field id='oct' name={'oct'} type='number'
                                                       component='input' value={values.oct}/>
                                            </div>
                                        }
                                    </td>
                                    <td>
                                        {!edit
                                            ? <div>{hours.hoursWorkerNov}</div>
                                            : <div>
                                                <Field id='nov' name={'nov'} type='number'
                                                       component='input' value={values.nov}/>
                                            </div>
                                        }
                                    </td>
                                    <td>
                                        {!edit
                                            ? <div>{hours.hoursWorkerDec}</div>
                                            : <div>
                                                <Field id='dec' name={'dec'} type='number'
                                                       component='input' value={values.dec}/>
                                            </div>
                                        }
                                    </td>
                                </tr>
                            </table>
                        </div>
                        {role == 'admin' &&
                        <div className={pc.area_vol_input}>
                            <button type='submit' onClick={handleSubmit}>Ввод</button>
                        </div>
                        }
                    </Form>
                )}
            </Formik>
            {role == 'admin' &&
            <div className={pc.area_vol_input}>
                <button onClick={() => setEdit(true)}>Ред</button>
            </div>
            }
            {role == 'admin' &&
            <div className={pc.area_button_add}>
                <AddingYear/>
            </div>
            }
        </div>
    )
};

export default WorkerHours;