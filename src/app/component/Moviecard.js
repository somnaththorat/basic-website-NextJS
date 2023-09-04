import React from 'react';
import styles from '@/app/styles/common.module.css'
import Link from 'next/link';
import Image from 'next/image';


const Moviecard = (movie) => {
    const {id,type,title, synopsis} = movie.jawSummary
    // console.log('bg ',movie.jawSummary.backgroundImage)
  return (
    <>
    
        <div className={styles.card}>
            <div className={styles.card_image}>
                <Image src={movie.jawSummary.backgroundImage.url} alt={title} width={260} height={200} />
            </div>
            <div className={styles.card_data}>
                <h2>{title.substring(0,18)}</h2>
                <p>{`${synopsis.substring(0,66)}...`}</p>
                <Link href={`/movie/${id}`}>
                    <button>
                        Read More
                    </button>
                </Link>
            </div>

        </div>
    </>
  )
}

export default Moviecard