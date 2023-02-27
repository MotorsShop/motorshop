import styles from '../styles/comment.module.css'

export default function Comment() {

return (

    <ul className={styles.comment_ul}>
        <li className= {styles.comment_li}>
            <span className={styles.icone_letras_nome}>JL</span>
            <span className={styles.name}><strong>Júlia Lima</strong></span>
            <span className={styles.ha_dias}> há 3 dias</span>
            <p className={styles.comment}>
                Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been 
                the industry standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type
                 and scrambled it to make a type specimen book.
            </p>
        </li>
        <li className= {styles.comment_li}>
            <span className={styles.icone_letras_nome}>Ma</span>
            <span className={styles.name}><strong>Marco Antônio</strong></span>
            <span className={styles.ha_dias}> há 7 dias</span>
            <p className={styles.comment}>
                Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been 
                the industry standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type
                 and scrambled it to make a type specimen book.
            </p>
        </li>
    </ul>
    )
}