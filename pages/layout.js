import styles from '../styles/Home.module.css';
// import 'animate.css';

const layout = ({children}) => {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
            {children}
        </main>
    </div>
  )
}

export default layout;