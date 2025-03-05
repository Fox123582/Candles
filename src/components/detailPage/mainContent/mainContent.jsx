import React from 'react';
import NavigationBar from "./navigationBar/navigationBar.jsx";
import styles from "./mainContent.module.css";
import ContainerForMainData from "./containerForMainData/containerForMainData.jsx";

function MainContent({title}) {
    return (
        <>
            <NavigationBar/>
            <h2 className={styles.title}>{title}</h2>
            <ContainerForMainData/>
        </>

    );
}

export default MainContent;