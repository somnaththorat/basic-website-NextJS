import styles from '@/app/styles/common.module.css'
import { Content } from 'next/font/google';
import Link from "next/link";

const NotFound = () => {
    return (
        <section style={{ alignContent: 'center' }}>
            <div >
                <h1>404</h1>
                <h2>Not Found</h2>
                
            </div>
            <div>
            <p>Could not find requested resource</p>
            </div>
            <div>
            <Link href="/">
                    <button>
                        Go to Home Page
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default NotFound;