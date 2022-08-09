import React from 'react';
import p from '../disk/Popup.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setPopupDisplay} from "../../redux/fileReducer";
import {Field, Form, Formik} from "formik";
import {updateComment} from "../../action/comment";

const CommentPopup = () => {

    const dispatch = useDispatch()
    const popupDisplay = useSelector(state => state.files.popupDisplay)
    const comment = useSelector(state => state.dataChart.comment)

    return (
        <div className={p.popup} style={{display: popupDisplay}}>
            <div className={p.popup_content} onClick={(event => event.stopPropagation())}>
                <div className={p.popup_header}>
                    <div className={p.popup_title}>Добавить комментарий</div>
                    <button className={p.popup_close} onClick={() => dispatch(setPopupDisplay('none'))}>X</button>
                </div>
                <div>
                    <Formik
                        initialValues={{correction: comment.comment}}
                        enableReinitialize
                        validateOnBlur
                        onSubmit={async (values, actions) => {
                            await setTimeout(() => {
                                dispatch(updateComment(
                                    comment._id,
                                    values.correction
                                ))
                                actions.setSubmitting(false)
                                dispatch(setPopupDisplay('none'))
                            })
                        }}
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
                                    <Field id='correction' cols={50} rows={4} name={'correction'} type='text'
                                           component='textarea' value={values.correction} autoFocus={true}/>
                                </div>
                                <button className={p.popup_create} type='submit' onClick={handleSubmit}>Создать</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default CommentPopup;