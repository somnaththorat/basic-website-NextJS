'use client'
import React, { useState } from "react";
import styles from "@/app/styles/contact.module.css";

const ContactForm = () => {
  const [user, setUser] = useState({
    username: '',
    email:'',
    phone:'',
    message:''
  })

  const [status, setStatus] = useState('')

  function handleChange(e){
    const name = e.target.name;
    const value= e.target.value;
    // console.log(user);

    setUser((prevUser)=>({...prevUser, [name]:value}))
  }
  const handleSubmit = async(e) =>{
    e.preventDefault()
    console.log(user);
    setStatus('pending')
        try {
            const res = await fetch('/api/Contact', {
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({
                    username: user.username,
                    email:user.email,
                    phone: user.phone,
                    message: user.message
                })
            })
            // console.log('res =>', res);
            if (res.status == 200) {
                setStatus('success')
            }else{
                setStatus('failed')
            }
        } catch (error) {
            console.log(error);
        }
  }
  return (
    <>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
          <label htmlFor="username" className={styles.label}>
            Full Name
            <input
              type="text"
              name="username"
              id="username"
              placeholder="enter name"
              value={user.username}
              onChange={handleChange} autoComplete = 'off' required
            />
          </label>
        </div>
        <div className={styles.input_field}>
          <label htmlFor="email" className={styles.label}>
            Email
            <input
              type="email"
              name="email"
              id="email" 
              placeholder="enter email"
              value={user.email}
              onChange={handleChange} autoComplete = 'off' required
            />
          </label>
        </div>
        <div className={styles.input_field}>
          <label htmlFor="phone" className={styles.label}>
            Phone
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="enter phone"
              value={user.phone}
              onChange={handleChange} autoComplete = 'off' required
            />
          </label>
        </div>

        <div className={styles.input_field}>
          <label htmlFor="message" className={styles.label}>
            Message
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="enter message"
              value={user.message}
              onChange={handleChange} autoComplete = 'off' required
            />
          </label>
        </div>
        <div>
        {status == 'pending' && <p >Please Wait</p>}
        {status == 'success' && <p className={styles.success_msg}>Thank You for Query</p>}
        {status == 'failed' && <p className={styles.error_msg}>Error Occured</p>}
          <button type="submit">Send Message</button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
