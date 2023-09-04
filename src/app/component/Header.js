import React from 'react';
import styles from '@/app/styles/navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';
const Header = () => {
  return (
    <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
            <Link href='/'>
                <Image src='/Netflix.png' alt='my logo image' width={150} height={60} />
            </Link>

        </div>
        <Navbar/>
    </header>
  )
}

export default Header