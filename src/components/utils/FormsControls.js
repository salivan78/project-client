import React from "react";
import styles from "./FormsControl.module.css"

export const MyInput = ({field, form, ...props}) => {

    return (
        <div className={styles.formControl + " " + (form.touched[field.name] &&
        form.errors[field.name] ? styles.error : "")}>
            <input {...field} {...props} />
            {form.touched[field.name] &&
            form.errors[field.name] && <span>*{form.errors[field.name]}</span>}
        </div>
    )
}