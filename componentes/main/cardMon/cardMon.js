import styles from './cardMon.module.css'
import Link from "next/link"

function CardMon(props) {
    return (
        <>
            <Link className={styles.linkTypes} href={props.link}>
                <div className={styles.typeCard} style={{ backgroundImage: `url(${props.imgUrl})` }}>
                    <span className={styles.spanType}>{props.e.name}</span>
                </div>
            </Link>
        </>
    )
}
export default CardMon