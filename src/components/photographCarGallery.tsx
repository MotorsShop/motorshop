import Image from 'next/image'
import styles from '../styles/photographGalleryCar.module.css'



export default function PhotographGalleryCar() {

    return(
    <>
        <div className={styles.photoCar}>
            <Image src="/assents/Carrinho.png" alt="imagem de carro" width={94} height={54} />
        </div>
    </>
    )
}