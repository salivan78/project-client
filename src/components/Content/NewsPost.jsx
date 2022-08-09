import p from "./Post.module.css"
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import imgDefault from "../../images/wood-miaso-kolbasa-bekon-sous-spetsii-khleb-narezka-assorti.jpg"
import editPost from "../../assets/document_add.png"
import deletePost from "../../assets/document_delete.png"
import savePost from "../../assets/save_btn.png"
import moment from "moment";
import {Field, Form, Formik} from "formik";
import {deleteNews, deleteNewsImage, getCurrentNews, uploadNews, uploadNewsImage} from "../../action/news";
import {useParams} from "react-router";
import {useHistory} from "react-router-dom";
import d from "../disk/Disk.module.css";
import Loader from "../utils/Loader";
import {API_URL} from "../../config";

const NewsPost = () => {

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const param = useParams();
    const currentNews = useSelector(state => state.news.currentNews)
    const date = moment(currentNews.date, 'YYYY-MM-DDThh:mm').format("DD MMM YYYY H:mm")
    let history = useHistory()
    const loader = useSelector(state => state.app.loader)
    const newsImage = currentNews.media ? `${API_URL + currentNews.media}` : imgDefault

    useEffect(() => {
        dispatch(getCurrentNews(param._id))
    }, [param._id])

    function deleteClickHandler(e) {
        e.stopPropagation()
        dispatch(deleteNews(param._id))
        history.push('/homepage')
    }

    function changeHandler(e) {
        const file = e.target.files[0]
        dispatch(uploadNewsImage(file, param._id))
    }

    if (loader) {
        return (
            <div className={d.loader}>
                <Loader/>
            </div>
        )
    }

    return (
        <div className={p.news_post}>
            <div className={p.post_item}>
                <div className={p.image}>
                    <img src={newsImage}/>
                </div>
                {isAuth &&
                <div>
                    <input accept='image/*' onChange={e => changeHandler(e)} type='file' placeholder='Загрузить аватар'/>
                    <button onClick={() => dispatch(deleteNewsImage(param._id))}>Удалить изображение</button>
                </div>
                }
                <div className={p.post_date}>
                    {date}
                </div>
                <Formik
                    initialValues={{
                        heading: currentNews.heading,
                        textField: currentNews.text
                    }}
                    enableReinitialize
                    validateOnBlur
                    onSubmit={async (values, actions) => {
                        await setTimeout(() => {
                            dispatch(uploadNews(param._id, values.heading, values.textField))
                            actions.setSubmitting(false);
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
                            <div className={p.info}>
                                {!edit
                                    ? <h2>{values.heading}</h2>
                                    : <div className={p.info_edit}>
                                        <Field id='heading' name={'heading'} type='text' component='input'
                                               autoFocus={true} value={values.heading}/>
                                    </div>
                                }
                                {!edit
                                    ? <div className={p.info_text}>
                                        <p>{values.textField}</p>
                                    </div>
                                    : <div>
                                        <Field id='textField' cols={50} rows={4} name={'textField'} type='text'
                                               component='textarea' autoFocus={true} value={values.textField}/>
                                    </div>
                                }
                            </div>
                            {edit &&
                            <button className={p.delete_btn} type='submit' onClick={handleSubmit}
                                    disabled={!isValid && !dirty}><img src={savePost}/>
                            </button>
                            }
                        </Form>
                    )}
                </Formik>
                {isAuth &&
                <div className={p.post_btn}>
                    {!edit &&
                    <button className={p.edit_btn} onClick={() => setEdit(true)}><img src={editPost}/>
                    </button>
                    }
                    {!edit &&
                    <button className={p.delete_btn} onClick={(e) => deleteClickHandler(e)}><img src={deletePost}/>
                    </button>
                    }
                </div>
                }
            </div>
        </div>)
}

export default NewsPost;