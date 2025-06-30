import styles from "./styles.module.css";
import { Timer } from "lucide-react";

export function Logo() {
    return <div className={styles.logo}> 
      <a className = {styles.logoLink} href=""> 
        <Timer />
        <span> Pomodoro </span>
      </a>
    
    </div>;
}