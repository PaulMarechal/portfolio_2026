import Link from "next/link";
import styles from "./page.module.css";
import Tag from "../components/Tags";

export default function Projets(){

    return(
        <>
        <Link href="/projets/portfolio" className={styles.card}>
            <h2>Portfolio personnel</h2>
            <p>Site web moderne construit avec Next.js</p>

            <div className={styles.tags}>
                <Tag>Next.js</Tag>
                <Tag>React</Tag>
                <Tag>CSS Modules</Tag>
            </div>
        </Link>
        <Link href="/projets/ecommerce" className={styles.card}>
            <h2>Site E-commerce</h2>
            <p>Site e-commerce moder</p>

            <div className={styles.tags}>
                <Tag>Next.js</Tag>
                <Tag>React</Tag>
                <Tag>CSS Modules</Tag>
            </div>
        </Link>
        <Link href="/projets/blog" className={styles.card}>
            <h2>Blog</h2>
            <p>Blog moderne</p>

            <div className={styles.tags}>
                <Tag>Next.js</Tag>
                <Tag>React</Tag>
                <Tag>CSS Modules</Tag>
            </div>
        </Link>
        </>
    );
}