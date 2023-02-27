import Link from 'next/link'
import { useRouter } from 'next/router'
import Description from '@/components/description' 
import ContanerComment from '@/components/contanerComment'
import styles from '../../styles/vehicleid.module.css'
import PhotographCar from '@/components/photographCarDatail'
import PhotographGalleryCar from '@/components/photographCarGallery'

export default function Vehicle() {
    const router = useRouter()
    const vehicleId = router.query.vehicleId
    return (
    <>
    <body className={styles.body}>  
        <section className={styles.section1} >
            <div className={styles.banner} >
                <PhotographCar/>
                <Description/>
                <ContanerComment/>
            </div>
        </section>
        <aside className={styles.ownerGallery}>
            <div className={styles.photoGallery}>
                <h2>Fotos</h2>
                <ul className={styles.ulPhotoGallery}>
                    <li><PhotographGalleryCar/></li>
                    <li><PhotographGalleryCar/></li>
                    <li><PhotographGalleryCar/></li>
                    <li><PhotographGalleryCar/></li>
                    <li><PhotographGalleryCar/></li>
                    <li><PhotographGalleryCar/></li>
                </ul>
            </div>
            <div className={styles.ownerData}>
                <span className={styles.icone_letras_nome}>SL</span>
                <span className={styles.name}><strong>Samuel Leão</strong></span>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry
                </p>
            </div>           
        </aside>
    </body>
    </>
    )
  }
  