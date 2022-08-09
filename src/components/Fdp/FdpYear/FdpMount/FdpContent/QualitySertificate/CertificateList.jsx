import l from './QualityCertificateTest/QualityCertificateList.module.css'
import React, {useEffect, useState} from "react";
import textEdit from '../../../../../../assets/Text_edit_35243.png'
import saveBtn from '../../../../../../assets/save_btn.png'
import {useDispatch, useSelector} from "react-redux";
import {updateList} from "../../../../../../action/list";
import OnButton from "../../../../../utils/OnButton";
import OffButton from "../../../../../utils/OffButton";
import lc from "./ListCertificate.module.css";
import moment from "moment";
import 'moment/locale/ru'
import Input from "../../../../../utils/Input";

const CertificateList = () => {

    const dispatch = useDispatch()
    const doc = useSelector(state => state.listCertificate.doc)
    const [nameProduct, setNameProduct] = useState(doc.nameProduct)
    const [weight, setWeight] = useState(doc.weight)
    const [location, setLocation] = useState(doc.location)
    const [incongruity, setIncongruity] = useState(doc.incongruity)
    const [reason, setReason] = useState(doc.reason)
    const [usage, setUsage] = useState(doc.usage)
    const [department, setDepartment] = useState(doc.department)
    const [sum, setSum] = useState(doc.sum)
    const [article, setArticle] = useState(doc.article)
    const [nameGuilty, setNameGuilty] = useState(doc.nameGuilty)
    const [correction, setCorrection] = useState(doc.correction)
    const [nameCorrection, setNameCorrection] = useState(doc.nameCorrection)
    const [monthfdp, setMonthfdp] = useState(doc.monthfdp)
    const [editNameProduct, setEditNameProduct] = useState(false)
    const [editWeight, setEditWeight] = useState(false)
    const [editLocation, setEditLocation] = useState(false)
    const [editIncongruity, setEditIncongruity] = useState(false)
    const [editReason, setEditReason] = useState(false)
    const [editUsage, setEditUsage] = useState(false)
    const [editDepartment, setEditDepartment] = useState(false)
    const [editSum, setEditSum] = useState(false)
    const [editArticle, setEditArticle] = useState(false)
    const [editNameGuilty, setEditNameGuilty] = useState(false)
    const [editCorrection, setEditCorrection] = useState(false)
    const [editNameCorrection, setEditNameCorrection] = useState(false)
    const [editMonthfdp, setEditMonthfdp] = useState(false)
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        setNameProduct(doc.nameProduct);
    }, [doc.nameProduct])

    useEffect(() => {
        setWeight(doc.weight);
    }, [doc.weight])

    useEffect(() => {
        setLocation(doc.location);
    }, [doc.location])

    useEffect(() => {
        setIncongruity(doc.incongruity);
    }, [doc.incongruity])

    useEffect(() => {
        setReason(doc.reason);
    }, [doc.reason])

    useEffect(() => {
        setUsage(doc.usage);
    }, [doc.usage])

    useEffect(() => {
        setDepartment(doc.department);
    }, [doc.department])

    useEffect(() => {
        setSum(doc.sum);
    }, [doc.sum])

    useEffect(() => {
        setArticle(doc.article);
    }, [doc.article])

    useEffect(() => {
        setNameGuilty(doc.nameGuilty);
    }, [doc.nameGuilty])

    useEffect(() => {
        setCorrection(doc.correction);
    }, [doc.correction])

    useEffect(() => {
        setNameCorrection(doc.nameCorrection);
    }, [doc.nameCorrection])

    useEffect(() => {
        setMonthfdp(doc.monthfdp);
    }, [doc.monthfdp])

    if (!doc) {
        return <div className={l.not_found}>NOT FOUND</div>
    }

    const onCorrectionChange = (e) => {
        setCorrection(e.target.value)
    }

    const onMonthfdpChange = (e) => {
        setMonthfdp(e.target.value)
    }

    function saveList(e) {
        setEditNameProduct(false)
        setEditWeight(false)
        setEditLocation(false)
        setEditIncongruity(false)
        setEditReason(false)
        setEditUsage(false)
        setEditDepartment(false)
        setEditSum(false)
        setEditArticle(false)
        setEditNameGuilty(false)
        setEditCorrection(false)
        setEditNameCorrection(false)
        setEditMonthfdp(false)
        dispatch(updateList(doc._id,
            nameProduct,
            weight,
            location,
            incongruity,
            reason,
            usage,
            department,
            sum,
            article,
            nameGuilty,
            correction,
            nameCorrection,
            monthfdp
        ))
    }

    return (
        <div className={l.row}>
            <h2 className={l.head}>ЛИСТ АКТА БРАКА</h2>
            <div className={l.input_column}>
                <div>
                    <div className={l.a}>№ акта</div>
                    <div className={l.b}>{doc.name}</div>
                </div>

                <div>
                    <div className={l.a}>Дата акта</div>
                    <div className={l.c}>{moment(doc.date, 'YYYY-MM-DD').format('DD MMMM YYYY')}</div>
                </div>

                <div>
                    <OnButton name={'editNameProduct'} setValue={setEditNameProduct} className={l.edit_btn}><img src={textEdit}
                                                                                        title={"Редактировать"}/></OnButton>
                    {/*<button name={'editNameProduct'} onClick={() => setEdit(true)} className={l.edit_btn}><img src={textEdit}
                                                                                        title={"Редактировать"}/></button>*/}
                    {editNameProduct &&
                    <OffButton name={'editNameProduct'} onClick={saveList} className={l.saveNP_btn}><img
                        src={saveBtn}
                        title={'Сохранить'}/></OffButton>
                    }
                    <div className={l.a}>Наименование продукции</div>
                    {!editNameProduct
                        ? <div className={l.d}>{doc.nameProduct}</div>
                        :
                        <div onBlur={saveList}><Input name={'nameProduct'} autoFocus={true} setValue={setNameProduct} value={nameProduct}
                                                      type='text'/></div>
                    }
                </div>
                <div>
                    <OnButton name={'editWeight'} setValue={setEditWeight} className={l.edit_btn}><img src={textEdit}
                                                                                   title={"Редактировать"}/></OnButton>
                    {editWeight &&
                    <OffButton onClick={saveList} className={l.saveNP_btn}><img src={saveBtn}
                                                                                title={'Сохранить'}/></OffButton>
                    }
                    <div className={l.a}>Количество, кг</div>
                    {!editWeight
                        ? <div className={l.e}>{doc.weight} кг</div>
                        : <div><Input type='number' name={'weight'} autoFocus={true} setValue={setWeight} value={weight}/></div>
                    }
                </div>

                <div>
                    <OnButton setValue={setEditLocation} className={l.edit_btn}><img src={textEdit}
                                                                                     title={"Редактировать"}/></OnButton>
                    {editLocation &&
                    <OffButton onClick={saveList} className={l.saveNP_btn}><img src={saveBtn}
                                                                                title={'Сохранить'}/></OffButton>
                    }
                    <div className={l.a}>Место обнаружения</div>
                    {!editLocation
                        ? <div className={l.f}>{doc.location}</div>
                        : <div><Input name={'location'} autoFocus={true} setValue={setLocation} value={location}
                                      type='text'/></div>
                    }
                </div>

                <div>
                    <OnButton setValue={setEditIncongruity} className={l.edit_btn}><img src={textEdit}
                                                                                        title={"Редактировать"}/></OnButton>
                    {editIncongruity &&
                    <OffButton onClick={saveList} className={l.saveNP_btn}><img src={saveBtn}
                                                                                title={'Сохранить'}/></OffButton>
                    }
                    <div className={l.a}>Вид несоответствия</div>
                    {!editIncongruity
                        ? <div className={l.g}>{doc.incongruity}</div>
                        : <div><Input name={'incongruity'} autoFocus={true} setValue={setIncongruity} value={incongruity}
                                      type='text'/></div>
                    }
                </div>

                <div>
                    <OnButton setValue={setEditReason} className={l.edit_btn}><img src={textEdit}
                                                                                   title={"Редактировать"}/></OnButton>
                    {editReason &&
                    <OffButton onClick={saveList} className={l.saveNP_btn}><img src={saveBtn}
                                                                                title={'Сохранить'}/></OffButton>
                    }
                    <div className={l.a}>Причина</div>
                    {!editReason
                        ? <div className={l.h}>{doc.reason}</div>
                        : <div><Input name={'reason'} autoFocus={true} setValue={setReason} value={reason}
                                      type='text'/></div>
                    }
                </div>

                <div>
                    <OnButton setValue={setEditUsage} className={l.edit_btn}><img src={textEdit}
                                                                                  title={"Редактировать"}/></OnButton>
                    {editUsage &&
                    <OffButton onClick={saveList} className={l.saveNP_btn}><img src={saveBtn}
                                                                                title={'Сохранить'}/></OffButton>
                    }
                    <div className={l.a}>Направление продукции</div>
                    {!editUsage
                        ? <div className={l.i}>{doc.usage}</div>
                        : <div><Input name={'usage'} autoFocus={true} setValue={setUsage} value={usage}
                                      type='text'/></div>
                    }
                </div>

                <div>
                    <OnButton setValue={setEditDepartment} className={l.edit_btn}><img src={textEdit}
                                                                                       title={"Редактировать"}/></OnButton>
                    {editDepartment &&
                    <OffButton onClick={saveList} className={l.saveNP_btn}><img src={saveBtn}
                                                                                title={'Сохранить'}/></OffButton>
                    }
                    <div className={l.a}>Ответственное отделение</div>
                    {!editDepartment
                        ? <div className={l.j}>{doc.department}</div>
                        : <div><Input name={'department'} autoFocus={true} setValue={setDepartment} value={department}
                                      type='text'/></div>
                    }
                </div>

                <div>
                    <OnButton setValue={setEditSum} className={l.edit_btn}><img src={textEdit} title={"Редактировать"}/></OnButton>
                    {editSum &&
                    <OffButton onClick={saveList} className={l.saveNP_btn}><img src={saveBtn}
                                                                                title={'Сохранить'}/></OffButton>
                    }
                    <div className={l.a}>Сумма ущерба, руб</div>
                    {!editSum
                        ? <div className={l.k}>{doc.sum} руб</div>
                        : <div><Input name={'sum'} autoFocus={true} setValue={setSum} value={sum}
                                      type='text'/></div>
                    }
                </div>

                <div>
                    <OnButton setValue={setEditArticle} className={l.edit_btn}><img src={textEdit}
                                                                                    title={"Редактировать"}/></OnButton>
                    {editArticle &&
                    <OffButton onClick={saveList} className={l.saveNP_btn}><img src={saveBtn}
                                                                                title={'Сохранить'}/></OffButton>
                    }
                    <div className={l.a}>Статья списания</div>
                    {!editArticle
                        ? <div className={l.l}>{doc.article}</div>
                        : <div><Input name={'article'} autoFocus={true} setValue={setArticle} value={article}
                                      type='text'/></div>
                    }
                </div>

                <div>
                    <OnButton setValue={setEditNameGuilty} className={l.edit_btn}><img src={textEdit}
                                                                                       title={"Редактировать"}/></OnButton>
                    {editNameGuilty &&
                    <OffButton onClick={saveList} className={l.saveNP_btn}><img src={saveBtn}
                                                                                title={'Сохранить'}/></OffButton>
                    }
                    <div className={l.a}>ФИО ответственного за брак</div>
                    {!editNameGuilty
                        ? <div className={l.m}>{doc.nameGuilty}</div>
                        : <div><Input name={'nameGuilty'} autoFocus={true} setValue={setNameGuilty} value={nameGuilty}
                                      type='text'/></div>
                    }
                </div>

                <div>
                    <OnButton setValue={setEditCorrection} className={l.edit_btn}><img src={textEdit}
                                                                                       title={"Редактировать"}/></OnButton>
                    {editCorrection &&
                    <OffButton onClick={saveList} className={l.saveNP_btn}><img src={saveBtn}
                                                                                title={'Сохранить'}/></OffButton>
                    }
                    <div className={l.a}>Корректирующие мероприятия</div>
                    {!editCorrection
                        ? <div className={l.n}>{doc.correction}</div>
                        : <div><textarea name={'correction'} autoFocus={true} value={correction}
                                         onChange={onCorrectionChange} cols={70}
                                         rows={20}></textarea></div>
                    }
                </div>

                <div>
                    <OnButton setValue={setEditNameCorrection} className={l.edit_btn}><img src={textEdit}
                                                                                           title={"Редактировать"}/></OnButton>
                    {editNameCorrection &&
                    <OffButton onClick={saveList} className={l.saveNP_btn}><img src={saveBtn}
                                                                                title={'Сохранить'}/></OffButton>
                    }
                    <div className={l.a}>Ответственный за выполнение корректирующих мероприятий</div>
                    {!editNameCorrection
                        ? <div className={l.o}>{doc.nameCorrection}</div>
                        : <div><Input name={'nameCorrection'} autoFocus={true} setValue={setNameCorrection} value={nameCorrection}
                                      type='text'/></div>
                    }
                </div>
            </div>
            <div>
                <OnButton setValue={setEditMonthfdp} className={l.edit_btn}><img src={textEdit}
                                                                                 title={"Редактировать"}/></OnButton>
                {editMonthfdp &&
                <OffButton onClick={saveList} className={l.saveNP_btn}><img src={saveBtn}
                                                                            title={'Сохранить'}/></OffButton>
                }
                <div className={l.a}>Отразить в месяц</div>
                {!editMonthfdp
                    ? <div className={l.o}>{moment(doc.monthfdp, 'YYYY-MM-DD').format('MMMM YYYY')}</div>
                    : <div>
                        <input onBlur={() => {
                            saveList()
                        }} name={'monthfdp'} className={lc.inpt} type='month' onChange={onMonthfdpChange} value={monthfdp}
                               placeholder='Добавить в месяц...'/>
                    </div>
                }
            </div>
            <div>
                {doc.added === false
                    ? <div className={l.noAdding}>НЕ ДОБАВЛЕНО</div>
                    : <div className={l.adding}>ДОБАВЛЕНО</div>}
            </div>
        </div>
    )
}

export default CertificateList;