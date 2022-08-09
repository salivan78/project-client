import p from "./Post.module.css"
import {Field, Form, Formik} from "formik";
import React, {useState} from "react";
import pc from "../Performance/PerformanceChart.module.css";
import moment from "moment";

const PostForm = () => {

    const [edit, setEdit] = useState(false)
    const now = moment().format("DD MMM YYYY")

    return (
        <div className={p.post}>
            <div className={pc.area_button}>
                <button onClick={() => setEdit(true)}>Ред</button>
            </div>
            {edit &&
            <div>
                <button>DOWNLOAD</button>
            </div>
            }
            <Formik
                initialValues={{
                    date: now,
                    heading: '',
                    textField: ''
                }}
                enableReinitialize
                validateOnBlur
                onSubmit={async (values, actions) => {
                    await setTimeout(() => {
                        // dispatch(login(values.email, values.password, values.rememberMe))
                        alert(now)
                        actions.setSubmitting(false);
                        actions.resetForm({
                            values: {
                                heading: '',
                                textField: ''
                            }
                        });
                        setEdit(false)
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
                        {edit &&
                        <div>
                            <div>
                                <Field id='heading' name={'heading'} type='text' component='input'
                                       placeholder={"Заголовок..."}/>
                            </div>
                            <div>
                                <Field id='textField' cols={50} rows={4} name={'textField'} type='text'
                                       component='textarea'/>
                            </div>
                            <button type='submit' onClick={handleSubmit} disabled={!isValid && !dirty}>Add</button>
                        </div>
                        }
                    </Form>
                )}
            </Formik>
        </div>)
}

export default PostForm;