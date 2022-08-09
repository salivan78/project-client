import React from 'react';
import {login} from "../../action/user";
import {useDispatch, useSelector} from "react-redux";
import {Field, reduxForm} from "redux-form";
import log from "./Login.module.css"
import {Redirect, useHistory} from "react-router-dom";
import {emailCheck, maxLengthCreator, required} from "../utils/validators";
import {Input} from "../utils/FormsControls";

//let maxLength3 = maxLengthCreator(3)
const LoginForm = (props) => {

    //console.log(props)

    return (
        <div className={log.login_page}>
            <div className={log.form}>
                <h3 className={log.headerText}>Авторизация</h3>
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field name={'email'} component={Input} validate={[required, emailCheck]} type="text"
                               placeholder="Введите email"/>
                    </div>
                    <div>
                        <Field name={'password'} component={Input} validate={[required]} type="password"
                               placeholder="Введите пароль"/>
                    </div>
                    <div>
                        <Field name={'rememberMe'} type={'checkbox'} component={'input'}/>Запомнить меня
                    </div>
                    <button>Войти</button>
                </form>
            </div>
        </div>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.user.isAuth)

    const onSubmit = (form) => {
        dispatch(login(form.email, form.password, form.rememberMe))
        console.log(isAuth)
    }
    //let history = useHistory()

    //console.log(history)

        //history.push('/fdp/listsCertificates')


    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;