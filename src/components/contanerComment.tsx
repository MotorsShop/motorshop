import Comment from "./Comment"
import styles from "../styles/contanerComment.module.css"

export default function ContanerComment() {
    return (
        <div className= {styles.contanerComment}>
            <h2 className={styles.tituloComentario}>Comentários</h2>
            <Comment/>
        </div>
    )
}