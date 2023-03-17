import React, { useState, useRef } from 'react'
import styles from "./ContactForm.module.css";
import emailjs from '@emailjs/browser';




const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessgae] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    const [formStatus, setFormStatus] = React.useState('שלח');

    const form = useRef();

    const checkEmailValidity = (target) => {
        if (email === '') {
            target.setCustomValidity('אנא מלא שדה זה')
        }
        if (email !== '') {
            target.setCustomValidity('האימייל שהוכנס אינו תקין')
        }
    }


    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('שולח...');
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then(() => {
                setSuccess(true);
                setTimeout(() => {
                    cleanFields();
                }, "3000");
            }, (error) => {
                setError(true);
                console.log(error.text);
            });

    }

    const cleanFields = () => {
        setName('');
        setMessgae('');
        setEmail('');
        setFormStatus('שלח');
        setSuccess(false);
    }

    return (
        <div className={styles.page_container}>
            <section className={styles.contact_conatiner}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="wrapper">
                                <div className="row no-gutters">
                                    <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                                        <div className="contact-wrap w-100 p-md-5 p-4">
                                            <h3 className="mb-4">צור קשר</h3>
                                            {error && <div className="mb-4">
                                                <span className={styles.form_message_warning}>
                                                    אירעה שגיאה. אנא נסה שנית מאוחר יותר.
                                                </span></div>}
                                            {success && <div className="mb-4">
                                                <span className={styles.form_message_success}>
                                                    האימייל נשלח בהצלחה!
                                                </span></div>}
                                            <form onSubmit={onSubmit} ref={form} >
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div>
                                                            <label className="label" htmlFor="name">שם מלא</label>
                                                            <input type="text" className="form-control" name="to_name" id="name" value={name} onChange={e => setName(e.target.value)} placeholder="שם מלא" onInput={e => e.target.setCustomValidity('')} title='' onInvalid={e => e.target.setCustomValidity('אנא מלא שדה זה')} required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div>
                                                            <label className="label" htmlFor="email">אימייל</label>
                                                            <input type="email" className="form-control" name="reply_to" id="email" value={email} onChange={e => { setEmail(e.target.value); debugger; e.target.setCustomValidity('') }} placeholder="אימייל" title='' onInput={e => e.target.setCustomValidity('')} onInvalid={e => checkEmailValidity(e.target)} required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className={styles.form_message}>
                                                            <label className="label" htmlFor="message">הודעה</label>
                                                            <textarea name="message" className="form-control" id="message" cols="30" rows="4" value={message} style={{resize: 'none'}} onChange={e => setMessgae(e.target.value)} placeholder="הודעה" title='' onInput={e => e.target.setCustomValidity('')} onInvalid={e => e.target.setCustomValidity('אנא מלא שדה זה')} required></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className={styles.form_bttn_container}>
                                                            <input type="submit" value={formStatus} className={styles.form_bttn} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                                        <div className={styles.side_letter}>
                                            <div className="info-wrap w-100 p-md-5 p-4">
                                                <h3>בוא נהיה בקשר</h3>
                                                <p className="mb-4">אנחנו פתוחים לשמוע כל רעיון וצורך ולממש את החזון שלך עבורך!</p>
                                                <div className="dbox w-100 d-flex align-items-start">
                                                    <div className="icon d-flex align-items-center justify-content-center">
                                                        <span className="fa fa-map-marker"></span>
                                                    </div>
                                                </div>
                                                <div className="dbox w-100 d-flex align-items-center">
                                                    <div className="icon d-flex align-items-center justify-content-center">
                                                        <span className="fa fa-phone"></span>
                                                    </div>
                                                    <div className="text pl-3">
                                                        <p><span>טלפון:</span> <a className={styles.side_letter} href="tel://0505930108">050-593-0108</a></p>
                                                    </div>
                                                </div>
                                                <div className="dbox w-100 d-flex align-items-center">
                                                    <div className="icon d-flex align-items-center justify-content-center">
                                                        <span className="fa fa-paper-plane"></span>
                                                    </div>
                                                    <div className="text pl-3">
                                                        <p><span>אימייל:</span> <a className={styles.side_letter} href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ContactForm;