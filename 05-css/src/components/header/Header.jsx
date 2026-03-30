import styles from "./Header.module.css"

export default function Header(){
    return (
        <div className={styles.header}>
            <h3>Sheriyans</h3>
            <button className={styles.btn}>login</button>
        </div>
    )
}