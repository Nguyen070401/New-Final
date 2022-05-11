import React from 'react'
import styles from  './ContactForm.module.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup'

export default function ContactForm() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            content: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
            .required("Required")
            .min(4, "Must be 4 character or more"),
            email: Yup.string()
            .required("Required")
            .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    "Please enter a valid email address"),
            content: Yup.string()
            .required("Required")
        })
    })
    
    const handleForm = (event) => {
        event.preventDefault();
        alert(`The name: ${formik.values.name} ; The Email: ${formik.values.email}; The content: ${formik.values.content}`);
    }

  return (
    <section>
        <form className={styles.contactform} >
            <label>HỌ VÀ TÊN</label>
            <input  className={styles.formsign1}
                type="text" 
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
            />
            {formik.errors.name && (
                <p className={styles.errmes} >{formik.errors.name}</p>
            )}
            <label>EMAIL</label>
            <input className={styles.formsign1}
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
            />
            {formik.errors.email && (
                <p className={styles.errmes} >{formik.errors.email}</p>
            )}
            <label>VẤN ĐỀ GẶP PHẢI HOẶC LỜI NHẮN</label>
            <input className={styles.formsign}
                type="text"
                id="content"
                name="content"
                value={formik.values.content}
                onChange={formik.handleChange}
            />
             {formik.errors.content && (
                <p className={styles.errmes} >{formik.errors.content}</p>
            )}
            <button  appearance='primary' onClick={handleForm} disabled={formik.errors.name || formik.errors.email || !formik.values.content} >Gửi đi <span><FontAwesomeIcon icon={faPaperPlane} /></span></button>
        </form>
    </section>
  )
}