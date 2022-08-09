import React from 'react';
import {login} from "../../action/user";
import {useDispatch} from "react-redux";
import log from "./Login.module.css"
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {MyInput} from "../utils/FormsControls";
import {useHistory} from "react-router-dom";
import styles from "../utils/FormsControl.module.css";

const LoginForm = () => {
    const dispatch = useDispatch()
    const validationSchema = Yup.object().shape({
        password: Yup.string().typeError('Должно быть строкой').required('Поле не может быть пустым'),
        email: Yup.string().email('Некорректный Email').required('Поле не может быть пустым')
    })
    const history = useHistory()

    return (
        <div className={log.login_page}>
            <div className={log.form}>
                {/*<h3 className={log.headerText}>Авторизация</h3>*/}
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        rememberMe: []
                    }}
                    validateOnBlur
                    onSubmit={async (values, actions) => {
                        await setTimeout(() => {
                            dispatch(login(values.email, values.password, values.rememberMe))
                            actions.setSubmitting(false);
                            actions.resetForm({
                                values: {
                                    email: '',
                                    password: '',
                                }
                            }, 500)
                            history.push('/homepage')
                        })
                    }}
                    validationSchema={validationSchema}
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
                            <h3 className={!errors.email &&
                            !errors.password ? log.blueAuth :log.errorAuth}>Авторизация</h3>
                            <div>
                                <Field id='email' name={'email'} component={MyInput} placeholder={"Введите email"}/>
                            </div>
                            <div>
                                <Field id='password' name={'password'} component={MyInput}
                                       placeholder={"Введите пароль"} autoComplete='off'/>
                            </div>
                            <div>
                                <Field id='rememberMe' name='rememberMe' type='checkbox' value='rememberMe'/>Запомнить
                                меня
                            </div>

                            <button type='submit' onClick={handleSubmit} disabled={!isValid && !dirty}>Войти</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default LoginForm;