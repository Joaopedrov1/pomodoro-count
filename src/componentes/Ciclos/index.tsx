import styles from "./styles.module.css";

export function Ciclos() {
    return (
        <div className={styles.Ciclos}> 
            <span> Ciclos: </span>

            <div className={styles.CiclosDots}> 
                <span className={`${styles.CiclosDot} ${styles.workTime}`}></span>
                <span className={`${styles.CiclosDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.CiclosDot} ${styles.workTime}`}></span>
                <span className={`${styles.CiclosDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.CiclosDot} ${styles.workTime}`}></span>
                <span className={`${styles.CiclosDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.CiclosDot} ${styles.workTime}`}></span>
                <span className={`${styles.CiclosDot} ${styles.longBreakTime}`}></span>
            </div>
        
        </div>
    );
}