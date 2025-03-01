import React from 'react'
import styles from './mainContent.module.css'
import CandlesContainer from './candlesContainer/candlesContainer'

export default function MainContent() {
  return (
    <main className={styles.main}>
        <CandlesContainer/>
    </main>
  )
}
