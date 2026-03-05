'use client'
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation'
import styles from "./Navigation.module.css";

export default function Navigation(){
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return(
        <nav className={styles.nav}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Mon Portfolio
                </Link>

                <button
                    className={styles.burger}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span className={isOpen ? styles.burgerOpen : ''}></span>
                    <span className={isOpen ? styles.burgerOpen : ''}></span>
                    <span className={isOpen ? styles.burgerOpen : ''}></span>
                </button>

                <ul>
                    <li>
                        <Link href="/" className={pathname === "/" ? `${styles.link} ${styles.active}` : styles.link}>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link href="/formation" className={pathname === '/formation' ? `${styles.link} ${styles.active}` : styles.link}>
                            Formation
                        </Link>
                    </li>
                    <li>
                        <Link href="/projets" className={pathname === '/projets' ? `${styles.link} ${styles.active}` : styles.link}>
                            Projets
                        </Link>
                    </li>
                    <li>
                        <Link href="/a-propos" className={pathname === "/a-propos" ? `${styles.link} ${styles.active}` : styles.link}>
                            A propos
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={pathname === "/contact" ? `${styles.link} ${styles.active}` : styles.link}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}