import React from 'react'
import styles from './footer.module.css'
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.leftText}> AnnaGlow | Свечи ручной работы</p>
            <div className={styles.contacts}>
                <p>example@mail.com</p>
                <p>+1 (234) 567 890</p>
                <p>t.me/AnnaGlowShopp</p>
            </div>
        </footer>
    );
}