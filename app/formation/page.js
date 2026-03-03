import styles from "./page.module.css";
import Tag from "../components/Tags";
import Link from "next/link";

export default function Formation(){
    return(
        <>
            <Link href="/formation/sorbonne" className={styles.card}>
                <p>Sorbonne</p>
            </Link>

            <Link href="/formation/esiee" className={styles.card}>
                <p>Esiee</p>
            </Link>

            <Link href="/formation/openclassroom" className={styles.card}>
                <p>OpenClassRoom</p>
            </Link>
        </>
    );
}