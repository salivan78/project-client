/*
export const required = value => {
    if (!value) return "Поле не может быть пустым"
    return undefined
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Текст должен быть не более ${maxLength} символов!`
    return undefined
}

export const emailCheck = value => {
    //debugger
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return 'Некорректный Email'
    return undefined
}*/

export const validateEmail = (value) => {
    let error;

    if (!value) {
        error = 'Поле не может быть пустым';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Некорректный Email';
    }

    return error;
}