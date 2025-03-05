import React from 'react';
import styles from './detailPage.module.css'
import MainContent from "./mainContent/mainContent.jsx";

function DetailPage({title}) {
    return (
        <div>
            <header>
                <div className={styles.container}>
                    <img src="src\assets\logo.png" alt="Background" className={styles.image} />
                </div>
            </header>
            <MainContent title={title} />
        </div>
    );
}

export default DetailPage;