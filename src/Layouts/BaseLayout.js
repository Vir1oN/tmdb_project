import styles from './Styles/BaseLayout.module.css'
import {Link} from "react-router-dom";
import {useState} from 'react'
import {SearchBar} from "../Components/SearchBar/SearchBar";

export function BaseLayout({children}) {
    return (
        <div className={styles.mainWrapper}>
            <header>
                <div className={styles.linkWrapper}>
                    <Link to={'/1'}>Main Page</Link>
                </div>
                <SearchBar/>
            </header>
            <main>
                {children}
            </main>
            <footer>Footer</footer>
        </div>
    )
}
