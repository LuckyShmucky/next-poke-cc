import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import Head from 'next/head'
const Layout = ({children}) => {
  return (
    <>
    <Nav />
    <div className={styles.container}>
        <main className={styles.main}>
        <Header />    
        {children}
        </main>

    </div>
    </>
  )
}

export default Layout