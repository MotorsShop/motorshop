import Image from 'next/image'
import styles from '../styles/photographCarDatail.module.css'
import Button from './Button/Button'


export default function PhotographCar() {

    return(
        <>
        <div className={styles.divCar}>
            <Image src="/assents/Carro.png" alt="Carro" width={441} height={253} />
        </div>
        <div className={styles.contanerNameCar}>
            <h2 className={styles.nameCar} >Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h2>
            {/* <Button value='Comprar' fontColor='#ffffff' color='#4529E6' width='100px'  /> */}
     </div>
    </>
    )
}