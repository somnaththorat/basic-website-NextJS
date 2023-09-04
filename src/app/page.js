import Image from 'next/image'
import styles from './page.module.css'
import Herosection from './component/Herosection'

export default function Home() {
  return (
   <>
    <Herosection title = {`Let's watch Movies Togather`} imageUrl={'/home.svg'}/>
   </>
  )
}
