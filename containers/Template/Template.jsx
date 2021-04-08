import React from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import styles from './Template.module.scss'

const Template = ({ className, children }) => {
    return (
        <div className={(styles.template)}>
            <Header/>
            <main className={`${className} ${styles.main}`}>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Template
