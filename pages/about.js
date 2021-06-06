import React from 'react'
import Layout from '../components/layout'
import styles from './about.module.css'

export default function about() {
    return (
        <Layout>
            <div className = {styles.container}>
                <h1 className = {styles.title}> About Us</h1>
            </div>
        </Layout>
    )
}
