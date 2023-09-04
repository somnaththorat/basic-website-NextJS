import React from 'react';
import heroStyles from '@/app/styles/herosection.module.css'
import styles from '@/app/styles/common.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Herosection = ({title, imageUrl}) => {
  return (
    <>
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h1>{title}</h1> 
                        <p>
                        Netflix is a global streaming service that offers a vast library of movies, TV shows, and original content, providing viewers with endless entertainment options. With its user-friendly platform and diverse range of content, Netflix has become a household name in entertainment, catering to a worldwide audience.
                        </p>
                        <Link href='/movie'>
                            <button>
                                Explore Movies 
                            </button>
                        </Link>
                        
                    </div>
                    <div className={heroStyles.hero_image}>
                        <Image src={imageUrl} alt='watching Netflix' width={500} height={500} /> 
                    </div>

                </div>

            </div>
            

        </main>
    </>
  )
}

export default Herosection