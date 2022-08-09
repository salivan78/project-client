import l from './newList.module.css'
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import useInput from "../../../../../utils/useInput";
import {createList} from "../../../../../../action/list";
import {useHistory} from "react-router-dom";

const NewList = () => {

    const dispatch = useDispatch()
    const name = useInput('')
    const date = useInput('')
    const nameProduct = useInput('')
    const weight = useInput('')
    const location = useInput('')
    const incongruity = useInput('')
    const reason = useInput('')
    const usage = useInput('')
    const department = useInput('')
    const sum = useInput('')
    const article = useInput('')
    const nameGuilty = useInput('')
    const [correction, setCorrection] = useState('')
    const nameCorrection = useInput('')

    let history = useHistory()

    const newDate = new Date()

    const onCorrectionChange = (e) => {
        setCorrection(e.target.value)
    }

    function addList(evt) {
        if (name.value !== '') {
            history.push('/fdp/listsCertificates')
            dispatch(createList(
                name.value,
                date.value || newDate,
                nameProduct.value,
                weight.value,
                location.value,
                incongruity.value,
                reason.value,
                usage.value,
                department.value,
                sum.value,
                article.value,
                nameGuilty.value,
                correction,
                nameCorrection.value
            ))
        } else {
            evt.preventDefault()
            alert('Введите номер')
        }
    }

    return (
        <div>
            <div className={l.row}>
                <h2 className={l.head}>НОВЫЙ ЛИСТ АКТА БРАКА</h2>
                <div className={l.input_column}>
                    <div>
                        <div>
                            <div className={l.a}>№ акта</div>
                            <input type='number' placeholder='№ акта...' value={name} {...name}/>
                        </div>
                        <div>
                            <div className={l.a}>Дата акта</div>
                            <input type='date' placeholder='Дата акта...' value={newDate} {...date}/>
                        </div>
                        <div>
                            <div className={l.a}>Наименование продукции</div>
                            <input type='text' placeholder='Наименование продукции...' value={nameProduct}
                                   {...nameProduct}/>
                        </div>
                        <div>
                            <div className={l.a}>Количество, кг</div>
                            <input type='number' placeholder='Количество...' value={weight}
                                   {...weight}/>
                        </div>
                        <div>
                            <div className={l.a}>Место обнаружения</div>
                            <input type='text' placeholder='Место обнаружения...' value={location}
                                   {...location}/>
                        </div>
                        <div>
                            <div className={l.a}>Вид несоответствия</div>
                            <input type='text' placeholder='Вид несоответствия...' value={incongruity}
                                   {...incongruity}/>
                        </div>
                        <div>
                            <div className={l.a}>Причина</div>
                            <input type='text' placeholder='Причина...' value={reason} {...reason}/>
                        </div>
                        <div>
                            <div className={l.a}>Направление продукции</div>
                            <input type='text' placeholder='Направление продукции...' value={usage}
                                   {...usage}/>
                        </div>
                        <div>
                            <div className={l.a}>Статья списания</div>
                            <input type='text' placeholder='Статья списания...' value={article}
                                   {...article}/>
                        </div>
                        <div>
                            <div className={l.a}>ФИО ответственного за брак</div>
                            <input type='text' placeholder='ФИО ответственного...' value={nameGuilty}
                                   {...nameGuilty}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className={l.a}>Сумма ущерба, руб</div>
                            <input type='number' placeholder='Сумма ущерба, руб...' value={sum}
                                   {...sum}/>
                        </div>
                        <div>
                            <div className={l.a}>Ответственное отделение</div>
                            <input type='text' placeholder='Ответственное отделение...' value={department}
                                   {...department}/>
                        </div>
                        <div>
                            <div className={l.a}>Ответственный за выполнение корректирующих мероприятий</div>
                            <input type='text' placeholder='Ответственный...'
                                   value={nameCorrection} {...nameCorrection}/>
                        </div>
                        <div>
                            <div className={l.a}>Корректирующие мероприятия</div>
                            <textarea type='text' value={correction} onChange={onCorrectionChange}
                                      placeholder='Корректирующие мероприятия...' cols={70}
                                      rows={20}></textarea>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={addList} className={l.green}>Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default NewList;