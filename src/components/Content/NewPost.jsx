import {Field, Form, Formik} from "formik";
import React, {useState} from "react";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import p from "./NewPost.module.css";
//import img from "../../images/wood-miaso-kolbasa-bekon-sous-spetsii-khleb-narezka-assorti.jpg";
import defaultImage from "../../assets/image_icon.png"
import {createNews} from "../../action/news";
import {useHistory} from "react-router-dom";

const NewPost = () => {

    const now = moment().format("DD MMM YYYY H:mm")
    const dispatch = useDispatch()
    const [editHeading, setEditHeading] = useState(false)
    const [editText, setEditText] = useState(false)
    const history = useHistory()

    function handleCancel() {
        history.push('/homepage')
    }

    return (
        <div className={p.post_item}>
            <div className={p.image} onDoubleClick={() => alert('DOWNLOAD')}
                 title={"Для загрузки изображения щелкните два раза"}>
                <img src={defaultImage}/>
            </div>
            <div className={p.post_date}>
                {now}
            </div>
            <Formik
                initialValues={{
                    //date: now,
                    heading: '',
                    textField: ''
                }}
                enableReinitialize
                validateOnBlur
                onSubmit={async (values, actions) => {
                    await setTimeout(() => {
                        dispatch(createNews(values.heading, values.textField))
                        //alert(values.heading)
                        actions.setSubmitting(false);
                        actions.resetForm({
                            values: {
                                heading: '',
                                textField: ''
                            }
                        });
                        history.push('/homepage')
                    })
                }}
            >
                {({
                      isSubmitting,
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      isValid,
                      handleSubmit,
                      validateForm,
                      dirty
                  }) => (
                    <Form>
                        <div className={p.post_item}>
                            <div className={p.info}>
                                <div className={p.info_edit}>
                                    <Field id='heading' name={'heading'} type='text' component='input'
                                           placeholder={"Заголовок..."} autoFocus={true} value={values.heading}/>
                                </div>
                                <div className={p.info_text}>
                                    <div>
                                        <Field id='textField' cols={50} rows={4} name={'textField'} type='text'
                                               component='textarea' autoFocus={true} value={values.textField}/>
                                    </div>
                                </div>
                            </div>
                            {/*<div className={p.info}>*/}
                            {/*    {!editHeading*/}
                            {/*        ? <h2 className={p.info_edit}*/}
                            {/*              onDoubleClick={() => setEditHeading(true)}>{values.heading || 'ЗАГОЛОВОК'}</h2>*/}
                            {/*        : <div className={p.info_edit} onBlur={() => setEditHeading(false)}>*/}
                            {/*            <Field id='heading' name={'heading'} type='text' component='input'*/}
                            {/*                   placeholder={"Заголовок..."} autoFocus={true} value={values.heading}/>*/}
                            {/*        </div>*/}
                            {/*    }*/}
                            {/*    <div className={p.info_text}>*/}
                            {/*        {!editText*/}
                            {/*            ? <p onDoubleClick={() => setEditText(true)}>{values.textField || 'ТЕКСТ'}</p>*/}
                            {/*            : <div onBlur={() => setEditText(false)}>*/}
                            {/*                <Field id='textField' cols={50} rows={4} name={'textField'} type='text'*/}
                            {/*                       component='textarea' autoFocus={true} value={values.textField}/>*/}
                            {/*            </div>*/}
                            {/*        }*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <button className={p.a_btn} type='submit' onClick={handleSubmit}
                                    disabled={!isValid && !dirty}>Add
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
            <button className={p.a_btn} onClick={handleCancel}>Отмена</button>
        </div>)
}

export default NewPost;