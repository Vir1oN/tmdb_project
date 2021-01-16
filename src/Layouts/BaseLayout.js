import styles from './Styles/BaseLayout.module.css'

export function BaseLayout({children}) {
    return (
        <div className={styles.mainWrapper}>
            <header>Header</header>
            <main>
                {children}
            </main>
            <footer>Footer</footer>
        </div>
    )
}
