import React, {useState} from 'react';
import Input from "../utils/Input";
import {registration} from "../../action/user";

const Registration = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <div>Регистрация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email"/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль"/>
            <button onClick={() => registration(email, password)}>Зарегестрироваться</button>
        </div>
    );
};

export default Registration;