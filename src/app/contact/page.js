import React from 'react'
import ContactCard from '../component/ContactCard';
import ContactForm from '../component/ContactForm'
import styles from '@/app/styles/contact.module.css'

const page = () => {
  return (
    <>
      <div className={styles.container}>

        <h1>Contact Us</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>We like to hear from you</h2>
          <ContactForm/>
        </section>
      </div>
    </>
  )
}

export default page;